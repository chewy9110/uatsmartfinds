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
import java.util.List;

@RestController
@RequestMapping("/msg")

public class MsgController {


    final MsgService msgService;

    public MsgController(@Autowired MsgService msgService)
    {
        this.msgService = msgService;
    }




//    @CrossOrigin
//    @PostMapping("/add")
//    public void save(   @RequestParam(name="InboxId", required = true) Integer msgInboxId,
//                        @RequestParam(name="InboxUid", required = true) Integer msgInboxUid,
//                        @RequestParam(name="FromUid", required = true)  Integer msgFromUid,
//                        @RequestParam(name="ToUid", required = true) Integer msgToUid,
//                        @RequestParam(name="ProductId", required = true) Integer msgProductId,
//                        @RequestParam(name="msgLine", required = true) String msgLine) throws IOException {
//
////        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
////        FileUploadUtil.saveFile(imageFolder, fileName, multipartFile);
////
////        String fullPath = imageFolder + '/' + imageUrl;
//
//
//        InboxDto itemDto = new InboxDto(msgInboxId, msgInboxUid, msgFromUid, msgToUid, msgProductId, msgLine);
//        inboxService.save(new Inbox(itemDto));
//
//
//    }

//    @CrossOrigin
//    @GetMapping( "/displaymsg" )
//    public List<Item> displaymsg()
//    {
//        return itemService.displayMsg();
//    }

//    @CrossOrigin
//    @PostMapping( "/displaymsg" )
//    public List<Item> displaymsg()
//    {
//        return itemService.displayMsg();
//    }

//    @CrossOrigin
//    @GetMapping( "/displayInboxMsg" )
//    public List<Msg> displayMsgInbox(@RequestParam(name="InboxUid", required = true) Integer msgInboxUid)
//            throws IOException
//    {
//        return msgService.displayMsgInbox(msgInboxUid);
//    }


    @CrossOrigin
    @GetMapping( "/displayInboxMsg/{msgInboxUid}" )
    public List<Msg> displayMsgInbox(@PathVariable Integer msgInboxUid )
            throws IOException
    {
        return msgService.displayMsgInbox(msgInboxUid);
    }

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
        return msgService.displayMsgDetail(msgInboxId);
    }



//    @CrossOrigin
//    @GetMapping("/saveSendMsg")
//    public void saveSendMsg(
//            @RequestParam(name="InboxUid", required = true) Integer msgInboxUid,
//            @RequestParam(name="InboxUFid", required = true)  Integer msgInboxUFid,
//            @RequestParam(name="ProductId", required = true) Integer msgProductId,
//            @RequestParam(name="FromUid", required = true) Integer msgFromUid,
//            @RequestParam(name="ToUid", required = true) Integer msgToUid,
//            @RequestParam(name="msgLine", required = true) String msgLine)
//            throws IOException {

     //   return  msgService.saveSendMsg( msgInboxUid,msgInboxUFid,msgProductId,msgFromUid,msgToUid,msgLine);

 //   }



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
