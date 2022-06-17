CREATE DATABASE  IF NOT EXISTS `smartfinds` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `smartfinds`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: smartfinds
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `msgdetail`
--

DROP TABLE IF EXISTS `msgdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `msgdetail` (
  `msgdetailid` int NOT NULL,
  `msgInboxId` int NOT NULL,
  `msgInboxUid` int NOT NULL,
  `msgFromUid` int NOT NULL,
  `msgToUid` int NOT NULL,
  `msgTimestamp` datetime NOT NULL,
  `msginbox_msginboxid` int NOT NULL,
  PRIMARY KEY (`msgdetailid`,`msginbox_msginboxid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msgdetail`
--

LOCK TABLES `msgdetail` WRITE;
/*!40000 ALTER TABLE `msgdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `msgdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msginbox`
--

DROP TABLE IF EXISTS `msginbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `msginbox` (
  `msginboxid` int NOT NULL,
  `msgInboxUid` int NOT NULL,
  `msgFromUid` int NOT NULL,
  `msgToUid` int NOT NULL,
  `msgLine` varchar(1000) NOT NULL,
  `msgTimestamp` datetime NOT NULL,
  `msgProductId` int NOT NULL,
  `user_userid` int NOT NULL,
  PRIMARY KEY (`msginboxid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msginbox`
--

LOCK TABLES `msginbox` WRITE;
/*!40000 ALTER TABLE `msginbox` DISABLE KEYS */;
/*!40000 ALTER TABLE `msginbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `productid` int NOT NULL AUTO_INCREMENT,
  `ownerid` int NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `imageUrl1` varchar(200) DEFAULT NULL,
  `imageUrl2` varchar(200) DEFAULT NULL,
  `imageUrl3` varchar(200) DEFAULT NULL,
  `defaultPic` int DEFAULT NULL,
  `price` double NOT NULL,
  `dateUpdated` datetime NOT NULL,
  `soldStatus` tinyint DEFAULT NULL,
  `deleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`productid`),
  KEY `FK_product_user_idx` (`ownerid`),
  CONSTRAINT `FK_product_user` FOREIGN KEY (`ownerid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,1,'Leather couch','SELL : leather couch, no cracks. Only used for 5 months. Letting go because take up too much space.','products/couch.jpg','products/placeholder.gif','products/placeholder.gif',1,600.01,'2022-05-06 16:45:00',0,0),(2,1,'Free weights','Selling free weights. 10-20kg lifting plates available, each at $15. PM me if interested. FYI : self collection','products/freeweights.jpg','products/placeholder.gif','products/placeholder.gif',1,15,'2022-05-04 16:47:00',0,0),(3,1,'Cameras','WTS : different model camera, price varies, PM me @ +65 12345678 for more info.','products/itemcamera.jpg','products/placeholder.gif','products/placeholder.gif',1,1000,'2022-05-04 16:50:00',0,0),(4,6,'20L WATER DISPENSER BOILER','Temperature 30-100 degree Celsius. Size:40(d)x60(h)cm','products/Boiler1.jpg','products/placeholder.gif','products/placeholder.gif',1,200,'2022-05-07 16:50:00',0,0),(5,6,'3 LEVEL BAINE MARIE','6 brackets with trays included. Size:120(l)x100(w)x170(h)cm','products/3-level Baine marie.jpg','products/placeholder.gif','products/placeholder.gif',1,1250,'2022-05-07 16:50:00',0,0),(6,4,'EGGTART MACHINE','Diameters of 5-8cm. Size:50(l)x30(w)x50(h)cm','products/Eggtart machine.jpg','products/placeholder.gif','products/placeholder.gif',1,199,'2022-05-07 16:50:00',0,0),(7,4,'3 LEVEL MOVABLE SHELF','Detachable shelves with wheels. Size:100(l)x50(w)x80(h)cm','products/3 level movable shelf.jpg','products/placeholder.gif','products/placeholder.gif',1,129,'2022-05-07 16:50:00',0,0),(8,6,'20L SOYMILK BLENDER','Fully automatic with boiling control. Size:50(d)x80(h)cm','products/20L Soyamilk blender.jpg','products/placeholder.gif','products/placeholder.gif',1,899,'2022-05-07 16:50:00',0,0),(9,6,'VEGETABLE CUTTER','Cut all sorts of vegetables in different sizes. Size:50(l)x50(w)x80(h)cm','products/Vegetable cutter.jpg','products/placeholder.gif','products/placeholder.gif',1,799,'2022-05-07 16:50:00',0,0),(10,3,'Hitto Bicycle for sale','Pre-loved Bicycle for sale. Value for money. See to believe. Price negotiable.','products/hito_x6_1650783065_79aeed41_progressive.jpg','products/placeholder.gif','products/placeholder.gif',1,350.3,'2022-06-01 13:01:00',0,0),(11,2,'Bento cake','Customized cake for any occassion - Birthday, Graduation, Wedding etc. Any flavor upon request.','products/bento_cake_1651007873_89ca92fc_progressive.jpg','products/placeholder.gif','products/placeholder.gif',1,25.2,'2022-06-01 21:10:00',0,0),(12,3,'Brand New PS5 DISK VER (Trade in Welcome)','PS4 PRO black with top up $900 PS4 SLIM With top up $990 PS4 Fat with top up $1120     PS4 must come with 1ctr and no Repair be4. It no trade in $1200 Special Bundle add Sony Pulse 3D Wireless Headset $1250','products/brand_new_ps5_disk_ver_1645716864_41c50642_progressive.jpg','products/placeholder.gif','products/placeholder.gif',1,900,'2022-01-05 18:43:00',0,0),(13,2,'Nike Air Force 1','Low White Sail Grey    Size:Euro 36-45     Free delivery to your House    $10 discount for second pair   Pre Order   Waiting Time: 5-7 days     DM for more details and other designs    If you don\'t know which size you can DM me for help     Follow us for Lates Style','products/nike_air_force_1_low_white_sai_1650103103_14c2d21c_progressive.jpg','products/placeholder.gif','products/placeholder.gif',1,900,'2022-02-01 23:30:00',0,0),(14,3,'Air jordan 1','BNDS. size US8.5, letting go at $300. Confirm Authentic with receipt proof.','products/airjordans.jpg','products/placeholder.gif','products/placeholder.gif',1,300,'2022-01-08 14:08:00',0,0),(15,3,'Audiophile Headphones','pair of audiophile headphone. wide soundstage, great level of detail retrieval even though it is closed back. slightly punchy mid-bass, but no sub bass. treble non-peaky','products/headphone.jpg','products/placeholder.gif','products/placeholder.gif',1,150,'2022-01-23 09:10:00',0,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `displayName` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `userImgUrl` varchar(200) NOT NULL,
  `role` varchar(45) NOT NULL,
  `enabled` tinyint NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Cheong Yuen Thye',' yuenthye@sf.com',' $2a$10$zxvEq8XzYEYtNjbkRsJEbukHeRx3XS6MDXHMu8cNuNsRfZJWwswDy','./products/placeholder.gif','ROLE_USER',1),(2,'Desmond Chia',' desmond@sf.com',' $2a$10$zxvEq8XzYEYtNjbkRsJEbukHeRx3XS6MDXHMu8cNuNsRfZJWwswDy','./products/placeholder.gif','ROLE_USER',1),(3,'Andrew Sim',' andrew@sf.com',' $2a$10$zxvEq8XzYEYtNjbkRsJEbukHeRx3XS6MDXHMu8cNuNsRfZJWwswDy','./products/placeholder.gif','ROLE_USER',1),(4,'Chew Kim Beng',' kimbeng@sf.com',' $2a$10$zxvEq8XzYEYtNjbkRsJEbukHeRx3XS6MDXHMu8cNuNsRfZJWwswDy','./products/placeholder.gif','ROLE_USER',1),(5,'Buyer1',' buy1@somewhere.com',' $2a$10$zxvEq8XzYEYtNjbkRsJEbukHeRx3XS6MDXHMu8cNuNsRfZJWwswDy','./products/placeholder.gif','ROLE_USER',1),(6,'Seller1',' sell1@somewhere.com',' $2a$10$zxvEq8XzYEYtNjbkRsJEbukHeRx3XS6MDXHMu8cNuNsRfZJWwswDy','./products/placeholder.gif','ROLE_USER',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `watchlist`
--

DROP TABLE IF EXISTS `watchlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `watchlist` (
  `watchlistid` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `productid` int NOT NULL,
  `dateUpdated` datetime NOT NULL,
  `deleteStatus` tinyint DEFAULT NULL,
  PRIMARY KEY (`watchlistid`),
  KEY `fk_watchlist_user_idx` (`userid`),
  KEY `fk_watchlist_product_idx` (`productid`),
  CONSTRAINT `fk_watchlist_product` FOREIGN KEY (`productid`) REFERENCES `product` (`productid`),
  CONSTRAINT `fk_watchlist_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `watchlist`
--

LOCK TABLES `watchlist` WRITE;
/*!40000 ALTER TABLE `watchlist` DISABLE KEYS */;
INSERT INTO `watchlist` VALUES (1,2,4,'2022-05-01 08:00:00',0),(2,2,5,'2022-05-01 08:05:00',0),(3,2,6,'2022-05-01 08:11:00',0),(4,2,7,'2022-05-01 08:14:00',0),(5,2,8,'2022-05-01 08:18:00',0),(6,2,9,'2022-05-01 08:25:00',0);
/*!40000 ALTER TABLE `watchlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-15 17:16:33
