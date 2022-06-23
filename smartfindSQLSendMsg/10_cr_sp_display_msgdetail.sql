drop procedure sp_display_msgdetail
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_display_msgdetail`(in  in_msgInboxId int)
BEGIN  
 select * from v_msgdetail  
  where msgInboxid = in_msgInboxId
  order by msgTimestamp;
 
end$$
DELIMITER ;
 

 