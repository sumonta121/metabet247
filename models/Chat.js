const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    senderid: {
        type: String,
        required: true
    },
    receiverid: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['sent', 'seen'], // Add 'seen' as a status option
        required: true,
    },
    seenAt: {
        type: Date, // Optionally, you can also store the timestamp of when the message was seen
    },
}, {
    timestamps: true
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
