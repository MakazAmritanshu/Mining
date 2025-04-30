// /services/bankDetailService.js

const BankDetail=require('../Models/bankdetails.model');
const User=require('../Models/user.model');

module.exports.addBankDetail = async (bankName, recipientName, accountNumber, email, ifscCode, userId) => {
  try {
    const newBankDetail = new BankDetail({
      user: userId,
      bankName,
      recipientName,
      accountNumber,
      email,
      ifscCode,
    });

    // Save the bank details
    await newBankDetail.save();

    return newBankDetail;
  } catch (err) {
    console.log("Error in adding bank details service:", err);
    return null;
  }
};
