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
  `aluguel` double DEFAULT NULL,
  `sinopse` longtext NOT NULL,
  `imagem` varchar(60) NOT NULL,
  `fl_status` int DEFAULT '0',
  PRIMARY KEY (`id_livro`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (1,'Corte de asas e ruínas','Sarah J. Maas','Fantasia','16',10,'Na Corte Primaveril, a Grã-Senhora da Corte Noturna esconde seu laço de parceria e sua lealdade. Tamlin está fazendo acordos com o invasor e as rainhas humanas se alinham a Hybern por imortalidade.','https://i.imgur.com/3CBVBt8.png',0),(2,'Harry Potter e o prisioneiro de Azkaban','JK Rowling','Fantasia','10',0,'Por anos Azkaban aprisionou Sirius Black, por ajudante de Voldemort. Mas ele escapou, indo para Hogwarts, atrás de Harry Potter. Neste livro o leitor entra em um mundo cheio de aventura e emoção.','https://i.imgur.com/uk9sU67.png',0),(3,'Em Chamas (Jogos Vorazes)','Suzane Colins','Ficção Científica','14',0,'Depois da inusitada vitória de Katniss e Peeta nos últimos Jogos Vorazes, algo parece ter mudado em Panem. Aqui e ali, distúrbios e agitações nos distritos dão sinais de que uma revolta é iminente.','https://i.imgur.com/pc5ozsg.png',0),(4,'Harry Potter e o Cálice de fogo','JK Rowling','Fantasia','12',13,'Em Hogwarts acontece um torneio onde os alunos demonstrarão suas habilidades. Harry é escolhido pelo Cálice de Fogo para competir.','https://i.imgur.com/NT5zGF0.png',0),(5,'Jogos Vorazes','Suzane Colins','Ficção Científica','14',0,'Quando Katniss, é voluntária dos Jogos Vorazes para poupar a irmã, ela sabe que essa pode ser sua sentença de morte. Mas a jovem usa sua habilidade de caça e sobrevivência para se manter viva.','https://i.imgur.com/AfdWNoi.png',0),(6,'De Lukov, com amor','Mariana Zapata','Romance','16',8,'Se perguntarem a Jasmine como descrever os últimos anos de sua vida não seria como bons. Depois de várias promessas e ossos quebrados, ela sabe que as portas para a patinação artística estão fechando.','https://i.imgur.com/CQJYmB4.png',0),(7,'Harry Potter e a Pedra Filosofal','JK Rowling','Fantasia','10',0,'Harry Potter é um órfão criado pelos tios, sendo maltratado. Em seu 11° aniversário, descobre sua história e seu destino: ser um aprendiz de feiticeiro até enfrentar o assassino de seus pais.','https://i.imgur.com/dAbg4x5.png',0),(8,'Percy Jackson e o Ladrão de raios','Rick Riordan','Ação','12',12,'Houve um roubo no Monte Olimpo e Percy Jackson é o principal suspeito. Para restaurar a paz, ele e seus amigos precisam achar o ladrão e esclarecer uma traição mais perigosa que a fúria dos deuses.','https://i.imgur.com/tDFgCmi.png',0),(9,'Ponte para Terabitia',' Katherine Paterson','Aventura','L',0,'Jess, treinou para ganhar a corrida da escola. Na volta às aulas, é ultrapassado por uma aluna nova. Os dois viram amigos, e criam o reino chamado Terabítia, onde governam longe da vida real.','[13:46] ALICE DA SILVA COSTA\nhttps://i.imgur.com/YxMFkxZ.png',0);
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
  `id_livro` int DEFAULT NULL,
  PRIMARY KEY (`id_match`),
  KEY `id_usuario_has_livro_idx` (`id_usuario_dono`),
  KEY `id_usuario_pedinte_idx` (`id_usuario_pedinte`),
  CONSTRAINT `id_usuario_pedinte` FOREIGN KEY (`id_usuario_pedinte`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,1,4,1),(2,2,1,3),(3,4,1,8),(4,1,2,1),(5,1,2,2),(6,3,2,5),(7,3,2,6),(8,4,2,7),(9,4,2,8),(10,1,2,1),(11,1,2,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguidores`
--

LOCK TABLES `seguidores` WRITE;
/*!40000 ALTER TABLE `seguidores` DISABLE KEYS */;
INSERT INTO `seguidores` VALUES (1,4,1),(2,1,2),(3,1,3),(4,2,1),(5,2,3),(6,2,4),(7,2,1),(8,2,1);
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
  `img_perfil` varchar(200) DEFAULT NULL,
  `img_capa` varchar(200) DEFAULT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Alice Costa','aliceScosta','alicealmeyda72@gmail.com','2001-10-23','123456','https://i.imgur.com/4dHgcxP.jpg','https://i.imgur.com/f1iSEwE.jpg','“Acreditar em nossa própria mentira é o primeiro passo para o estabelecimento de uma nova verdade.”'),(2,'Giulia Maia','giuliaMaia','giulia.maia@gmail.com','2006-11-11','123456','https://i.imgur.com/2pI3q5W.jpg','https://i.imgur.com/QqoaJ6W.jpg','“Defendo o que eu gosto e quem eu gosto até o fim, mesmo que para isso eu fique em pedaços. A vida pode te deixar em pedaços, mas o amor te deixará inteiro.”'),(3,'Isabela Correia','isaCorreia','isabelaapmiranda12@gmail.com','2006-10-12','123456','https://i.imgur.com/uZDUFh8.jpg','https://i.imgur.com/kpXPrLK.jpg','“Faço tudo que me dá na cabeça, não quero saber de limitações. Eu não pequei contra a luxúria. Quem peca é aquele que não faz o que foi criado para fazer.”'),(4,'Esther Lira','estherLira','esther.lira@gmail.com','2002-05-10','123456','https://i.imgur.com/kybZtEv.jpg','https://i.imgur.com/l6QuuJE.jpg','“A arte existe porque a vida não basta.”');
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_livro`
--

LOCK TABLES `usuario_livro` WRITE;
/*!40000 ALTER TABLE `usuario_livro` DISABLE KEYS */;
INSERT INTO `usuario_livro` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,4),(5,3,5),(6,3,6),(7,4,7),(8,4,8),(9,2,9);
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

-- Dump completed on 2022-07-06 16:33:55
