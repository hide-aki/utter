import User from './userModel.js'
import _ from 'lodash'
import isEmpty from 'lodash/isEmpty'
import auth from '../../auth/auth'
const signToken = auth.signToken

exports.params = (req, res, next, id) => {
  User.findById(id).then(
    user => {
      if (!user) {
        next(new Error('No user with that id'))
      } else {
        req.user = user
        next()
      }
    },
    err => {
      next(err)
    }
  )
}

exports.get = (req, res, next) => {
  User.find({}).select('-password').exec().then(
    users => {
      res.json(
        users.map(user => {
          return user.toJSON()
        })
      )
    },
    err => {
      next(err)
    }
  )
}

exports.getOne = (req, res, next) => {
  let user = req.user
  res.json(user)
}

exports.update = (req, res, next) => {
  let user = req.user
  let update = req.body

  _.merge(user, update)

  user.markModified('utteredList')
  user.save((err, saved) => {
    if (err) {
      next(err)
    } else {
      res.json(saved.toJSON())
    }
  })
}

exports.post = (req, res, next) => {
  let newUser = new User(req.body)

  newUser.hashedPassword = newUser.encryptPassword(newUser.password)

  newUser.save(function(err, user) {
    if (err) {
      return next(err)
    }

    let token = signToken(newUser._id)
    res.json({token: token})
  })
}

exports.delete = (req, res, next) => {
  req.user.remove((err, removed) => {
    if (err) {
      next(err)
    } else {
      res.json(removed)
    }
  })
}
