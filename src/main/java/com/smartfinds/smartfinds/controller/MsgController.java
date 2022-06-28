package com.smartfinds.smartfinds.controller;

import com.smartfinds.smartfinds.repository.entity.Msg;
import com.smartfinds.smartfinds.repository.entity.User;
import com.smartfinds.smartfinds.service.MsgService;

import com.smartfinds.smartfinds.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/msg")

public class MsgController {


    final MsgService msgService;
    final UserService userService;
    public MsgController(@Autowired MsgService msgService, @Autowired UserService userService)

    {
        this.msgService = msgService;
        this.userService = userService;
    ;
    }

    @CrossOrigin
    @GetMapping( "/displayInboxMsg" )
    public List<Msg> displayMsgInbox()
            throws IOException
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        boolean isAuthenticated = authentication.isAuthenticated();

       // if (isAuthenticated) {
        if (currentPrincipalName!="anonymousUser") {
            User user = userService.findByIdName(currentPrincipalName);

            // System.out.println("----------------------------");
            System.out.println(currentPrincipalName);
            // System.out.println(user.getDisplayName());
            // System.out.println(user.getUserid());
            // System.out.println(user.getUserImgUrl());
            // System.out.println(user.getUsername());
            // System.out.println("----------------------------");

            int userId = Math.toIntExact(user.getUserid());

            return msgService.displayMsgInbox(userId);
        }
         else {
                return Collections.emptyList();
            }

    }

//    @CrossOrigin
//    @GetMapping( "/displayInboxMsg/{msgInboxUid}" )
//    public List<Msg> displayMsgInbox(@PathVariable int msgInboxUid )
//            throws IOException
//    {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String currentPrincipalName = authentication.getName();
//
//        User user = userService.findByIdName(currentPrincipalName);
//
//        int userId = Math.toIntExact(user.getUserid());
//
//        // return msgService.displayMsgInbox(msgInboxUid);
//        return msgService.displayMsgInbox(userId);
//        //  return msgService.displayMsgInbox(Math.toIntExact(user.getUserid()));
//    }

//    @CrossOrigin
//    @GetMapping( "/displayMsgDetail" )
//    public List<Msg> displayMsgDetail(@RequestParam(name="InboxId", required = true) Integer msgInboxId)
//            throws IOException
//    {
//        return msgService.displayMsgDetail(msgInboxId);
//    }

    @CrossOrigin
    @GetMapping( "/displayMsgDetail/{msgInboxId}" )
    public List<Msg> displayMsgDetail(@PathVariable Integer msgInboxId )
            throws IOException
    {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean isAuthenticated = authentication.isAuthenticated();
        String currentPrincipalName = authentication.getName();

     //   if (isAuthenticated) {
        if (currentPrincipalName!="anonymousUser") {
           return msgService.displayMsgDetail(msgInboxId);
        }
        else {
            return Collections.emptyList();
        }
    }

    @CrossOrigin
    @PostMapping("/saveSendMsg")
    public String saveSendMsg(
            @RequestParam(name="InboxUid", required = true) Integer msgInboxUid,
            @RequestParam(name="InboxUFid", required = true)  Integer msgInboxUFid,
            @RequestParam(name="ProductId", required = true) Integer msgProductId,
            @RequestParam(name="FromUid", required = true) Integer msgFromUid,
            @RequestParam(name="ToUid", required = true) Integer msgToUid,
            @RequestParam(name="msgLine", required = true) String msgLine)
            throws IOException {

        return  msgService.saveSendMsg( msgInboxUid,msgInboxUFid,msgProductId,msgFromUid,msgToUid,msgLine);

    }

    @CrossOrigin
    @GetMapping( "/displayMsginboxByID/{msgInboxUid}/{msgInboxUFid}/{msgProductId}" )
    public List<Msg> displayMsginboxByID(@PathVariable Integer msgInboxUid,
                                         @PathVariable Integer msgInboxUFid,
                                         @PathVariable Integer msgProductId )
            throws IOException
    {
        return msgService.displayMsginboxByID(msgInboxUid, msgInboxUFid,msgProductId );
    }


}
