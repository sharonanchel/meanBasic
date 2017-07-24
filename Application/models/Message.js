var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MessageSchema = mongoose.Schema({
  message: String,
  userId: {type: Schema.Types.ObjectId, ref: 'user'}
})

mongoose.model("Message", MessageSchema);
