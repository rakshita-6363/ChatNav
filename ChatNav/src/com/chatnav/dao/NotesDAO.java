package com.chatnav.dao;

import com.chatnav.model.Notes;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class NotesDAO {

    // Add new note
    public boolean addNote(Notes note) {
        String query = "INSERT INTO notes (user_id, note_content) VALUES (?, ?)";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, note.getUserId());
            ps.setString(2, note.getNoteContent());
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error adding note: " + e.getMessage());
            return false;
        }
    }

    // Get all notes of a user
    public List<Notes> getNotesByUser(int userId) {
        List<Notes> notes = new ArrayList<>();
        String query = "SELECT * FROM notes WHERE user_id = ? ORDER BY created_at DESC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, userId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Notes note = new Notes(
                    rs.getInt("note_id"),
                    rs.getInt("user_id"),
                    rs.getString("note_content"),
                    rs.getTimestamp("created_at").toLocalDateTime()
                );
                notes.add(note);
            }
            // If no notes found
            if (notes.isEmpty()) {
                System.out.println("📭 No notes found for this user!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error fetching notes: " + e.getMessage());
        }
        return notes;
    }

    // Update a note
    public boolean updateNote(int noteId, String newContent) {
        String query = "UPDATE notes SET note_content = ? WHERE note_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, newContent);
            ps.setInt(2, noteId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error updating note: " + e.getMessage());
            return false;
        }
    }

    // Delete a note
    public boolean deleteNote(int noteId) {
        String query = "DELETE FROM notes WHERE note_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, noteId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error deleting note: " + e.getMessage());
            return false;
        }
    }

    // Search notes by keyword
    public List<Notes> searchNotes(int userId, String keyword) {
        List<Notes> notes = new ArrayList<>();
        String query = "SELECT * FROM notes WHERE user_id = ? AND note_content LIKE ? ORDER BY created_at DESC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, userId);
            ps.setString(2, "%" + keyword + "%");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Notes note = new Notes(
                    rs.getInt("note_id"),
                    rs.getInt("user_id"),
                    rs.getString("note_content"),
                    rs.getTimestamp("created_at").toLocalDateTime()
                );
                notes.add(note);
            }
            // If no notes found
            if (notes.isEmpty()) {
                System.out.println("📭 No notes found with keyword: " + keyword);
            }
        } catch (SQLException e) {
            System.out.println("❌ Error searching notes: " + e.getMessage());
        }
        return notes;
    }
}