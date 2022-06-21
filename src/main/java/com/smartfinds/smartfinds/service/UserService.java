package com.smartfinds.smartfinds.service;

import com.smartfinds.smartfinds.repository.entity.User;

import java.util.List;


public interface UserService {

    List<User> all();

    User findById(Long userid);

    User findByIdName( String username );

}
