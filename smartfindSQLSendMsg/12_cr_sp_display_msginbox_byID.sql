drop PROCEDURE sp_display_msginbox_byID
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_display_msginbox_byID`(in in_msgInboxUid int, in_msgInboxUFid int, in_msgProductId int)
BEGIN  
 select * from  v_msginbox
  where msgInboxUid = in_msgInboxUid
  and msgInboxUFid = in_msgInboxUFid
  and msgProductId = in_msgProductId 
  order by msgTimestamp;
end$$
DELIMITER ;


 
 


