package com.chatnav.model;

import java.time.LocalDateTime;

public class Notes {
    private int noteId;
    private int userId;
    private String noteContent;
    private LocalDateTime createdAt;

    public Notes() {}

    public Notes(int noteId, int userId, String noteContent, LocalDateTime createdAt) {
        this.noteId = noteId;
        this.userId = userId;
        this.noteContent = noteContent;
        this.createdAt = createdAt;
    }

    public int getNoteId() { return noteId; }
    public void setNoteId(int noteId) { this.noteId = noteId; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getNoteContent() { return noteContent; }
    public void setNoteContent(String noteContent) { this.noteContent = noteContent; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}