package com.chatnav.service;

import com.chatnav.dao.UserDAO;
import com.chatnav.model.User;
import java.util.List;

public class UserService {

    private UserDAO userDAO = new UserDAO();

    // Add new user
    public boolean addUser(User user) {
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            System.out.println("❌ Username cannot be empty!");
            return false;
        }
        if (user.getPhone() == null || user.getPhone().isEmpty()) {
            System.out.println("❌ Phone cannot be empty!");
            return false;
        }
        boolean result = userDAO.addUser(user);
        if (result) {
            System.out.println("✅ User added successfully!");
        }
        return result;
    }

    // Get user by ID
    public User getUserById(int userId) {
        User user = userDAO.getUserById(userId);
        if (user == null) {
            System.out.println("❌ User not found!");
        }
        return user;
    }

    // Get all users
    public List<User> getAllUsers() {
        List<User> users = userDAO.getAllUsers();
        if (users.isEmpty()) {
            System.out.println("📭 No users found!");
        }
        return users;
    }

    // Search user by name
    public List<User> searchUserByName(String name) {
        if (name == null || name.isEmpty()) {
            System.out.println("❌ Search name cannot be empty!");
            return null;
        }
        List<User> users = userDAO.searchUserByName(name);
        if (users.isEmpty()) {
            System.out.println("📭 No users found with name: " + name);
        }
        return users;
    }
}