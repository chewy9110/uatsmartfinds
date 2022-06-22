 

 drop table IF EXISTS  `smartfinds`.`msginbox`;

 CREATE TABLE IF NOT EXISTS `smartfinds`.`msginbox` (
  `msginboxid` INT NOT NULL  AUTO_INCREMENT,
  `msgInboxUid` INT NOT NULL,
  `msgInboxUFid` INT NOT NULL,
  `msgProductId` INT NOT NULL,
  `msgFromUid` INT NOT NULL,
  `msgToUid` INT NOT NULL,
  
	`msgLine` VARCHAR(500) NOT NULL ,
    `msgTimestamp` timestamp default current_timestamp, -- TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`msginboxid`) 
  -- ,
  
  --  CONSTRAINT `fk_msgdetail_msgInboxUid`
--      FOREIGN KEY (`msgInboxUid`)
--       REFERENCES  `user` (`userid`)
--       ON DELETE NO ACTION
--       ON UPDATE NO ACTION,
  
  --  CONSTRAINT `fk_msgdetail_msgInboxUFid`
--      FOREIGN KEY (`msgInboxUFid`)
--       REFERENCES  `user` (`userid`)
--       ON DELETE NO ACTION
--       ON UPDATE NO ACTION,
      
 --  CONSTRAINT `fk_msginbox_msgFromUid`
--      FOREIGN KEY (`msgFromUid`) 
--       REFERENCES  `user` (`userid`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION ,
    
--   CONSTRAINT `fk_msginbox_msgToUid`
--      FOREIGN KEY (`msgToUid`) 
--       REFERENCES  `user` (`userid`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION , 
    
--   CONSTRAINT `fk_msginbox_msgProductId`
--      FOREIGN KEY (`msgProductId`) 
--       REFERENCES  `product` (`productid`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION 
 
    )
ENGINE = InnoDB;


