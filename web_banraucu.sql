-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: web_banraucu
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `billdetails`
--

DROP TABLE IF EXISTS `billdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `bill_id` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_id_bill_idx` (`product_id`),
  KEY `bill_id_idx` (`bill_id`),
  CONSTRAINT `fk_bill_id` FOREIGN KEY (`bill_id`) REFERENCES `bills` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_id_bill` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billdetails`
--

LOCK TABLES `billdetails` WRITE;
/*!40000 ALTER TABLE `billdetails` DISABLE KEYS */;
INSERT INTO `billdetails` VALUES (5,4,3,249000,12,'2024-05-10 17:52:47','2024-05-10 17:52:47'),(6,1,5,215000,12,'2024-05-10 17:52:47','2024-05-10 17:52:47'),(7,6,2,14000,12,'2024-05-10 17:52:48','2024-05-10 17:52:48'),(8,5,1,6000,12,'2024-05-10 17:52:48','2024-05-10 17:52:48'),(9,2,1,22000,12,'2024-05-10 17:52:48','2024-05-10 17:52:48'),(10,2,5,35000,13,'2024-05-13 15:41:55','2024-05-13 15:41:55'),(11,5,7,56000,13,'2024-05-13 15:41:55','2024-05-13 15:41:55'),(12,4,2,26000,13,'2024-05-13 15:41:56','2024-05-13 15:41:56'),(13,6,3,69000,13,'2024-05-13 15:41:56','2024-05-13 15:41:56'),(15,5,4,24000,14,'2024-05-13 15:58:00','2024-05-13 15:58:00'),(16,6,9,63000,14,'2024-05-13 15:58:00','2024-05-13 15:58:00'),(17,1,3,129000,14,'2024-05-13 15:58:00','2024-05-13 15:58:00'),(18,3,4,12000,15,'2024-05-13 17:28:09','2024-05-13 17:28:09'),(19,1,2,86000,15,'2024-05-13 17:28:09','2024-05-13 17:28:09'),(20,6,5,35000,16,'2024-05-13 17:36:42','2024-05-13 17:36:42'),(21,1,3,129000,16,'2024-05-13 17:36:42','2024-05-13 17:36:42'),(23,3,4,12000,17,'2024-05-13 17:38:17','2024-05-13 17:38:17'),(24,5,6,36000,18,'2024-05-13 17:39:14','2024-05-13 17:39:14'),(27,2,2,44000,20,'2024-05-13 17:41:12','2024-05-13 17:41:12'),(28,5,2,12000,20,'2024-05-13 17:41:12','2024-05-13 17:41:12'),(29,5,5,30000,21,'2024-05-13 17:51:23','2024-05-13 17:51:23'),(31,6,2,14000,23,'2024-05-14 01:34:44','2024-05-14 01:34:44'),(32,2,1,22000,23,'2024-05-14 01:34:44','2024-05-14 01:34:44'),(33,1,1,43000,23,'2024-05-14 01:34:44','2024-05-14 01:34:44'),(34,3,3,9000,23,'2024-05-14 01:34:44','2024-05-14 01:34:44'),(35,4,1,83000,24,'2024-05-14 01:35:37','2024-05-14 01:35:37'),(36,5,1,6000,24,'2024-05-14 01:35:37','2024-05-14 01:35:37'),(37,3,7,21000,24,'2024-05-14 01:35:37','2024-05-14 01:35:37'),(39,3,5,15000,25,'2024-05-14 06:50:36','2024-05-14 06:50:36'),(40,5,1,6000,26,'2024-05-27 11:56:48','2024-05-27 11:56:48'),(41,6,3,21000,26,'2024-05-27 11:56:49','2024-05-27 11:56:49'),(42,29,2,98000,27,'2024-06-17 02:21:26','2024-06-17 02:21:26'),(43,26,3,141000,27,'2024-06-17 02:21:26','2024-06-17 02:21:26'),(44,22,1,20000,28,'2024-06-17 02:25:05','2024-06-17 02:25:05'),(45,23,1,20000,28,'2024-06-17 02:25:05','2024-06-17 02:25:05'),(46,25,1,34000,29,'2024-06-17 02:48:13','2024-06-17 02:48:13'),(47,1,4,172000,30,'2024-06-17 02:59:39','2024-06-17 02:59:39'),(48,25,2,68000,30,'2024-06-17 02:59:39','2024-06-17 02:59:39'),(49,22,3,60000,31,'2024-06-17 03:02:10','2024-06-17 03:02:10'),(50,4,2,166000,31,'2024-06-17 03:02:10','2024-06-17 03:02:10'),(51,25,1,34000,32,'2024-06-17 03:07:07','2024-06-17 03:07:07'),(52,27,3,204000,33,'2024-06-17 06:31:45','2024-06-17 06:31:45'),(53,1,1,43000,33,'2024-06-17 06:31:46','2024-06-17 06:31:46'),(54,1,3,129000,34,'2024-06-17 07:17:22','2024-06-17 07:17:22'),(55,27,3,204000,35,'2024-06-18 09:26:28','2024-06-18 09:26:28'),(56,1,1,43000,35,'2024-06-18 09:26:28','2024-06-18 09:26:28');
/*!40000 ALTER TABLE `billdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `method` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (12,'Thanh toán tại nhà','Đã duyệt',6,'Không có ghi chú','2024-05-10 17:52:47','2024-05-14 01:39:38'),(13,'Thanh toán tại nhà','Đã duyệt',4,'Hàng cần gấp, giao trong ngày','2024-05-13 15:41:55','2024-05-22 07:43:13'),(14,'Thanh toán tại nhà','Chưa duyệt',3,'Trả gấp đôi nếu giao hàng trong ngày.','2024-05-13 15:58:00','2024-05-14 01:39:38'),(15,'Thanh toán tại nhà','Đã duyệt',6,'Hàng dễ hỏng, giao ngay','2024-05-13 17:28:09','2024-05-14 06:58:40'),(16,'Thanh toán tại nhà','Chưa duyệt',5,'Không có ghi chú','2024-05-13 17:36:42','2024-05-14 01:39:39'),(17,'Thanh toán tại nhà','Chưa duyệt',6,'Không có ghi chú','2024-05-13 17:38:17','2024-05-14 01:39:39'),(18,'Thanh toán tại nhà','Đã duyệt',6,'Không có ghi chú','2024-05-13 17:39:14','2024-05-14 02:03:20'),(20,'Thanh toán tại nhà','Đã duyệt',7,'Không có ghi chú','2024-05-13 17:41:12','2024-05-14 01:56:07'),(21,'Thanh toán tại nhà','Chưa duyệt',7,'Không có ghi chú','2024-05-13 17:51:23','2024-05-14 01:39:39'),(23,'Thanh toán tại nhà','Chưa duyệt',7,'Không có ghi chú','2024-05-14 01:34:44','2024-05-14 01:39:39'),(24,'Thanh toán tại nhà','Đã duyệt',3,'Giao trong ngày','2024-05-14 01:35:37','2024-05-14 01:50:54'),(25,'Chuyển khoản điện tử','Đã duyệt',3,'Không có ghi chú','2024-05-14 06:50:36','2024-05-20 16:16:28'),(26,'Thanh toán tại nhà','Đã duyệt',7,'Không có ghi chú','2024-05-27 11:56:48','2024-06-06 09:37:27'),(27,'Thanh toán tại nhà','Đã duyệt',5,'Không có ghi chú','2024-06-17 02:21:26','2024-06-17 02:21:51'),(28,'Thanh toán tại nhà','Chưa duyệt',5,'Không có ghi chú','2024-06-17 02:25:05','2024-06-17 02:25:05'),(29,'Thanh toán tại nhà','Đã duyệt',5,'Không có ghi chú','2024-06-17 02:48:13','2024-06-17 02:48:32'),(30,'Thanh toán tại nhà','Chưa duyệt',5,'aaa','2024-06-17 02:59:39','2024-06-17 02:59:39'),(31,'Thanh toán tại nhà','Đã duyệt',5,'Không có ghi chú','2024-06-17 03:02:10','2024-06-17 03:02:25'),(32,'Thanh toán tại nhà','Chưa duyệt',5,'Không có ghi chú','2024-06-17 03:07:07','2024-06-17 03:07:07'),(33,'Thanh toán tại nhà','Chưa duyệt',5,'Không có ghi chú','2024-06-17 06:31:45','2024-06-17 06:31:45'),(34,'Thanh toán tại nhà','Chưa duyệt',5,'Không có ghi chú','2024-06-17 07:17:22','2024-06-17 07:17:22'),(35,'Thanh toán tại nhà','Đã duyệt',5,'Không có ghi chú','2024-06-18 09:26:28','2024-06-18 09:26:42');
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `content` longtext,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cartitems`
--

DROP TABLE IF EXISTS `cartitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cartitems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` int unsigned DEFAULT NULL,
  `price` int unsigned DEFAULT NULL,
  `total` int GENERATED ALWAYS AS ((`quantity` * `price`)) VIRTUAL,
  `cart_id` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cart_id_idx` (`cart_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartitems`
--

LOCK TABLES `cartitems` WRITE;
/*!40000 ALTER TABLE `cartitems` DISABLE KEYS */;
INSERT INTO `cartitems` (`id`, `product_id`, `quantity`, `price`, `cart_id`, `createdAt`, `updatedAt`) VALUES (52,6,4,7000,2,'2024-05-14 06:53:18','2024-05-14 06:53:18'),(53,1,2,43000,2,'2024-05-14 06:53:22','2024-05-22 09:06:18'),(54,4,1,83000,2,'2024-05-14 06:53:26','2024-05-14 06:53:26'),(55,22,2,20000,2,'2024-05-22 09:05:17','2024-05-22 09:05:17');
/*!40000 ALTER TABLE `cartitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id_cart` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (2,3,'2024-05-03 14:29:56','2024-05-03 14:29:56'),(3,4,'2024-05-03 15:05:58','2024-05-03 15:05:58'),(4,5,'2024-05-03 15:06:33','2024-05-03 15:06:33'),(5,6,'2024-05-03 18:39:15','2024-05-03 18:39:15'),(14,7,'2024-05-06 16:17:56','2024-05-06 16:17:56'),(15,10,'2024-06-17 02:57:42','2024-06-17 02:57:42');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (3,'Trái cây','2024-04-18 12:33:49','2024-04-18 12:33:49'),(4,'Hoa quả','2024-04-19 04:52:18','2024-04-19 04:52:18'),(24,'Rau sạch','2024-04-23 15:12:54','2024-04-23 15:12:54'),(30,'Nước ép','2024-04-23 15:12:54','2024-04-23 15:12:54'),(35,'Trái cây','2024-04-23 15:52:20','2024-04-23 15:52:20'),(37,'Hạt khô','2024-04-23 15:52:20','2024-04-23 15:52:20'),(51,'Bầu bí','2024-05-25 20:41:53','2024-05-25 20:41:53'),(52,'Rau củ','2024-05-26 14:19:28','2024-05-26 14:19:28');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoices`
--

DROP TABLE IF EXISTS `invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `manufacture_id` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `manufacture_id_idx` (`manufacture_id`),
  CONSTRAINT `manufacture_id_idx` FOREIGN KEY (`manufacture_id`) REFERENCES `manufactures` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoices`
--

LOCK TABLES `invoices` WRITE;
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` VALUES (1,'Đã duyệt',5,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(2,'Đã duyệt',7,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(3,'Đã duyệt',12,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(4,'Đã duyệt',8,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(5,'Chưa duyệt',6,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(6,'Đã duyệt',1,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(7,'Chưa duyệt',3,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(8,'Chưa duyệt',2,'2024-05-22 07:37:35','2024-05-22 07:37:35'),(9,'Đã duyệt',10,'2024-05-22 07:37:35','2024-05-22 07:37:35');
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufactures`
--

DROP TABLE IF EXISTS `manufactures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufactures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufactures`
--

LOCK TABLES `manufactures` WRITE;
/*!40000 ALTER TABLE `manufactures` DISABLE KEYS */;
INSERT INTO `manufactures` VALUES (1,'Supo','supometa@email.com',NULL,NULL),(2,'Moon','moonlight@email.com',NULL,NULL),(3,'Zooto','entaimen@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(4,'Phương Nam','namphuong3@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(5,'Hariken','uongdenchet@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(6,'Phantom','slience@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(7,'Vandal','onetap@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(8,'Spectre','darksoul@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(9,'Sherit','oneshotonekill@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(10,'Yến Mạch','yenmachenter@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(11,'Optimus','optimusprime@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20'),(12,'Catch Tom','catchom@email.com','2024-04-23 15:52:20','2024-04-23 15:52:20');
/*!40000 ALTER TABLE `manufactures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `method` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id_payment_idx` (`user_id`),
  CONSTRAINT `user_id_payment` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `manufacture_id` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacture_id_idx` (`manufacture_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `manufacture_id` FOREIGN KEY (`manufacture_id`) REFERENCES `manufactures` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Dưa hấu','https://t4.ftcdn.net/jpg/02/27/04/15/240_F_227041521_R30fm1zPGoX3hQeGkGgFAKykT5irrv79.jpg',2000,43000,3,5,NULL,'2024-05-26 14:19:12'),(2,'Chuối','https://t3.ftcdn.net/jpg/00/09/08/54/240_F_9085486_EE5ha1cNDfYgSc23pWXLTwjyX0pP5zV9.jpg',1500,22000,35,2,'2024-04-23 02:54:49','2024-04-27 12:05:43'),(3,'Cà rốt','https://t4.ftcdn.net/jpg/00/53/09/51/240_F_53095132_RYsAcP3cQ72jM84ibY2FGCCAe9K14CiM.jpg',1000,3000,52,8,'2024-04-23 16:11:55','2024-05-26 14:20:02'),(4,'Dưa gang','https://t4.ftcdn.net/jpg/00/31/25/35/240_F_31253502_dyIZBqMZ5v5ugvJRpd9Ecr83mt83qnhK.jpg',2000,83000,3,10,'2024-04-23 16:15:52','2024-05-26 14:18:51'),(5,'Chanh vàng','https://t4.ftcdn.net/jpg/02/55/39/77/240_F_255397744_rwNCund3WjKsrsv6yKKpK8tzmJ8sYRnF.jpg',1500,6000,4,2,'2024-04-27 11:20:00','2024-05-26 14:18:45'),(6,'Chanh','https://t4.ftcdn.net/jpg/04/18/36/35/240_F_418363511_DURDyVWF3dCoPj0pmR17AY3zCJUEdQkg.jpg',2000,7000,4,1,'2024-04-27 11:40:58','2024-05-26 14:18:40'),(22,'Quả dâu','http://localhost:8000/image-1716057183642.jpg',10000,20000,35,5,'2024-05-18 18:33:03','2024-05-18 18:33:03'),(23,'Mãng cầu','http://localhost:8000/image-1716215573899.jpg',10000,20000,35,5,'2024-05-18 18:36:43','2024-05-25 20:39:19'),(25,'Quả khế','http://localhost:8000/image-1716367164884.jpg',2000,34000,3,11,'2024-05-22 08:39:24','2024-05-25 20:38:36'),(26,'Quả đu đủ','http://localhost:8000/image-1716367365334.jpg',2000,47000,3,6,'2024-05-22 08:42:45','2024-05-26 14:18:05'),(27,'Dưa gang','http://localhost:8000/image-1716390320933.jpg',40000,68000,3,8,'2024-05-22 15:05:20','2024-05-26 14:17:58'),(29,'Bí ngô','http://localhost:8000/image-1716669751772.jpg',1000,49000,51,3,'2024-05-25 20:42:31','2024-05-25 20:42:31');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'user9@email.com','$2b$10$LoPNrMXtHfo4J9W0vRv0xea7zPPd0L.1nNP9ukQTEUjHzFjFxgslC','user','Ha Ki','https://lh3.googleusercontent.com/yQFf5YW5bRjQx3YsjjzO2kZVEB_r_VrL_qPLZDva6bqSkXiDNz2-47Em5GYFv7ipc8S6K14=s90','Nam','Nam Định','0961 213 851','2024-04-28 07:39:40','2024-04-28 07:39:40'),(2,'user10@email.com','$2b$10$Ogu9wdPqL8EeOFn3QgZyQe4Y/H1N0PZW5XohsFktNKUo1PR1QLXd6','user','Kennn','https://lh3.googleusercontent.com/yQFf5YW5bRjQx3YsjjzO2kZVEB_r_VrL_qPLZDva6bqSkXiDNz2-47Em5GYFv7ipc8S6K14=s90','Nam','Nam Định','0961 111 921','2024-04-28 07:41:02','2024-04-28 07:41:02'),(3,'user1@email.com','$2b$10$h7NT9XovDsh66ip5QeSgFeDfGzzA63NDODYNhCCMxYiHGHmNsw11W','user','Min ka','anh 3','Nữ','Huế','0927 818 893','2024-04-28 17:18:56','2024-04-28 17:18:56'),(4,'user2@email.com','$2b$10$u5BVo6cPIQpIuicsawGequBIiM/UM9zq1pTZixUY4/p4hARsPaVx.','user','Man mem','anh 22','Nam','Hà Nội','0944 111 982','2024-04-28 17:19:57','2024-05-08 16:59:55'),(5,'user4@email.com','$2b$10$2O5CL6p0Vk1Sh.s0thxsjOgZwBJUqyDwcRZuWa1a28rWV1myG8RoW','user','miin','anh 4','Nữ','Hồ Chí Minh','0969 811 945','2024-04-28 17:20:13','2024-04-28 17:20:13'),(6,'user5@email.com','$2b$10$A3fOvFa5nt4xLcno5Tba8uU1W.usSaQvroSkPu.TRAApmOwAHecm6','user','Koooo','anh user5','Nữ','Hà Nội','0961 213 851','2024-04-29 18:39:55','2024-04-29 18:39:55'),(7,'user6@email.com','$2b$10$7/xLL94abPu8xXUFaiMCZ.kDHYTLTJ9v.jamXLGxBt2b4IeTNoZXW','user','hoso','anh user5','Nữ','Hà Nội','0961 883 821','2024-05-06 16:14:23','2024-05-06 16:14:23'),(8,'user3@email.com','$2b$10$Vod6UPouTO518ABhxSXwne4tdyfHa/7qDpF/cGqAYgMmlHOrv2.la','user','Hoi','anh user5','Nam','Hưng Yên','0961 213 851','2024-06-06 07:03:30','2024-06-06 07:03:30'),(9,'user7@email.com','$2b$10$C/NEJVKv5wlUX4yhRYLgwOeqhqwq90KVpLwDLaaEmNJJTcQdKxbxC','user','Mana','anh user5','Nữ','Hưng Yên','0961 213 851','2024-06-06 07:22:21','2024-06-06 07:22:21'),(10,'user8@email.com','$2b$10$hTUmz2b0hQ1P8gnBcrdO1e6cJcZAkhjNNLdpgJIv0nLMbZ.2XU4cC','user','Mana','anh user5','Nữ','Hưng Yên','0961 213 851','2024-06-06 07:33:06','2024-06-06 07:33:06'),(11,'admin@email.com','$2b$10$pKSZbC/DTjfX8bxzX0PMmuzZH6IGoIDVRJFpwSl7Nw.6YpmsVNJS6','admin','Hoi','anh user5','Nam','Hưng Yên','0961 222 111','2024-06-06 07:34:45','2024-06-06 07:34:45'),(12,'user8@gmail.com','$2b$10$kvYE4dtIYP2AyGA8A6QuAe2CO2/FqgugGaPFBJ4YLXKodpyY26tWO','user','uuu',NULL,NULL,NULL,NULL,'2024-06-17 02:57:23','2024-06-17 02:57:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-31 10:58:00
