package com.chatnav.service;

import com.chatnav.dao.NotesDAO;
import com.chatnav.model.Notes;
import java.time.LocalDateTime;
import java.util.List;

public class NotesService {

    private NotesDAO notesDAO = new NotesDAO();

    // Add new note
    public boolean addNote(int userId, String content) {
        if (content == null || content.isEmpty()) {
            System.out.println("❌ Note content cannot be empty!");
            return false;
        }
        Notes note = new Notes(0, userId, content, LocalDateTime.now());
        boolean result = notesDAO.addNote(note);
        if (result) {
            System.out.println("✅ Note added successfully!");
        }
        return result;
    }

    // Get all notes of a user
    public List<Notes> getNotesByUser(int userId) {
        List<Notes> notes = notesDAO.getNotesByUser(userId);
        if (notes.isEmpty()) {
            System.out.println("📭 No notes found!");
        }
        return notes;
    }

    // Update a note
    public boolean updateNote(int noteId, String newContent) {
        if (newContent == null || newContent.isEmpty()) {
            System.out.println("❌ Note content cannot be empty!");
            return false;
        }
        boolean result = notesDAO.updateNote(noteId, newContent);
        if (result) {
            System.out.println("✅ Note updated successfully!");
        }
        return result;
    }

    // Delete a note
    public boolean deleteNote(int noteId) {
        boolean result = notesDAO.deleteNote(noteId);
        if (result) {
            System.out.println("✅ Note deleted successfully!");
        }
        return result;
    }

    // Search notes by keyword
    public List<Notes> searchNotes(int userId, String keyword) {
        if (keyword == null || keyword.isEmpty()) {
            System.out.println("❌ Search keyword cannot be empty!");
            return null;
        }
        List<Notes> notes = notesDAO.searchNotes(userId, keyword);
        if (notes.isEmpty()) {
            System.out.println("📭 No notes found with keyword: " + keyword);
        }
        return notes;
    }
}