const passport = require('passport')

const Account = require('../models/account')

module.exports = {

  /*
    Get list of all accounts
  */
  getAccounts: (req, res) => {
    Account.find({}, (err, data) => {
      console.log('getAccounts:', data)
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      if (!data) res.status(404).json({ 'message': 'Failed to get list of all accounts' })
      res.status(200).json(data)
    })
  },

  /*
    Delete all accounts
  */
  deleteAccounts: (req, res) => {
    Account.remove({}, (err) => {
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      res.status(200).json({ 'message': `All accounts have been deleted` })
    })
  },

  /*
    Get profile of an account by ID
  */
  getAccountProfileById: (req, res) => {
    Account.findOne({
      accountId: req.params.accountId
    }, (err, data) => {
      console.log('getProfileById:', data)
      if (err) res.status(400).json({ 'error': `Error: ${err}` })
      if (!data) res.status(404).json({ 'message': 'Failed to get account profile by ID' })
      res.status(200).json(data)
    })
  }

}
