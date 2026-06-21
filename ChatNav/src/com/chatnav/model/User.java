package com.chatnav.model;

public class User {
    private int userId;
    private String username;
    private String phone;
    private String profilePic;

    public User() {}

    public User(int userId, String username, String phone, String profilePic) {
        this.userId = userId;
        this.username = username;
        this.phone = phone;
        this.profilePic = profilePic;
    }

    public int getUserId() { return userId; }
    public void setUserId(int userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getProfilePic() { return profilePic; }
    public void setProfilePic(String profilePic) { this.profilePic = profilePic; }
}