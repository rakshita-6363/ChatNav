package com.chatnav.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class TodoItem {
    private int todoId;
    private int userId;
    private String task;
    private boolean isCompleted;
    private LocalDate dueDate;
    private LocalDateTime reminderTime;  // NEW
    private boolean isReminderSet;       // NEW

    public TodoItem() {}

    public TodoItem(int todoId, int userId, String task,
                    boolean isCompleted, LocalDate dueDate,
                    LocalDateTime reminderTime, boolean isReminderSet) {
        this.todoId = todoId;
        this.userId = userId;
        this.task = task;
        this.isCompleted = isCompleted;
        this.dueDate = dueDate;
        this.reminderTime = reminderTime;
        this.isReminderSet = isReminderSet;
    }

    public int getTodoId() { return todoId; }
    public void setTodoId(int todoId) { this.todoId = todoId; }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public boolean isCompleted() { return isCompleted; }
    public void setCompleted(boolean isCompleted) { this.isCompleted = isCompleted; }

    public LocalDate getDueDate() { return dueDate; }
    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }

    public LocalDateTime getReminderTime() { return reminderTime; }
    public void setReminderTime(LocalDateTime reminderTime) { this.reminderTime = reminderTime; }

    public boolean isReminderSet() { return isReminderSet; }
    public void setReminderSet(boolean isReminderSet) { this.isReminderSet = isReminderSet; }
}