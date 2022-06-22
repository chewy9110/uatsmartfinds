package com.smartfinds.smartfinds.repository;

import com.smartfinds.smartfinds.repository.entity.Msg;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface MsgRepository extends CrudRepository<Msg, Integer> {

    @Transactional
    @Procedure(procedureName = "display_msg")
    List<Msg> displayMsg();


    @Transactional
    @Procedure(procedureName = "sp_display_msginbox")
    List<Msg> displayMsgInbox(@Param("in_msgInboxUid int") Integer msgInboxUid);

    @Transactional
    @Procedure(procedureName = "sp_display_msgdetail")
    List<Msg> displayMsgDetail(@Param("in_msgInboxId int") Integer msgInboxId);

    @Transactional
    @Procedure(procedureName = "sp_save_sendmsg")
    void saveSendMsg(@Param("in_msgInboxUid int") Integer msgInboxUid,
                     @Param("in_msgInboxUFid int") Integer msgInboxUFid,
                     @Param("in_msgProductId int") Integer msgProductId,
                     @Param("in_msgFromUid int") Integer msgFromUid,
                     @Param("in_msgToUid int") Integer msgToUid,
                     @Param("in_msgLine varchar(1000)") String msgLine
    );

    @Transactional
    @Procedure(procedureName = "sp_display_msginbox_byID")
    List<Msg> displayMsginboxByID(@Param("in_msgInboxUid int") Integer msgInboxUid,
                          @Param("in_msgInboxUFid int") Integer msgInboxUFid,
                          @Param("in_msgProductId int") Integer msgProductId

    );





//    @Procedure(procedureName = "display_msg")
//    boolean displayMsg(@Param("person_id_in") int personId);

//    List<Item> all();
//
//     Item save(Item item);
//     void  delete(int itemId);
//
//      Item findById(int itemId);


}
