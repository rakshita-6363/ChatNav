package com.chatnav.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    // Database credentials
    private static final String URL = "jdbc:mysql://localhost:3306/chatnav";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "root"; // put your MySQL password here

    private static Connection connection = null;

    // Get connection method
    public static Connection getConnection() {
        try {
            if (connection == null || connection.isClosed()) {
                Class.forName("com.mysql.cj.jdbc.Driver");
                connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
                System.out.println("✅ Database Connected Successfully!");
            }
        } catch (ClassNotFoundException e) {
            System.out.println("❌ Driver Not Found: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("❌ Connection Failed: " + e.getMessage());
        }
        return connection;
    }

    // Close connection method
    public static void closeConnection() {
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
                System.out.println("✅ Connection Closed!");
            }
        } catch (SQLException e) {
            System.out.println("❌ Error Closing Connection: " + e.getMessage());
        }
    }
}