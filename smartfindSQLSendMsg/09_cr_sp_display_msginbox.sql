drop PROCEDURE sp_display_msginbox
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_display_msginbox`(in in_msgInboxUid int)
BEGIN  
 select * from  v_msginbox
  where msgInboxUid = in_msgInboxUid
  order by msgTimestamp;
end$$
DELIMITER ;
 
 


