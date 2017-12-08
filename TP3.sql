-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 08 Décembre 2017 à 16:33
-- Version du serveur :  10.2.9-MariaDB-10.2.9+maria~zesty
-- Version de PHP :  7.0.22-0ubuntu0.17.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `TP3`
--

-- --------------------------------------------------------

--
-- Structure de la table `saisie`
--

CREATE TABLE `saisie` (
  `id` int(10) NOT NULL,
  `libelle` varchar(255) NOT NULL,
  `valider` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `saisie`
--

INSERT INTO `saisie` (`id`, `libelle`, `valider`) VALUES
(1, 'La premiere saisie', 0),
(2, 'Ce que je dois faire', 0),
(3, 'Ce que j&#039;ai fait', 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `saisie`
--
ALTER TABLE `saisie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `saisie`
--
ALTER TABLE `saisie`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
