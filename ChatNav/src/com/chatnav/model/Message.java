package com.chatnav.model;

import java.time.LocalDateTime;

public class Message {
    private int messageId;
    private int senderId;
    private int receiverId;
    private String messageType; // text, image, audio, video, pdf
    private String content;
    private LocalDateTime timestamp;
    private boolean isStarred;
    private boolean isDeleted;

    public Message() {}

    public Message(int messageId, int senderId, int receiverId, 
                   String messageType, String content, 
                   LocalDateTime timestamp, boolean isStarred, boolean isDeleted) {
        this.messageId = messageId;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.messageType = messageType;
        this.content = content;
        this.timestamp = timestamp;
        this.isStarred = isStarred;
        this.isDeleted = isDeleted;
    }

    public int getMessageId() { return messageId; }
    public void setMessageId(int messageId) { this.messageId = messageId; }

    public int getSenderId() { return senderId; }
    public void setSenderId(int senderId) { this.senderId = senderId; }

    public int getReceiverId() { return receiverId; }
    public void setReceiverId(int receiverId) { this.receiverId = receiverId; }

    public String getMessageType() { return messageType; }
    public void setMessageType(String messageType) { this.messageType = messageType; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public boolean isStarred() { return isStarred; }
    public void setStarred(boolean isStarred) { this.isStarred = isStarred; }

    public boolean isDeleted() { return isDeleted; }
    public void setDeleted(boolean isDeleted) { this.isDeleted = isDeleted; }
}