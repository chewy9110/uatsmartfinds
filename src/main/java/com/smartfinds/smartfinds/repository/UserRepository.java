package com.smartfinds.smartfinds.repository;


import com.smartfinds.smartfinds.repository.entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;


public interface UserRepository extends CrudRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.username = :username")
    Optional<User> findByIdName(@Param("username") String username);

//    @Query("SELECT u FROM User u WHERE u.username = :username")
//    public UserDetails findUserByUsername(@Param("username") String username);
   // public UserDetails findUserByUsername(String username);
}


