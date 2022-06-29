-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bookmatch
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
-- Table structure for table `emprestimo_livro`
--

DROP TABLE IF EXISTS `emprestimo_livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emprestimo_livro` (
  `id_emprestimo_livro` int NOT NULL,
  `id_usuario_livro` int DEFAULT NULL,
  `id_usuario_comodatario` int DEFAULT NULL,
  PRIMARY KEY (`id_emprestimo_livro`),
  KEY `id_usuario_livro_idx` (`id_usuario_livro`),
  KEY `id_usuario_comodatario_idx` (`id_usuario_comodatario`),
  CONSTRAINT `id_usuario_comodatario` FOREIGN KEY (`id_usuario_comodatario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `id_usuario_livro` FOREIGN KEY (`id_usuario_livro`) REFERENCES `usuario_livro` (`id_usuario_livro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emprestimo_livro`
--

LOCK TABLES `emprestimo_livro` WRITE;
/*!40000 ALTER TABLE `emprestimo_livro` DISABLE KEYS */;
/*!40000 ALTER TABLE `emprestimo_livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro`
--

DROP TABLE IF EXISTS `livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livro` (
  `id_livro` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(60) NOT NULL,
  `autor` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  `classificacao_etaria` varchar(10) NOT NULL,
  `tags` varchar(1000) DEFAULT NULL,
  `aluguel` double DEFAULT NULL,
  `sinopse` longtext NOT NULL,
  `imagem` varchar(60) NOT NULL,
  PRIMARY KEY (`id_livro`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (1,'Diário de um Banana','Jeff Kinney','Besteirol','undefined','',12,'Diary of a Wimpy Kid é uma série de livros do gênero ficção científica escrito pelo cartunista norte-americano Jeff Kinney. O primeiro livro foi publicado no dia 1 de abril de 2007 nos Estados Unidos.','https://i.imgur.com/5AaBOHr.png'),(2,'Para Todos os Garotos que Já Amei','Jenny Han','Romance','undefined','',15,'Diary of a Wimpy Kid é uma série de livros do gênero ficção científica escrito pelo cartunista norte-americano Jeff Kinney. O primeiro livro foi publicado no dia 1 de abril de 2007 nos Estados Unidos.',''),(3,'A Menina que Roubava Livros','Markus Zusak','Romance','undefined','',10,'The Book Thief é um drama do escritor australiano Markus Zusak, publicado em 2005 pela editora Picador. No Brasil e em Portugal, foi lançado pela Intrínseca e a Presença, respetivamente. O livro é sobre Liesel Meminger, uma garota que encontra a Morte três vezes durante 1939–43 na Alemanha nazista.',''),(4,'Corte de Espinhos e Rosas','Sarah J. Maas','Romance','undefined','',5,'A Court of Thorns and Roses é uma nova série de romances de alta fantasia para adultos da autora americana Sarah J. Maas, começando com o romance de mesmo nome, lançado em maio de 2015.','');
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `id_match` int NOT NULL AUTO_INCREMENT,
  `id_usuario_dono` int DEFAULT NULL,
  `id_usuario_pedinte` int DEFAULT NULL,
  PRIMARY KEY (`id_match`),
  KEY `id_usuario_has_livro_idx` (`id_usuario_dono`),
  KEY `id_usuario_pedinte_idx` (`id_usuario_pedinte`),
  CONSTRAINT `id_usuario_pedinte` FOREIGN KEY (`id_usuario_pedinte`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,1,1),(2,1,6),(3,1,6);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguidores`
--

DROP TABLE IF EXISTS `seguidores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguidores` (
  `id_seguidores` int NOT NULL AUTO_INCREMENT,
  `id_seguidor` int DEFAULT NULL,
  `id_seguindo` int DEFAULT NULL,
  PRIMARY KEY (`id_seguidores`),
  KEY `id_seguidor_idx` (`id_seguidor`),
  KEY `id_seguindo_idx` (`id_seguindo`),
  CONSTRAINT `id_seguidor` FOREIGN KEY (`id_seguidor`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `id_seguindo` FOREIGN KEY (`id_seguindo`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguidores`
--

LOCK TABLES `seguidores` WRITE;
/*!40000 ALTER TABLE `seguidores` DISABLE KEYS */;
INSERT INTO `seguidores` VALUES (1,6,1),(2,1,1),(3,1,1);
/*!40000 ALTER TABLE `seguidores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dt_nascimento` date NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Alice da Silva Costa','aliceSCosta','alicealmeyda72@gmail.com','2001-10-23','123456'),(2,'Giulia Maia','giulia.maia','giulia.maia','2005-11-11','123456'),(6,'Isabela Correia','isaCorreia','isabelaapmiranda12@gmail.com','2005-10-12','bela1234');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_livro`
--

DROP TABLE IF EXISTS `usuario_livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_livro` (
  `id_usuario_livro` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `id_livro` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario_livro`),
  KEY `id_usuario_idx` (`id_usuario`),
  KEY `id_livro_idx` (`id_livro`),
  CONSTRAINT `id_livro` FOREIGN KEY (`id_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_livro`
--

LOCK TABLES `usuario_livro` WRITE;
/*!40000 ALTER TABLE `usuario_livro` DISABLE KEYS */;
INSERT INTO `usuario_livro` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4);
/*!40000 ALTER TABLE `usuario_livro` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-29 17:00:48
