drop procedure sp_save_sendmsg;
 
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_save_sendmsg`(
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
END;$$
DELIMITER ;            
        

