-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 16, 2022 at 10:05 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `retro`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `Customer_id` int(8) NOT NULL AUTO_INCREMENT COMMENT '8 digit cust id - assign on new account, go up by 1',
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`username`),
  KEY `Customer_id` (`Customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Customer_id`, `username`, `password`, `email`, `fullname`, `phone`, `address`, `birthdate`) VALUES
(17, 'BillyPlaysAlot', 'HaloFan', 'Billy@game.com', 'Billy Jackson', '789-785-7858', '7979 PO BOX, Ohio', '05/05/1990'),
(19, 'ClassExample', 'Class', 'class@game.com', 'Classy Class', '777-555-5454', '55 Someplace', '8/5/2020'),
(2, 'gamer dude', 'games', 'gamer@game.com', 'Gary Gamer', '777-555-6666', '25 MyHome Ln, St. Paul, MN 55123', '01/02/1999'),
(16, 'JackofAllTrades', '', 'jack@game.com', '', '777-888-5554', '89 Central Lane, Minneapolis, Mn', ''),
(3, 'nate', 'Games1', 'nate@game.com', 'Nate Gamer', '111-222-3333', '505 Place Ln, Dalbo, MN, 55111', '01/05/1980'),
(11, 'NatesAccount', '', 'nate@game.com', '', '555-555-4545', '2650 Crazy Ave, Bloomington, MN', ''),
(4, 'NewGamer', '', 'gamer@games.com', '', '555-444-6262', '55 Place Way, Minneapolis, MN 55421', '11/11/1999'),
(1, 'test', 'test1', 'test@place.com', 'testy mctester', '555-565-5555', '555 Place Rd, Minneapolis, MN 55421', '01/01/2000'),
(18, 'TheDudesDude', 'P@ssW0rd', 'Dude@place.com', 'Dude Guy', '789-789-5555', '555 Place Rd, Minneapolis, 55421', '01/01/2001');

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

DROP TABLE IF EXISTS `forum`;
CREATE TABLE IF NOT EXISTS `forum` (
  `forum_id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` int(8) NOT NULL,
  `message` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`forum_id`),
  KEY `game_id` (`game_id`),
  KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `forum`
--

INSERT INTO `forum` (`forum_id`, `username`, `game_id`, `message`) VALUES
(1, 'gamer dude', 1, 'Here is an updated message'),
(2, 'BillyPlaysAlot', 3, 'THIS GAME IS HARD! HELP!!!'),
(3, 'BillyPlaysAlot', 2, 'Ez way to beat level 2\r\n\r\nKeep on jumping lol'),
(4, 'test', 1, 'Help on this game'),
(5, 'test', 1, 'I keep getting stuck on the hard part, please help with tips'),
(7, 'test', 1, 'Help, this game is hard');

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
CREATE TABLE IF NOT EXISTS `game` (
  `game_id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` int(5) NOT NULL,
  `price` int(10) NOT NULL,
  `imagesource` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`game_id`, `name`, `genre`, `description`, `stock`, `price`, `imagesource`) VALUES
(1, 'Halo', 'Action, FPS, Adventure', 'When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and explore the massive scale of the Halo ring.\r\n', 10, 60, 'https://www.windowsobserver.com/wp-content/uploads/2020/07/halo_infinite_keyart_primary_square-aecb24a8f2a649e4bdec3f424373fed2.png'),
(2, 'Cuphead', 'Platformer, 2-D', 'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.\r\n\r\nPlay as Cuphead or Mugman (in single player or local co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets while you try to pay your debt ba', 15, 20, 'https://i.ytimg.com/vi/e5iGwE0XJ1s/maxresdefault.jpg'),
(3, 'Elden Ring', 'RPG', 'THE NEW FANTASY ACTION RPG.\r\nRise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between', 50, 60, 'https://assets1.ignimgs.com/2019/06/10/elden-ring-1560207629789_1280w.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
CREATE TABLE IF NOT EXISTS `rating` (
  `rating_id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` int(8) NOT NULL,
  `value` int(10) NOT NULL,
  PRIMARY KEY (`rating_id`),
  KEY `game_id` (`game_id`),
  KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`rating_id`, `username`, `game_id`, `value`) VALUES
(1, 'NewGamer', 1, 8),
(2, 'JackofAllTrades', 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
CREATE TABLE IF NOT EXISTS `reply` (
  `reply_id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `forum_id` int(8) NOT NULL,
  `reply_message` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `forum_id` (`forum_id`),
  KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reply`
--

INSERT INTO `reply` (`reply_id`, `username`, `forum_id`, `reply_message`) VALUES
(1, 'JackofAllTrades', 2, 'Have you tried it on easy?'),
(2, 'NatesAccount', 2, 'This game is hard. But it is so much fun! Try using a lot of health potions');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE IF NOT EXISTS `transaction` (
  `transaction_id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` int(8) NOT NULL,
  `quantity` int(8) NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`transaction_id`),
  KEY `game_id` (`game_id`),
  KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`transaction_id`, `username`, `game_id`, `quantity`, `status`) VALUES
(1, 'NatesAccount', 1, 1, 'Owned'),
(2, 'NatesAccount', 1, 1, 'Owned'),
(3, 'BillyPlaysAlot', 1, 1, 'Owned'),
(4, 'JackofAllTrades', 3, 1, 'Wish List');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `forum`
--
ALTER TABLE `forum`
  ADD CONSTRAINT `forum_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `forum_ibfk_3` FOREIGN KEY (`username`) REFERENCES `customer` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rating_ibfk_3` FOREIGN KEY (`username`) REFERENCES `customer` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reply`
--
ALTER TABLE `reply`
  ADD CONSTRAINT `reply_ibfk_2` FOREIGN KEY (`forum_id`) REFERENCES `forum` (`forum_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reply_ibfk_3` FOREIGN KEY (`username`) REFERENCES `customer` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`game_id`) REFERENCES `game` (`game_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_4` FOREIGN KEY (`username`) REFERENCES `customer` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
