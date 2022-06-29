-- v_msgdetail -- dumped
CREATE ALGORITHM=UNDEFINED  SQL SECURITY DEFINER VIEW `v_msgdetail` AS select concat(`md`.`msgInboxId`,`md`.`msgdetailid`) AS `vid`,`md`.`msgdetailid` AS `msgdetailid`,`md`.`msgInboxId` AS `msgInboxId`,`mi`.`msgInboxUid` AS `msgInboxUid`,`mi`.`msgInboxUFid` AS `msgInboxUFid`,`mi`.`msgProductId` AS `msgProductId`,`md`.`msgFromUid` AS `msgFromUid`,`md`.`msgToUid` AS `msgToUid`,`md`.`msgLine` AS `msgLine`,`md`.`msgTimestamp` AS `msgTimestamp`,`ibn`.`displayName` AS `msgInboxName`,`ibf`.`displayName` AS `msgFromName`,`ibf`.`userImgUrl` AS `msgFromImg`,`ibt`.`displayName` AS `msgToName`,`ibt`.`userImgUrl` AS `msgToImg`,`p`.`imageUrl1` AS `msgProductImgURL`,`p`.`title` AS `msgProductTitle`,ifnull(`p`.`price`,0) AS `msgPrice` from (((((`msgdetail` `md` join `msginbox` `mi` on((`md`.`msgInboxId` = `mi`.`msginboxid`))) left join `user` `ibn` on((`mi`.`msgInboxUid` = `ibn`.`userid`))) left join `user` `ibf` on((`md`.`msgFromUid` = `ibf`.`userid`))) left join `user` `ibt` on((`md`.`msgToUid` = `ibt`.`userid`))) left join `product` `p` on((`mi`.`msgProductId` = `p`.`productid`)));

-- v_msginbox -- dumped
 CREATE ALGORITHM=UNDEFINED DEFINER=`b283c8d31c36ab`@`%` SQL SECURITY DEFINER VIEW `v_msginbox` AS select `mi`.`msginboxid` AS `vid`,`mi`.`msginboxid` AS `msginboxid`,`mi`.`msgInboxUid` AS `msgInboxUid`,`mi`.`msgInboxUFid` AS `msgInboxUFid`,`mi`.`msgProductId` AS `msgProductId`,`mi`.`msgFromUid` AS `msgFromUid`,`mi`.`msgToUid` AS `msgToUid`,`mi`.`msgLine` AS `msgLine`,`mi`.`msgTimestamp` AS `msgTimestamp`,`ibn`.`displayName` AS `msgInboxName`,`ibf`.`displayName` AS `msgFromName`,`ibf`.`userImgUrl` AS `msgFromImg`,`ibt`.`displayName` AS `msgToName`,`ibt`.`userImgUrl` AS `msgToImg`,`p`.`imageUrl1` AS `msgProductImgURL`,`p`.`title` AS `msgProductTitle`,ifnull(`p`.`price`,0) AS `msgPrice` from ((((`msginbox` `mi` left join `user` `ibn` on((`mi`.`msgInboxUid` = `ibn`.`userid`))) left join `user` `ibf` on((`mi`.`msgFromUid` = `ibf`.`userid`))) left join `user` `ibt` on((`mi`.`msgToUid` = `ibt`.`userid`))) left join `product` `p` on((`mi`.`msgProductId` = `p`.`productid`)));

-- sp_display_msgdetail -- dumped
DELIMITER $$
CREATE   PROCEDURE `sp_display_msgdetail`(in  in_msgInboxId int)
BEGIN  
 select * from v_msgdetail  
  where msgInboxid = in_msgInboxId
  order by msgTimestamp;
 
end$$
DELIMITER ;

-- sp_display_msginbox -- dumped
DELIMITER $$
CREATE   PROCEDURE `sp_display_msginbox`(in in_msgInboxUid int)
BEGIN  
 select * from  v_msginbox
  where msgInboxUid = in_msgInboxUid
  order by msgTimestamp;
end$$
DELIMITER ;

-- sp_display_msginbox_byID -- dumped
DELIMITER $$
CREATE  PROCEDURE `sp_display_msginbox_byID`(in in_msgInboxUid int, in_msgInboxUFid int, in_msgProductId int)
BEGIN  

 IF   exists(select * from msginbox 
                  where msgInboxUid = in_msgInboxUFid  and
 					   msgInboxUFid = in_msgInboxUid  and 
                       msgProductId = in_msgProductId) 
 then
     select * from  v_msginbox
       where msgInboxUid = in_msgInboxUid
          and msgInboxUFid = in_msgInboxUFid
          and msgProductId = in_msgProductId 
      order by msgTimestamp;
else 
 select 0 AS `vid`,
 0 AS `msginboxid`,
in_msgInboxUid AS `msgInboxUid`,
in_msgInboxUFid AS `msgInboxUFid`,
in_msgProductId  AS `msgProductId`,
in_msgInboxUid AS `msgFromUid`,
in_msgInboxUFid AS `msgToUid`,
'' AS `msgLine`,
current_timestamp() AS `msgTimestamp`,
 (select displayName from user where userid = in_msgInboxUid) AS `msgInboxName`,
 (select displayName from user where userid =  in_msgInboxUid) AS `msgFromName`,
 (select userImgUrl from user where userid =  in_msgInboxUid) AS `msgFromImg`,
 (select displayName from user where userid = in_msgInboxUFid) AS `msgToName`,
 (select userImgUrl from user where userid =  in_msgInboxUFid) AS  `msgToImg`,
  
  (select imageUrl1 from product where productid =  in_msgProductId) AS  `msgToImg`,
  (select title from product where productid =  in_msgProductId) AS `msgProductTitle`,
  (select price from product where productid =  in_msgProductId) AS `msgPrice` ;
 
end if ;
end$$
DELIMITER ;

-- sp_save_sendmsg -- dumped
DELIMITER $$
CREATE   PROCEDURE `sp_save_sendmsg`(
 in in_msgInboxUid int,  in in_msgInboxUFid int, in in_msgProductId int,  
 in in_msgFromUid int, in  in_msgToUid int,  
 in in_msgLine varchar(1000) )
BEGIN  
  declare ts timestamp;
  declare id int;
   
  set ts = current_timestamp();
    --  select ts;
 
  -- buyer
     -- inbox
   --      IF  exists(select * from msginbox 
--                  where msginboxid = in_msgInboxUid)  
          IF   exists( select * from msginbox 
                  where msgInboxUid = in_msgInboxUid and
 					    msgInboxUFid = in_msgInboxUFid and 
                        msgProductId = in_msgProductId )  
		 then 
          -- exist - update
           select  msgInboxId into id from msginbox 
                 where msgInboxUid = in_msgInboxUid and
 				       msgInboxUFid = in_msgInboxUFid and 
                       msgProductId = in_msgProductId;
          
			update msginbox set 
               msgFromUid = in_msgFromUid,
               msgToUid = in_msgToUid,
               msgLine = in_msgline, 
               msgTimestamp  = ts 
             where  msgInboxId = id;
             
          
         
		else
          -- not exist - create inbox
            insert into msginbox
                  (msgInboxUid,msgInboxUFid,msgProductId,msgFromUid, msgToUid, msgLine,msgTimestamp)  
            values 
                  (in_msgInboxUid,in_msgInboxUFid,in_msgProductId,in_msgFromUid, in_msgToUid, in_msgLine,ts) ;  
      
            set id =  @@identity; -- LAST_INSERT_ID(); --
         end if;
	-- msg detail
        insert into msgdetail (msgInboxId,msgFromUid,msgToUid,msgLine, msgTimestamp)
          values (id, in_msgFromUid, in_msgToUid, in_msgLine, ts);
 -- seller
   -- inbox (swap in_msgInboxUid and in_msgInboxUFid )
       IF   exists(select * from msginbox 
                  where msgInboxUid = in_msgInboxUFid  and
 					   msgInboxUFid = in_msgInboxUid  and 
                       msgProductId = in_msgProductId) 
	  then
         select  msgInboxId into id from msginbox 
               where msgInboxUid =  in_msgInboxUFid  and
 				     msgInboxUFid = in_msgInboxUid   and 
                     msgProductId = in_msgProductId;    
      
            update msginbox set 
               msgFromUid = in_msgFromUid,
               msgToUid = in_msgToUid,
               msgLine = in_msgline, 
               msgTimestamp  = ts 
            where msgInboxId = id ;
                   

        else
             insert into msginbox
                  (msgInboxUid,msgInboxUFid,msgProductId,msgFromUid, msgToUid, msgLine,msgTimestamp)  
            values 
                  (in_msgInboxUFid,in_msgInboxUid,in_msgProductId,in_msgFromUid, in_msgToUid, in_msgLine,ts) ;  
       
         set id =  @@identity; -- LAST_INSERT_ID(); --
    
       end if ;
          
   -- msg detail
      
       insert into msgdetail (msgInboxId,msgFromUid,msgToUid,msgLine, msgTimestamp)
        values (id, in_msgFromUid, in_msgToUid, in_msgLine, ts);
END$$
DELIMITER ;
