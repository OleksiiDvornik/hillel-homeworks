const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UsersSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: Number,
    isAdmin: {
        type: Boolean,
        default: false
    },
    createDate: {
        type: Date,
        default: new Date()
    },
    updateDate: {
        type: Date,
        default: new Date()
    }
},  { versionKey: false })

const UserModel = mongoose.model('Users', UsersSchema);

module.exports = UserModel;