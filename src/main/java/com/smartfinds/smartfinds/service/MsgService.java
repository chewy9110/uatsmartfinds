package com.smartfinds.smartfinds.service;

import com.smartfinds.smartfinds.repository.entity.Msg;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MsgService {

    List<Msg> all();

//    Inbox save(Inbox item);
//    void  delete(int itemId);
//    Inbox findById(int itemId);

    @Transactional
    List<Msg> displayMsg();

    @Transactional
    List<Msg> displayMsgInbox(Integer msgInboxUid);

    @Transactional
    List<Msg> displayMsgDetail(Integer msgInboxUid);

    @Transactional
    public String saveSendMsg(
            Integer msgInboxUid,  Integer msgInboxUFid, Integer msgProductId,
            Integer msgFromUid,  Integer msgToUid, String msgLine) ;

    @Transactional
    List<Msg>  displayMsginboxByID(Integer msgInboxUid, Integer msgInboxUFid,Integer msgProductId );

}
