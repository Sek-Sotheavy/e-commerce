const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb+srv://Theavy:theavy123@theavy.ajotu5l.mongodb.net/ecommerce?retryWrites=true&w=majority', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ",err);
  }
}
