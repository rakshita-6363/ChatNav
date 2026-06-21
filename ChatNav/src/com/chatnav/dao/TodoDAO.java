package com.chatnav.dao;

import com.chatnav.model.TodoItem;
import java.sql.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class TodoDAO {

    // Add new todo
    public boolean addTodo(TodoItem todo) {
        String query = "INSERT INTO todo_items (user_id, task, is_completed, due_date, reminder_time, is_reminder_set) VALUES (?, ?, ?, ?, ?, ?)";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, todo.getUserId());
            ps.setString(2, todo.getTask());
            ps.setBoolean(3, todo.isCompleted());
            ps.setDate(4, Date.valueOf(todo.getDueDate()));
            ps.setTimestamp(5, todo.getReminderTime() != null ? 
                Timestamp.valueOf(todo.getReminderTime()) : null);
            ps.setBoolean(6, todo.isReminderSet());
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error adding todo: " + e.getMessage());
            return false;
        }
    }

    // Get all todos of a user
    public List<TodoItem> getTodosByUser(int userId) {
        List<TodoItem> todos = new ArrayList<>();
        String query = "SELECT * FROM todo_items WHERE user_id = ? ORDER BY due_date ASC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, userId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                TodoItem todo = new TodoItem(
                    rs.getInt("todo_id"),
                    rs.getInt("user_id"),
                    rs.getString("task"),
                    rs.getBoolean("is_completed"),
                    rs.getDate("due_date").toLocalDate(),
                    rs.getTimestamp("reminder_time") != null ?
                        rs.getTimestamp("reminder_time").toLocalDateTime() : null,
                    rs.getBoolean("is_reminder_set")
                );
                todos.add(todo);
            }
            // If no todos found
            if (todos.isEmpty()) {
                System.out.println("📭 No todos found for this user!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error fetching todos: " + e.getMessage());
        }
        return todos;
    }

    // Mark todo as completed
    public boolean completeTodo(int todoId) {
        String query = "UPDATE todo_items SET is_completed = TRUE WHERE todo_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, todoId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error completing todo: " + e.getMessage());
            return false;
        }
    }

    // Delete todo
    public boolean deleteTodo(int todoId) {
        String query = "DELETE FROM todo_items WHERE todo_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, todoId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error deleting todo: " + e.getMessage());
            return false;
        }
    }

    // Get todos with reminders that are due now
    public List<TodoItem> getDueReminders(int userId) {
        List<TodoItem> todos = new ArrayList<>();
        String query = "SELECT * FROM todo_items WHERE user_id = ? " +
                      "AND is_reminder_set = TRUE " +
                      "AND is_completed = FALSE " +
                      "AND reminder_time <= NOW() " +
                      "ORDER BY reminder_time ASC";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setInt(1, userId);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                TodoItem todo = new TodoItem(
                    rs.getInt("todo_id"),
                    rs.getInt("user_id"),
                    rs.getString("task"),
                    rs.getBoolean("is_completed"),
                    rs.getDate("due_date").toLocalDate(),
                    rs.getTimestamp("reminder_time") != null ?
                        rs.getTimestamp("reminder_time").toLocalDateTime() : null,
                    rs.getBoolean("is_reminder_set")
                );
                todos.add(todo);
            }
            // If no reminders due
            if (todos.isEmpty()) {
                System.out.println("✅ No pending reminders!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error fetching reminders: " + e.getMessage());
        }
        return todos;
    }

    // Update reminder time
    public boolean setReminder(int todoId, LocalDateTime reminderTime) {
        String query = "UPDATE todo_items SET reminder_time = ?, is_reminder_set = TRUE WHERE todo_id = ?";
        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(query);
            ps.setTimestamp(1, Timestamp.valueOf(reminderTime));
            ps.setInt(2, todoId);
            int result = ps.executeUpdate();
            return result > 0;
        } catch (SQLException e) {
            System.out.println("❌ Error setting reminder: " + e.getMessage());
            return false;
        }
    }
}