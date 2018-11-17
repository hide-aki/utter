import {signToken} from './auth'
import passport from 'passport'
import '../config/passport.js'

export default {
  signin: (req, res, next) => {
    // req.user will be there from middleware verify user
    // create a token and send back to the client to consume
    let token = signToken(req.user._id)
    res.json({token: token, user: req.user})
  },

  getGoogleLogin: passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
  }),

  googleLogin: passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
}