package com.chatnav.service;

import com.chatnav.dao.MessageDAO;
import com.chatnav.model.Message;
import java.time.LocalDateTime;
import java.util.List;

public class MessageService {

    private MessageDAO messageDAO = new MessageDAO();

    // Send message
    public boolean sendMessage(int senderId, int receiverId, 
                               String type, String content) {
        if (content == null || content.isEmpty()) {
            System.out.println("❌ Message content cannot be empty!");
            return false;
        }
        Message message = new Message(
            0, senderId, receiverId,
            type, content,
            LocalDateTime.now(),
            false, false
        );
        boolean result = messageDAO.sendMessage(message);
        if (result) {
            System.out.println("✅ Message sent successfully!");
        }
        return result;
    }

    // Get all messages between 2 users
    public List<Message> getMessages(int senderId, int receiverId) {
        List<Message> messages = messageDAO.getMessages(senderId, receiverId);
        if (messages.isEmpty()) {
            System.out.println("📭 No messages found!");
        }
        return messages;
    }

    // Search messages by date
    public List<Message> searchByDate(int senderId, int receiverId, String date) {
        if (date == null || date.isEmpty()) {
            System.out.println("❌ Date cannot be empty!");
            return null;
        }
        List<Message> messages = messageDAO.searchByDate(senderId, receiverId, date);
        if (messages.isEmpty()) {
            System.out.println("📭 No messages found on this date: " + date);
        }
        return messages;
    }

    // Search messages by type
    public List<Message> searchByType(int senderId, int receiverId, String type) {
        if (type == null || type.isEmpty()) {
            System.out.println("❌ Type cannot be empty!");
            return null;
        }
        List<Message> messages = messageDAO.searchByType(senderId, receiverId, type);
        if (messages.isEmpty()) {
            System.out.println("📭 No " + type + " messages found!");
        }
        return messages;
    }

    // Star a message
    public boolean starMessage(int messageId) {
        boolean result = messageDAO.starMessage(messageId);
        if (result) {
            System.out.println("✅ Message starred successfully!");
        }
        return result;
    }

    // Delete a message
    public boolean deleteMessage(int messageId) {
        boolean result = messageDAO.deleteMessage(messageId);
        if (result) {
            System.out.println("✅ Message deleted successfully!");
        }
        return result;
    }

    // Get starred messages
    public List<Message> getStarredMessages(int senderId, int receiverId) {
        List<Message> messages = messageDAO.getStarredMessages(senderId, receiverId);
        if (messages.isEmpty()) {
            System.out.println("📭 No starred messages found!");
        }
        return messages;
    }
}