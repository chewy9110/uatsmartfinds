package com.smartfinds.smartfinds.controller;

import com.smartfinds.smartfinds.controller.dto.UserDto;
import com.smartfinds.smartfinds.repository.UserRepository;
import com.smartfinds.smartfinds.repository.entity.User;
import com.smartfinds.smartfinds.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.security.Principal;
import java.util.Date;

@Controller
public class UserMapController {
    final UserService userService;

    public UserMapController(@Autowired UserService userService) {
        this.userService = userService;
    }


  //  @RequestMapping(value = "member", method = RequestMethod.GET)
    @GetMapping("/member")
    public String currentuser(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();


        model.addAttribute("currentuser",  userService.findByIdName(currentPrincipalName));
        return "member";
    }

    @ModelAttribute("currentuser")
    public User currentuser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        return  userService.findByIdName(currentPrincipalName);
    }


//    @GetMapping("/currentuser1")
//    public ModelAndView currentuser() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String currentPrincipalName = authentication.getName();
//
//
//        // create a new `ModelAndView` object
//        ModelAndView mav = new ModelAndView("index1");
//        mav.addObject("currentuser", userService.findByIdName(currentPrincipalName));
//
//      //  model.addAttribute("currentuser",  userService.findByIdName(currentPrincipalName));
//        return mav;
//    }


}
