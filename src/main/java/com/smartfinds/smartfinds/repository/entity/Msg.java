package com.smartfinds.smartfinds.repository.entity;
import com.smartfinds.smartfinds.controller.dto.MsgDto;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;

//import java.util.Date;
//import java.util.List;

@Entity
@Table(name = "v_msgdetail")
//@Where(clause = "msgInboxId = 2")
public class Msg {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer vid;

    private Integer msgInboxId;
    private Integer msgInboxUid;
    private Integer msgInboxUFid;

    private Integer msgProductId;
    private Integer msgFromUid;
    private Integer msgToUid;

    private String msgLine;

    private double msgPrice;
    private String msgInboxName;
    private String  msgFromName;
    private String  msgFromImg;
    private String msgToName;
    private String msgToImg;

    private String msgProductImgURL;
    private String  msgProductTitle;

   // @CreationTimestamp
    //@UpdateTimestamp
    //  @Column(name = "msgTimestamp", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @Column( nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private ZonedDateTime msgTimestamp;

    public Msg() {}

    public Msg(MsgDto msgDto) {
        this.vid = msgDto.getVid();

        this.msgInboxId = msgDto.getMsgInboxId();
        this.msgInboxUid = msgDto.getMsgInboxUid();
        this.msgInboxUFid = msgDto.getMsgInboxUFid();
        this.msgProductId = msgDto.getMsgProductId();

        this.msgFromUid = msgDto.getMsgFromUid();
        this.msgToUid = msgDto.getMsgToUid();

        this.msgLine = msgDto.getMsgLine();
        this.msgTimestamp = msgDto.getMsgTimestamp();

        this.msgInboxName = msgDto.getMsgInboxName ();
        this.msgFromName = msgDto.getMsgFromName ();
        this.msgFromImg = msgDto.getMsgFromImg ();
        this.msgToName = msgDto.getMsgToName ();
        this.msgToImg = msgDto.getMsgToImg ();

        this.msgToImg = msgDto.getMsgToImg ();

        this.msgProductImgURL = msgDto.getMsgProductImgURL ();
        this.msgProductTitle = msgDto.getMsgProductTitle ();
        this.msgPrice = msgDto.getMsgPrice ();


    }

    public Integer getVid() {
        return vid;
    }

    public void setVid(Integer vid) {
        this.vid = vid;
    }

    public Integer getMsgInboxId() {
        return msgInboxId;
    }

    public void setMsgInboxId(Integer msgInboxId) {
        this.msgInboxId = msgInboxId;
    }

    public Integer getMsgInboxUid() {
        return msgInboxUid;
    }

    public void setMsgInboxUid(Integer msgInboxUid) {
        this.msgInboxUid = msgInboxUid;
    }

    public Integer getMsgFromUid() {
        return msgFromUid;
    }

    public void setMsgFromUid(Integer msgFromUid) {
        this.msgFromUid = msgFromUid;
    }

    public Integer getMsgToUid() {
        return msgToUid;
    }

    public void setMsgToUid(Integer msgToUid) {
        this.msgToUid = msgToUid;
    }

    public Integer getMsgProductId() {
        return msgProductId;
    }

    public void setMsgProductId(Integer msgProductId) {
        this.msgProductId = msgProductId;
    }

    public String getMsgLine() {
        return msgLine;
    }

    public void setMsgLine(String msgLine) {
        this.msgLine = msgLine;
    }

    public Integer getMsgInboxUFid() {
        return msgInboxUFid;
    }

    public void setMsgInboxUFid(Integer msgInboxUFid) {
        this.msgInboxUFid = msgInboxUFid;
    }

    public String getMsgInboxName() {
        return msgInboxName;
    }

    public void setMsgInboxName(String msgInboxName) {
        this.msgInboxName = msgInboxName;
    }

    public String getMsgFromName() {
        return msgFromName;
    }

    public void setMsgFromName(String msgFromName) {
        this.msgFromName = msgFromName;
    }

    public String getMsgFromImg() {
        return msgFromImg;
    }

    public void setMsgFromImg(String msgFromImg) {
        this.msgFromImg = msgFromImg;
    }

    public String getMsgToName() {
        return msgToName;
    }

    public void setMsgToName(String msgToName) {
        this.msgToName = msgToName;
    }

    public String getMsgToImg() {
        return msgToImg;
    }

    public void setMsgToImg(String msgToImg) {
        this.msgToImg = msgToImg;
    }

    public String getMsgProductImgURL() {
        return msgProductImgURL;
    }

    public void setMsgProductImgURL(String msgProductImgURL) {
        this.msgProductImgURL = msgProductImgURL;
    }

    public String getMsgProductTitle() {
        return msgProductTitle;
    }

    public void setMsgProductTitle(String msgProductTitle) {
        this.msgProductTitle = msgProductTitle;
    }

    public double getMsgPrice() { return msgPrice;  }

     public void setMsgPrice(double msgPrice) {   this.msgPrice = msgPrice;  }

    public ZonedDateTime  getMsgTimestamp() {
        return msgTimestamp;
    }

    public void setMsgTimestamp(ZonedDateTime  msgTimestamp) {
        this.msgTimestamp = msgTimestamp;
    }


    @Override
    public String toString()
    {
//        return "Item{" + "msginboxid=" + msginboxid + ", msgInboxUid='" + msgInboxUid + '\'' + ", msgFromUid='" + msgFromUid + '\'' + ", msgProductId='"
//                + msgProductId + '\'' + ",msgLine='" + msgLine + '\'' + ",msgTimestamp='" + msgTimestamp + '\''  + ",msgPrice='" + msgPrice + '\''  + '}';

//            return "Item{" + "msginboxid=" + msginboxid + ", msgInboxUid='" + msgInboxUid + '\'' + ", msgFromUid='" + msgFromUid + '\'' + ", msgProductId='"
//                 + msgProductId + '\'' + ",msgLine='" + msgLine + '\'' + ",msgTimestamp='" + msgTimestamp + '\''    + '}';
        return("abc");
    }

}




