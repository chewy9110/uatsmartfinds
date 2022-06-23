 
 create OR REPLACE view v_msgdetail as
  select  concat(md.msgInboxId,md.msgdetailid) vid,
          md.msgdetailid , 
          md.msgInboxId , 
          mi.msgInboxUid, 
          mi.msgInboxUFid,
          mi.msgProductId,
          md.msgFromUid , md.msgToUid,
          md.msgLine, md.msgTimestamp,
       ibn.displayName msgInboxName,  
	  
       ibf.displayName msgFromName,  ibf.userImgUrl msgFromImg ,
       ibt.displayName msgToName,  ibt.userImgUrl msgToImg ,
       p.imageUrl1 msgProductImgURL, p.title msgProductTitle, p.price msgPrice 
 from msgdetail md 
   inner join msginbox mi on md.msgInboxId = mi.msgInboxId
   left outer join user ibn on mi.msgInboxUid  =  ibn.userid  
   left outer join user ibf on md.msgFromUid  =  ibf.userid  
   left outer join user ibt on md.msgToUid  =  ibt.userid  
   left outer join product p on mi.msgProductId = p.productid;
   
   
   

  
  