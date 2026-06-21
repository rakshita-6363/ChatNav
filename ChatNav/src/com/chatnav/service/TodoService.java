package com.chatnav.service;

import com.chatnav.dao.TodoDAO;
import com.chatnav.model.TodoItem;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public class TodoService {

    private TodoDAO todoDAO = new TodoDAO();

    // Add new todo
    public boolean addTodo(int userId, String task, 
                           LocalDate dueDate, LocalDateTime reminderTime) {
        if (task == null || task.isEmpty()) {
            System.out.println("❌ Task cannot be empty!");
            return false;
        }
        boolean isReminderSet = reminderTime != null;
        TodoItem todo = new TodoItem(
            0, userId, task, false,
            dueDate, reminderTime, isReminderSet
        );
        boolean result = todoDAO.addTodo(todo);
        if (result) {
            System.out.println("✅ Todo added successfully!");
            if (isReminderSet) {
                System.out.println("🔔 Reminder set for: " + reminderTime);
            }
        }
        return result;
    }

    // Get all todos of a user
    public List<TodoItem> getTodosByUser(int userId) {
        List<TodoItem> todos = todoDAO.getTodosByUser(userId);
        if (todos.isEmpty()) {
            System.out.println("📭 No todos found!");
        }
        return todos;
    }

    // Mark todo as completed
    public boolean completeTodo(int todoId) {
        boolean result = todoDAO.completeTodo(todoId);
        if (result) {
            System.out.println("✅ Todo marked as completed!");
        }
        return result;
    }

    // Delete todo
    public boolean deleteTodo(int todoId) {
        boolean result = todoDAO.deleteTodo(todoId);
        if (result) {
            System.out.println("✅ Todo deleted successfully!");
        }
        return result;
    }

    // Get due reminders
    public List<TodoItem> getDueReminders(int userId) {
        List<TodoItem> todos = todoDAO.getDueReminders(userId);
        if (!todos.isEmpty()) {
            System.out.println("🔔 You have " + todos.size() + " pending reminder(s)!");
        }
        return todos;
    }

    // Set reminder for a todo
    public boolean setReminder(int todoId, LocalDateTime reminderTime) {
        if (reminderTime == null) {
            System.out.println("❌ Reminder time cannot be empty!");
            return false;
        }
        boolean result = todoDAO.setReminder(todoId, reminderTime);
        if (result) {
            System.out.println("🔔 Reminder set successfully for: " + reminderTime);
        }
        return result;
    }
}