-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 19. 12:19
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `specialistlab`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `kep_url` varchar(256) NOT NULL DEFAULT 'default.webp'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `category`
--

INSERT INTO `category` (`id`, `description`, `kep_url`) VALUES
(4, 'építőipar', 'epitoipar.jpg'),
(5, 'vendéglátás', 'vendeglatas.jpg'),
(6, 'logisztika', 'logisztika.jpg'),
(7, 'egészségügy', 'egeszsegugy.jpg'),
(14, 'asdsad', 'default.webp');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `postal_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `cities`
--

INSERT INTO `cities` (`id`, `name`, `postal_code`) VALUES
(1, 'Kecskemét', 6000),
(2, 'Pécs', 7600),
(3, 'Békéscsaba', 5600),
(4, 'Miskolc', 3500),
(5, 'Szeged', 6700),
(6, 'Székesfehérvár', 8000),
(7, 'Győr', 9000),
(8, 'Debrecen', 4000),
(9, 'Eger', 3300),
(10, 'Szolnok', 5000),
(11, 'Tatabánya', 2800),
(12, 'Salgótarján', 3100),
(13, 'Budapest', 1011),
(14, 'Kaposvár', 7400),
(15, 'Nyíregyháza', 4400),
(16, 'Szekszárd', 7100),
(17, 'Szombathely', 9700),
(18, 'Veszprém', 8200),
(19, 'Zalaegerszeg', 8900);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `worker_id` int(11) NOT NULL,
  `rating` int(5) NOT NULL,
  `description` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `city_id` int(11) NOT NULL,
  `categ_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `subcategory`
--

INSERT INTO `subcategory` (`id`, `description`, `city_id`, `categ_id`) VALUES
(1, 'ács', 1, 4),
(2, 'pincér', 8, 5),
(3, 'szállító', 4, 6),
(4, 'nővér', 7, 7),
(5, 'szakorvos', 3, 7),
(6, 'építészmérnök', 16, 4),
(7, 'költségvetési intézményvezető', 2, 6),
(8, 'pincér', 4, 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `avatar` varchar(256) NOT NULL DEFAULT 'http://res.cloudinary.com/djpsqpe4l/image/upload/v1679571813/wvvomlhgfihi4fxlyewo.png',
  `avatar_id` varchar(255) NOT NULL DEFAULT 'wvvomlhgfihi4fxlyewo',
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `name`, `avatar`, `avatar_id`, `role`) VALUES
(3, 'admin', '$2a$10$fLBJuWR6c/3X8Cjl4PehxuvFQIeCdbq4Lllj/imx9dE732Uz2919C', 'admin@gmail.com', 'admin', 'http://res.cloudinary.com/djpsqpe4l/image/upload/v1679571246/lnnem1f4gzoiuof3zh1y.jpg', 'lnnem1f4gzoiuof3zh1y', 'admin'),
(9, 'olvodisoma', '$2a$10$B.oys2OaG4c.P.eJ5zvsA.Fq2YRYp2QYn3DQWQreZei.0I9aQ7k6W', 'olvodisoma@gmail.com', 'Ölvödi Soma', 'http://res.cloudinary.com/djpsqpe4l/image/upload/v1679571813/wvvomlhgfihi4fxlyewo.png', 'wvvomlhgfihi4fxlyewo', 'user');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `workers`
--

CREATE TABLE `workers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `about_me` varchar(1024) NOT NULL,
  `contact` varchar(256) NOT NULL,
  `subcateg_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `workers`
--

INSERT INTO `workers` (`id`, `user_id`, `about_me`, `contact`, `subcateg_id`) VALUES
(2, 3, 'leírás...', 'admin@gmail.com', 0),
(3, 3, 'asdasdasd', 'admin@gmail.com', 2);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `worker_id` (`worker_id`);

--
-- A tábla indexei `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `city_id` (`city_id`),
  ADD KEY `categ_id` (`categ_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `workers`
--
ALTER TABLE `workers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `subcateg_id` (`subcateg_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT a táblához `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `workers`
--
ALTER TABLE `workers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`worker_id`) REFERENCES `workers` (`id`);

--
-- Megkötések a táblához `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  ADD CONSTRAINT `subcategory_ibfk_2` FOREIGN KEY (`categ_id`) REFERENCES `category` (`id`);

--
-- Megkötések a táblához `workers`
--
ALTER TABLE `workers`
  ADD CONSTRAINT `workers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
