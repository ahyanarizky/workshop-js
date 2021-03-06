const express = require('express')
const router = express.Router()
const passport = require('passport')

const auth = require('../controllers/api.auth.js')


/*
--------------------------------------------------------------------------------
AUTHENTICATION
/auth
--------------------------------------------------------------------------------
*/

// SIGN UP
// Require name, username, email, passsword
router.post('/signup', auth.isAccountExist, auth.signup)

// SIGN IN
// Require username and passsword
router.post('/signin', auth.signin)

// SIGN OUT
// Not necessary if using different host/port
router.get('/signout', auth.signout)

// IS ACCOUNT EXIST?
// Require 'username'
router.post('/isAccountExist', auth.isAccountExist, (req, res) => { res.send(true) })

// IS AUTHENTICATED?
// Require 'Authorization: Bearer JWT'
router.post('/isAuthenticated', auth.isAuthenticated, (req, res) => { res.send(true) })


/*
--------------------------------------------------------------------------------
OAUTH THIRD PARTY
There's no actual controller here since for each API endoint,
they're only calling authentication through Passport.
--------------------------------------------------------------------------------
*/

/**
 * GitHub
 */

router.get('/github',
  passport.authenticate('github')
)

router.get('/github/callback',
  passport.authenticate('github', {
    successRedirect: '/profile',
    failureRedirect: '/'
  })
)

/**
 * Facebook
 */

router.get('/facebook',
  passport.authenticate('facebook', {
    scope: ['email']
  }))

router.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/'
  })
)

/**
 * Twitter
 */

router.get('/twitter',
  passport.authenticate('twitter')
)

router.get('/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/profile',
    failureRedirect: '/'
  })
)

/**
 * Google
 */

router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }))

// -----------------------------------------------------------------------------

module.exports = router
