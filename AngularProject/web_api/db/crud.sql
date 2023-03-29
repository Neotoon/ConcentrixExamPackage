-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2023 at 07:01 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `p_id` int(11) NOT NULL,
  `p_name` text NOT NULL,
  `p_address` text NOT NULL,
  `p_email` text NOT NULL,
  `p_contact` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`p_id`, `p_name`, `p_address`, `p_email`, `p_contact`) VALUES
(1, 'John Doe', 'Ap #388-7382 Sem St', 'vitae@protonmail.ca', '(878) 510-3422'),
(3, 'Josephine Patel', 'P.O. Box 894, 6602 Sed Street', 'enim@outlook.ca', '1-880-858-4257'),
(4, 'Ila Ward', 'P.O. Box 580, 711 Nec, Street', 'aliquet@protonmail.edu', '(221) 108-7786'),
(5, 'Dana Randal', 'Ap #415-4942 Leo. Av.', 'justo.eu@protonmail.couk', '1-979-214-1129'),
(6, 'Lars Sargenta', 'P.O. Box 675, 8766 Dis Rd.', 'urna.ut.tincidunt@google.couk', '1-725-415-4822');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
