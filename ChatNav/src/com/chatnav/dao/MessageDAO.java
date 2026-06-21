package com.chatnav.dao;

import com.chatnav.model.Message;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MessageDAO {

    // Send message
    public boolean sendMessage(Message message) {
        String query = "INSERT INTO messages (sender_id, receiver_id, message_type, content, timestamp, is_starred, is_deleted) VALUES (?, ?, ?, ?, ?, ?, ?)";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, message.getSenderId());
            ps.setInt(2, message.getReceiverId());
            ps.setString(3, message.getMessageType());
            ps.setString(4, message.getContent());
            ps.setTimestamp(5, Timestamp.valueOf(message.getTimestamp()));
            ps.setBoolean(6, message.isStarred());
            ps.setBoolean(7, message.isDeleted());
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error sending message: " + e.getMessage());
            return false;
        }
    }

    // Get all messages between 2 users
    public List<Message> getMessages(int senderId, int receiverId) {
        List<Message> messages = new ArrayList<>();
        String query = "SELECT * FROM messages WHERE " +
                      "(sender_id = ? AND receiver_id = ?) OR " +
                      "(sender_id = ? AND receiver_id = ?) " +
                      "AND is_deleted = FALSE ORDER BY timestamp ASC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, senderId);
            ps.setInt(2, receiverId);
            ps.setInt(3, receiverId);
            ps.setInt(4, senderId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Message msg = new Message(
                    rs.getInt("message_id"),
                    rs.getInt("sender_id"),
                    rs.getInt("receiver_id"),
                    rs.getString("message_type"),
                    rs.getString("content"),
                    rs.getTimestamp("timestamp").toLocalDateTime(),
                    rs.getBoolean("is_starred"),
                    rs.getBoolean("is_deleted")
                );
                messages.add(msg);
            }
        } catch (SQLException e) {
            System.out.println("❌ Error fetching messages: " + e.getMessage());
        }
        return messages;
    }

    // Search messages by date
    public List<Message> searchByDate(int senderId, int receiverId, String date) {
        List<Message> messages = new ArrayList<>();
        String query = "SELECT * FROM messages WHERE " +
                      "((sender_id = ? AND receiver_id = ?) OR " +
                      "(sender_id = ? AND receiver_id = ?)) " +
                      "AND DATE(timestamp) = ? " +
                      "AND is_deleted = FALSE " +
                      "ORDER BY timestamp ASC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, senderId);
            ps.setInt(2, receiverId);
            ps.setInt(3, receiverId);
            ps.setInt(4, senderId);
            ps.setString(5, date);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Message msg = new Message(
                    rs.getInt("message_id"),
                    rs.getInt("sender_id"),
                    rs.getInt("receiver_id"),
                    rs.getString("message_type"),
                    rs.getString("content"),
                    rs.getTimestamp("timestamp").toLocalDateTime(),
                    rs.getBoolean("is_starred"),
                    rs.getBoolean("is_deleted")
                );
                messages.add(msg);
            }
            // If no messages found
            if (messages.isEmpty()) {
                System.out.println("📭 No messages found on this date!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error searching messages: " + e.getMessage());
        }
        return messages;
    }

    // Search messages by type (image, audio, video, pdf, text)
    public List<Message> searchByType(int senderId, int receiverId, String type) {
        List<Message> messages = new ArrayList<>();
        String query = "SELECT * FROM messages WHERE " +
                      "((sender_id = ? AND receiver_id = ?) OR " +
                      "(sender_id = ? AND receiver_id = ?)) " +
                      "AND message_type = ? " +
                      "AND is_deleted = FALSE " +
                      "ORDER BY timestamp ASC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, senderId);
            ps.setInt(2, receiverId);
            ps.setInt(3, receiverId);
            ps.setInt(4, senderId);
            ps.setString(5, type);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Message msg = new Message(
                    rs.getInt("message_id"),
                    rs.getInt("sender_id"),
                    rs.getInt("receiver_id"),
                    rs.getString("message_type"),
                    rs.getString("content"),
                    rs.getTimestamp("timestamp").toLocalDateTime(),
                    rs.getBoolean("is_starred"),
                    rs.getBoolean("is_deleted")
                );
                messages.add(msg);
            }
            // If no messages found
            if (messages.isEmpty()) {
                System.out.println("📭 No " + type + " messages found!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error searching by type: " + e.getMessage());
        }
        return messages;
    }

    // Star a message
    public boolean starMessage(int messageId) {
        String query = "UPDATE messages SET is_starred = TRUE WHERE message_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, messageId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error starring message: " + e.getMessage());
            return false;
        }
    }

    // Delete a message (soft delete - keeps scroll position)
    public boolean deleteMessage(int messageId) {
        String query = "UPDATE messages SET is_deleted = TRUE WHERE message_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, messageId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error deleting message: " + e.getMessage());
            return false;
        }
    }

    // Get starred messages
    public List<Message> getStarredMessages(int senderId, int receiverId) {
        List<Message> messages = new ArrayList<>();
        String query = "SELECT * FROM messages WHERE " +
                      "((sender_id = ? AND receiver_id = ?) OR " +
                      "(sender_id = ? AND receiver_id = ?)) " +
                      "AND is_starred = TRUE " +
                      "AND is_deleted = FALSE " +
                      "ORDER BY timestamp ASC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, senderId);
            ps.setInt(2, receiverId);
            ps.setInt(3, receiverId);
            ps.setInt(4, senderId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Message msg = new Message(
                    rs.getInt("message_id"),
                    rs.getInt("sender_id"),
                    rs.getInt("receiver_id"),
                    rs.getString("message_type"),
                    rs.getString("content"),
                    rs.getTimestamp("timestamp").toLocalDateTime(),
                    rs.getBoolean("is_starred"),
                    rs.getBoolean("is_deleted")
                );
                messages.add(msg);
            }
            if (messages.isEmpty()) {
                System.out.println("📭 No starred messages found!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error fetching starred messages: " + e.getMessage());
        }
        return messages;
    }
}