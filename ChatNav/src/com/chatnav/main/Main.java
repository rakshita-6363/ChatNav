package com.chatnav.main;

import com.chatnav.model.User;
import com.chatnav.model.Message;
import com.chatnav.model.Notes;
import com.chatnav.model.TodoItem;
import com.chatnav.service.UserService;
import com.chatnav.service.MessageService;
import com.chatnav.service.NotesService;
import com.chatnav.service.TodoService;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        UserService userService = new UserService();
        MessageService messageService = new MessageService();
        NotesService notesService = new NotesService();
        TodoService todoService = new TodoService();

        System.out.println("=============================");
        System.out.println("🚀 ChatNav App Starting...");
        System.out.println("=============================");

        // ✅ TEST 1: Add Users
        System.out.println("\n--- Testing Users ---");
        User user1 = new User(0, "Rahul", "9876543210", "rahul.jpg");
        User user2 = new User(0, "Priya", "9123456789", "priya.jpg");
        userService.addUser(user1);
        userService.addUser(user2);

        // ✅ TEST 2: Get All Users
        List<User> users = userService.getAllUsers();
        System.out.println("Total Users: " + users.size());

        // ✅ TEST 3: Send Messages
        System.out.println("\n--- Testing Messages ---");
        messageService.sendMessage(1, 2, "text", "Hello Priya!");
        messageService.sendMessage(1, 2, "text", "How are you?");
        messageService.sendMessage(2, 1, "text", "Hi Rahul! I am fine!");
        messageService.sendMessage(1, 2, "image", "photo.jpg");
        messageService.sendMessage(1, 2, "audio", "voice.mp3");
        messageService.sendMessage(1, 2, "pdf", "document.pdf");

        // ✅ TEST 4: Get All Messages
        System.out.println("\n--- All Messages ---");
        List<Message> messages = messageService.getMessages(1, 2);
        System.out.println("Total Messages: " + messages.size());

        // ✅ TEST 5: Search Messages by Date
        System.out.println("\n--- Search Messages by Date ---");
        String today = LocalDate.now().toString();
        List<Message> byDate = messageService.searchByDate(1, 2, today);
        if (byDate.isEmpty()) {
            System.out.println("📭 No messages found on this date: " + today);
        } else {
            System.out.println("Messages found on " + today + ": " + byDate.size());
        }

        // ✅ TEST 6: Search Messages by Type
        System.out.println("\n--- Search Messages by Type ---");
        List<Message> images = messageService.searchByType(1, 2, "image");
        if (images.isEmpty()) {
            System.out.println("📭 No images found!");
        } else {
            System.out.println("Images found: " + images.size());
        }

        // ✅ TEST 7: Star a Message
        System.out.println("\n--- Star Message ---");
        messageService.starMessage(1);

        // ✅ TEST 8: Get Starred Messages
        System.out.println("\n--- Starred Messages ---");
        List<Message> starred = messageService.getStarredMessages(1, 2);
        System.out.println("Starred Messages: " + starred.size());

        // ✅ TEST 9: Delete a Message
        System.out.println("\n--- Delete Message ---");
        messageService.deleteMessage(2);

        // ✅ TEST 10: Add Notes
        System.out.println("\n--- Testing Notes ---");
        notesService.addNote(1, "Rahul's birthday is on 25th December!");
        notesService.addNote(1, "Project deadline is next Monday!");
        notesService.addNote(1, "Call Priya at 5pm today!");

        // ✅ TEST 11: Get All Notes
        List<Notes> notes = notesService.getNotesByUser(1);
        System.out.println("Total Notes: " + notes.size());

        // ✅ TEST 12: Search Notes
        System.out.println("\n--- Search Notes ---");
        List<Notes> searchedNotes = notesService.searchNotes(1, "birthday");
        if (searchedNotes.isEmpty()) {
            System.out.println("📭 No notes found with this keyword!");
        } else {
            System.out.println("Notes found: " + searchedNotes.size());
        }

        // ✅ TEST 13: Add Todo with Reminder
        System.out.println("\n--- Testing Todo ---");
        LocalDateTime reminderTime = LocalDateTime.now().plusMinutes(1);
        todoService.addTodo(1, "Buy groceries", LocalDate.now(), reminderTime);
        todoService.addTodo(1, "Complete ChatNav project", LocalDate.now(), null);
        todoService.addTodo(1, "Call Priya", LocalDate.now(), 
                           LocalDateTime.now().plusHours(2));

        // ✅ TEST 14: Get All Todos
        List<TodoItem> todos = todoService.getTodosByUser(1);
        System.out.println("Total Todos: " + todos.size());

        // ✅ TEST 15: Check Due Reminders
        System.out.println("\n--- Checking Reminders ---");
        List<TodoItem> reminders = todoService.getDueReminders(1);
        if (reminders.isEmpty()) {
            System.out.println("✅ No pending reminders right now!");
        } else {
            System.out.println("🔔 Pending Reminders: " + reminders.size());
        }

        // ✅ TEST 16: Complete a Todo
        System.out.println("\n--- Complete Todo ---");
        todoService.completeTodo(1);

        System.out.println("\n=============================");
        System.out.println("✅ All Tests Completed!");
        System.out.println("=============================");
    }
}