package com.smartfinds.smartfinds.service;

import com.smartfinds.smartfinds.repository.entity.Msg;
import com.smartfinds.smartfinds.repository.MsgRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class MsgServiceMySQL implements MsgService {

    private final MsgRepository msgRepository;

    public MsgServiceMySQL(@Autowired MsgRepository msgRepository)
    {
        this.msgRepository = msgRepository;
    }

    @Override
    public List<Msg> all() {

        List<Msg> result = new ArrayList<>();
        msgRepository.findAll().forEach(result::add);
        return result;

        // return null;
    }

//    @Override
//    public Inbox save(Inbox item){
//
//        return(inboxRepository.save(item));
//
//        // return null;
//    }
//    @Override
//    public void  delete(int itemId){
//        inboxRepository.deleteById(itemId);
//    }
//    @Override
//    public Inbox findById(int itemId){
//
//        Optional<Inbox> item = inboxRepository.findById(itemId);
//        Inbox itemResponse = item.get();
//
//        return itemResponse;
//    }

    @Override
    public List<Msg> displayMsg(){

        System.out.println(" -- displayMsg --");
        List<Msg> result = new ArrayList<>();

        msgRepository.displayMsg().forEach(result::add);
        return result;
    };


    @Override
    public List<Msg> displayMsgInbox(Integer msgInboxUid){

        System.out.println(" --inbox displayInboxMsg --");
        List<Msg> result = new ArrayList<>();

        msgRepository.displayMsgInbox(msgInboxUid).forEach(result::add);
        return result;
    };

    @Override
    public List<Msg> displayMsgDetail(Integer msgInboxId){
        System.out.println(" --inbox displayMsgDetail --");
        List<Msg> result = new ArrayList<>();

        msgRepository.displayMsgDetail(msgInboxId).forEach(result::add);
        return result;
    };


    public String saveSendMsg(
            Integer msgInboxUid, Integer msgInboxUFid,  Integer msgProductId,
            Integer msgFromUid,  Integer msgToUid, String msgLine)
    {

        System.out.println(" --inbox saveSendMsg --");

        System.out.println(String.format(" call sp_save_sendmsg(%d, %d, %d, %d, %d, \'%s\')",
                  msgInboxUid,   msgInboxUFid,    msgProductId,
                  msgFromUid,    msgToUid,   msgLine
                ));

        msgRepository.saveSendMsg(  msgInboxUid, msgInboxUFid ,msgProductId,
                msgFromUid,    msgToUid,   msgLine ) ;

      return ("send OK");
    };



    public List<Msg>  displayMsginboxByID(Integer msgInboxUid, Integer msgInboxUFid,Integer msgProductId ){
        System.out.println(" -- displayMsginboxByID --");
        List<Msg> result = new ArrayList<>();

        msgRepository.displayMsginboxByID(  msgInboxUid,   msgInboxUFid,  msgProductId ).forEach(result::add);
        return result;
    };



}
