package com.smartfinds.smartfinds.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.authentication.builders.*;
import org.springframework.security.config.annotation.web.builders.*;
//import org.springframework.security.config.annotation.web.configuration.*;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;

@Configuration
public class WebSecurityConfig {
    @Autowired
    private DataSource dataSource;

    /*
    username=? : represents a parameter to be supplied by the client (from the browser)
    usersByUsernameQuery : sets the query to be used for finding a user by their username
    authoritiesByUsernameQuery : Sets the query to be used for finding a user's
    authorities by their username
    */

    @Autowired
    public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {

        try {
            auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                    .dataSource(dataSource)
                    .usersByUsernameQuery("select username, password, enabled from user where username=?")
                    .authoritiesByUsernameQuery("select username, role from user where username=?")
            ;

//            System.out.println("Completed");
        }
        catch (Exception e)
        {
            System.out.println("Error Occur " + e);
        }
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.csrf().disable();

        //Not using the Spring Security HttpSecurity default login page
        http.formLogin().loginPage("/login");

        //if user successfully login, user will be directed to the productform.html
        http.formLogin()
                .defaultSuccessUrl("/member");

        //if user successfully logout, user will be directed to the index.html
        http.logout()
                .logoutSuccessUrl("/index");


        /*.antMatchers(......).permitAll() - tells Spring Security that these webpages
         do not need to have login services

        .antMatchers(.....).hasRole("ADMIN") - tells Spring Security that only user
        with ADMIN role will be able to access the productform.html

        logout method : configure logout functionality provided by Spring Security -
        ensure that the login session to be invalidated.

         */
        //
        http.authorizeRequests()
                .antMatchers("/", "/index", "/aboutus").permitAll()
                .antMatchers("/member/**", "/watchlist/**", "/msgInbox/**", "/msgDetail/**").hasRole("USER")
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .and()
                .logout().permitAll();

        return http.build();
    }
}
