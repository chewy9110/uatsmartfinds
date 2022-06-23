
create OR REPLACE view v_msginbox as
select msginboxid vid, mi.* ,  
       ibn.displayName msgInboxName,  
       ibf.displayName msgFromName,  ibf.userImgUrl msgFromImg ,
       ibt.displayName msgToName,  ibt.userImgUrl msgToImg ,
       p.imageUrl1 msgProductImgURL, p.title msgProductTitle, p.price msgPrice 
 from msginbox mi
   left outer join user ibn on mi.msgInboxUid =  ibn.userid  
   left outer join user ibf on mi.msgFromUid  =  ibf.userid  
   left outer join user ibt on mi.msgToUid  =  ibt.userid  
   left outer join product p on mi.msgProductId = p.productid;
 
 
 

 
 
 