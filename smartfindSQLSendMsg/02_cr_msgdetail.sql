-- -----------------------------------------------------
-- Table `smartfinds`.`msgdetail`
-- -----------------------------------------------------
drop table IF EXISTS  `smartfinds`.`msgdetail`;
CREATE TABLE IF NOT EXISTS `smartfinds`.`msgdetail` (
   `msgdetailid` INT NOT NULL  AUTO_INCREMENT,
   `msgInboxId` INT NOT NULL,
 -- `msgInboxUid` INT NOT NULL,
  `msgFromUid` INT NOT NULL,
  `msgToUid` INT NOT NULL,
 -- `msgProductId` INT NOT NULL,
 
  `msgLine` VARCHAR(500) NOT NULL,
  `msgTimestamp` timestamp default current_timestamp, -- TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
   PRIMARY KEY (`msgdetailid`)    
--     ,
--    
--     CONSTRAINT `fk_msgdetail_msgInboxId`
--      FOREIGN KEY (`msgInboxId`)
--       REFERENCES  `msginbox` (`msginboxid`)
--       ON DELETE NO ACTION
--       ON UPDATE NO ACTION,
--       
--      CONSTRAINT `fk_msgdetail_msgToUid`
--      FOREIGN KEY (`msgToUid`)
--       REFERENCES  `user` (`userid`)
--       ON DELETE NO ACTION
--       ON UPDATE NO ACTION,
--     
--      CONSTRAINT `fk_msgdetail_msgFromUid`
--      FOREIGN KEY (`msgFromUid`)
--       REFERENCES  `user` (`userid`)
--       ON DELETE NO ACTION
--       ON UPDATE NO ACTION
    )
ENGINE = InnoDB;