import {isEmpty} from "lodash"
import mongoose from "mongoose"
import Zone from "./zone-model"

const escapeRegex = text => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

const getZone = async (_, {zoneId}, {user}) => {
  console.log("zoneId: ", zoneId)
  const zone = await Zone.findById(zoneId).exec()
  if (!zone) {
    throw new Error("Cannot find zone with id")
  }

  return zone
}

const zoneDelete = async (_, {id}, ctx) => {
  console.log("id: ", id)
  const zone = await Zone.findById(id).exec()
  /* Zone.findOneAndDelete({owner: user._id && id: id}) { */
  /* } */

  if (!zone) {
    throw new Error("No zone found.")
  }

  if (zone.owner === id) {
    // TODO: delete zone
  }

  return zone
}

const zoneUpdate = (_, {input}) => {
  const {id, ...update} = input
  return Zone.findByIdAndUpdate(id, update, {new: true}).exec()
}

const zoneCreate = async (_, args, ctx, info) => {
  //TODO can't have duplicate zone names
  const {input} = args
  console.log("ingput: ", input)
  const zone = await Zone.create(input)
  zone.id = zone._id
  return zone
}

const getZoneLevels = async (_, args, ctx, info) => {
  // build query object
  const query = {}
  query.owner = ctx.user
}

const getZones = async (_, args, ctx, info) => {
  console.log("args: ", args)
  // build query object
  const query = {}
  var zoneName, zoneRef, owner, usingLang, teachingLang, app, appLevel

  args.zoneName
    ? (query.zoneName = new RegExp(escapeRegex(args.zoneName), "gi"))
    : null

  args.ref ? (query.zoneRef = new RegExp(escapeRegex(args.ref), "gi")) : null

  if (args.owner) {
    var owner = await Zone.findByUsername(args.owner, (err, docs) => {
      if (err) {
        // console.log doesn't work here
      }
      if (!isEmpty(docs)) {
        var owner = docs._id
        query.owner = owner
      }
    })
  }

  args.usingLang
    ? (query.usingLang = new RegExp(escapeRegex(args.usingLang), "gi"))
    : null

  args.teachingLang
    ? (query.teachingLang = new RegExp(escapeRegex(args.teachingLang), "gi"))
    : null
  // end query object

  if (args.cursor) {
    // type cast id, $lt is not the same in aggregate vs query
    var cursor = mongoose.Types.ObjectId(args.cursor)
    // add to query object
    query._id = {$lt: cursor}
  }

  console.log("query: ", query)

  let result = await Zone.find(query)
    .limit(12)
    .sort({_id: -1})
    .exec()

  if (isEmpty(result)) {
    console.log("done")
    return {zones: [], cursor: "done"}
  } else {
    cursor = result[result.length - 1]._id
    return {zones: result, cursor}
  }
}

export const zoneResolvers = {
  Query: {
    getZones,
    getZone,
    getZoneLevels
  },
  Mutation: {
    zoneDelete,
    zoneUpdate,
    zoneCreate
  },
  Zone: {
    async owner(zone) {
      const populated = await zone.populate("owner").execPopulate()

      return populated.owner
    }
  }
}
