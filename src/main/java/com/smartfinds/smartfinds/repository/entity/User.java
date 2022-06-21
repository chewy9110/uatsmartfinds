package com.smartfinds.smartfinds.repository.entity;

import com.smartfinds.smartfinds.controller.dto.UserDto;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "userid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    private String username;

   // private String password;
   //  private String role;
  //  private boolean enabled;
    private String displayName;
    private String userImgUrl;

    public User() {}

    public User(UserDto userDto) {

        this.userid = userDto.getUserid();
        this.username = userDto.getUsername();
        this.displayName = userDto.getDisplayName();
        this.userImgUrl = userDto.getUserImgUrl();
       // this.role = userDto.getRole();
    }


    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getUserImgUrl() {
        return userImgUrl;
    }

    public void setUserImgUrl(String userImgUrl) {
        this.userImgUrl = userImgUrl;
    }

//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getRole() {
//        return role;
//    }
//
//    public void setRole(String role) {
//        this.role = role;
//    }
//
//    public boolean isEnabled() {
//        return enabled;
//    }
//
//    public void setEnabled(boolean enabled) {
//        this.enabled = enabled;
//    }

}


