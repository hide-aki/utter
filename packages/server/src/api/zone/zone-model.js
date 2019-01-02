import mongoose, {Schema} from "mongoose"
import User, {UserSchema} from "../user/user-model.js"
import {TermSchema} from "../term/term-model.js"
import {LevelSchema} from "../level/level-model.js"

const ZoneSchema = mongoose.Schema(
  {
    zoneName: {
      type: String,
      default: "",
      required: [true, "can't be blank"]
    },
    zoneAuthor: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    zoneImage: {
      type: String,
      default:
        "https://res.cloudinary.com/dgvw5b6pf/image/upload/v1545873897/game-thumbnails/jon-tyson-762647-unsplash_vlvsyk"
    },
    zonePages: {
      type: Number,
      default: -1
    },
    zoneRef: [
      {
        type: Schema.Types.Mixed,
        default: {}
      }
    ],
    teachingLang: {
      type: String,
      default: ""
    },
    usingLang: {
      type: String,
      default: ""
    },
    zoneDescription: {
      type: String,
      default: ""
    }
  },
  {timestamps: true}
)

ZoneSchema.index({zoneName: "text", zoneDescription: "text"})

ZoneSchema.statics.findByUsername = function(username, callback) {
  var query = this.findOne()

  User.findOne({username}).exec(callback)
  return query
}

ZoneSchema.virtual("id").get(function() {
  return this._id.toHexString()
})

ZoneSchema.set("toJSON", {
  virtuals: true
})

export default mongoose.model("Zone", ZoneSchema)