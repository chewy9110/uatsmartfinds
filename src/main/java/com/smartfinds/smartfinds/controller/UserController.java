package com.smartfinds.smartfinds.controller;

        import com.smartfinds.smartfinds.controller.dto.UserDto;
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

        import java.io.IOException;
        import java.security.Principal;
        import java.util.Date;

@RestController
@RequestMapping("/user")
public class UserController {

    final UserService userService;

    public UserController(@Autowired UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<User> getUser()
    {
        return userService.all();
    }


//    @CrossOrigin
//    @GetMapping("/{userid}")
//    public User findById(@PathVariable Long userid) {
//        return userService.findById( userid );
//    }

    @CrossOrigin
    @GetMapping("/{username}")

    public User findByIdName(@PathVariable String username) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        return userService.findByIdName(currentPrincipalName);
    }

    @CrossOrigin
    @GetMapping("/currentuser")

    public User findByIdName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();

        return userService.findByIdName(currentPrincipalName);
    }


//    @Controller
//    public class SecurityController {
//
//        @RequestMapping(value = "/username", method = RequestMethod.GET)
//        @ResponseBody
//        public String currentUserName(Principal principal) {
//            return principal.getName();
//        }
//    }


}

