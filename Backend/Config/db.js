const Mongoose = require('mongoose');

const conectedDb = async () => {
  try {
    await Mongoose.connect(process.env.MONGO_URI);
    console.log('Conected Db Done');
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectedDb;
