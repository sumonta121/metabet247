const express = require("express");
const router = express.Router();
const User = require('../../models/User')
const Game = require('../../models/Game')
const Comment = require('../../models/Comment')
const Countries = require('../../models/Countries')
const Slide = require('../../models/SlideManage')
const Chat = require('../../models/Chat')
const BasicSetting = require('../../models/BasicSetting')
const mongoose = require("mongoose");
const Pusher          = require('pusher');

    // Create a new instance of Pusher
    const pusher = new Pusher({
        appId: '1799947',
        key: '263926cec81537c7c913',
        secret: '52b57d6943f7d40c1095',
        cluster: 'ap2',
    });

    router.post('/new_chats', async (req, res) => {
        try {
            const { user_id, role_as } = req.body;
            
            // Get the list of receiver IDs for unseen messages
            const unseenReceiverIds = await Chat.find({
                receiverid: user_id,
                // status: { $ne: 'seen' } 
            }).distinct('senderid');
          
            // Fetch receiver information for the unseen messages
            const receiverInfo = await User.find({ user_id: { $in: unseenReceiverIds } })
                                        .select('user_id first_name last_name email phone');
            return res.json(receiverInfo);
    
           
        } catch (error) {
            console.error('Error fetching chat messages:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    

    router.post('/chats', async (req, res) => {
        try {
            const { senderid, receiverid } = req.body;
            const chatMessages = await Chat.find({
                $or: [
                    { senderid: senderid, receiverid: receiverid },
                    { senderid: receiverid, receiverid: senderid }
                ]
            }).sort({ createdAt: 1 }); // Sort by createdAt in ascending order
          
            const receiverInfo = await User.findOne({ user_id: receiverid }).select('user_id first_name last_name email phone');
            return res.json({ chatMessages, receiverInfo });

        } catch (error) {
            console.error('Error fetching chat messages:', error);
            return  res.status(500).json({ error: 'Internal Server Error' });
        }
    });

    

    router.post('/broadcast', async (req, res) => {
        const { message, senderid, receiverid } = req.body;
        const data = { message, senderid, receiverid };
        const newChat = new Chat({
            senderid: senderid,
            receiverid: receiverid,
            message: message,
            status: 'sent' 
        });
        try {
            await newChat.save();
        } catch (error) {
            console.error('Error saving chat message:', error);
            return res.status(500).json({ success: false, error: 'Failed to save chat message' });
        }
        // Trigger the Pusher event to broadcast the chat message
        pusher.trigger('public', 'chat', data);   
        return res.json({ success: true, data });
    });

    

    

    router.post('/receive', (req, res) => {
        const { message , senderid, receiverid} = req.body;
        const data = { message , senderid, receiverid};
        return res.json({ success: true, data });
    });



module.exports = router;
