const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()


const db = mongoose.connection;
let accounts = db.collection('transactions')

router.get('/:account_id', async (req, res) => {
    try {
      const id_acc = parseInt(req.params.account_id)
      const account = await accounts.findOne({account_id: id_acc});
      if (account) {
        res.status(200).json(account);
      } else {
        res.status(404).json({ message: 'Account not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  module.exports = router