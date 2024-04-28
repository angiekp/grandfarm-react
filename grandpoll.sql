-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-07-2023 a las 18:19:51
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grandpoll`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `control_salida`
--

DROP TABLE IF EXISTS `control_salida`;
CREATE TABLE IF NOT EXISTS `control_salida` (
  `id_control_salida` int(11) NOT NULL AUTO_INCREMENT,
  `cod_empleado` int(11) NOT NULL,
  `cod_salida` int(11) NOT NULL,
  `fecha_creacion` int(11) NOT NULL,
  PRIMARY KEY (`id_control_salida`),
  KEY `FK_id_control_cod_empleado` (`cod_empleado`),
  KEY `FK_id_control_cod_salida` (`cod_salida`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

DROP TABLE IF EXISTS `empleado`;
CREATE TABLE IF NOT EXISTS `empleado` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_empleado` varchar(255) NOT NULL,
  `apellido_empleado` varchar(255) NOT NULL,
  `documento_empleado` int(11) NOT NULL,
  `telefono_empleado` int(11) NOT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galpon`
--

DROP TABLE IF EXISTS `galpon`;
CREATE TABLE IF NOT EXISTS `galpon` (
  `id_galpon` int(11) NOT NULL AUTO_INCREMENT,
  `cod_mantenimiento` int(11) NOT NULL,
  `temperatura_galpon` int(11) NOT NULL,
  `cantidad_pollos` int(11) NOT NULL,
  `aseo` tinyint(1) NOT NULL,
  `control_plagas` tinyint(1) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_galpon`),
  KEY `FK_galpon_mantenimiento` (`cod_mantenimiento`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

DROP TABLE IF EXISTS `inventario`;
CREATE TABLE IF NOT EXISTS `inventario` (
  `id_inventario` int(11) NOT NULL AUTO_INCREMENT,
  `modificado_por` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `lote` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `numero_galpones` int(11) NOT NULL,
  PRIMARY KEY (`id_inventario`),
  KEY `FK_inventario_empleado` (`modificado_por`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mantenimiento`
--

DROP TABLE IF EXISTS `mantenimiento`;
CREATE TABLE IF NOT EXISTS `mantenimiento` (
  `id_mantenimiento` int(11) NOT NULL AUTO_INCREMENT,
  `modificado_por` int(11) NOT NULL,
  `estado_mantenimiento` int(11) NOT NULL,
  `fecha_mantenimiento` date NOT NULL,
  `hora_mantenimiento` datetime NOT NULL,
  `numero_galpones` int(11) NOT NULL,
  `control_plagas` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_mantenimiento`),
  KEY `FK_mantenimiento_empleado` (`modificado_por`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

DROP TABLE IF EXISTS `registro`;
CREATE TABLE IF NOT EXISTS `registro` (
  `id_registro` int(11) NOT NULL AUTO_INCREMENT,
  `cod_inventario` int(11) NOT NULL,
  `descripcion_entrada` varchar(255) NOT NULL,
  `lote` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `numero_galpones` int(11) NOT NULL,
  `valor_suministros` int(11) NOT NULL,
  PRIMARY KEY (`id_registro`),
  KEY `FK_registro_inventario` (`cod_inventario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salida`
--

DROP TABLE IF EXISTS `salida`;
CREATE TABLE IF NOT EXISTS `salida` (
  `id_salida` int(11) NOT NULL AUTO_INCREMENT,
  `cod_galpon` int(11) NOT NULL,
  `descripcion_peso` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `valor_libra` int(11) NOT NULL,
  `peso_total` int(11) NOT NULL,
  `valor_total` int(11) NOT NULL,
  PRIMARY KEY (`id_salida`),
  KEY `FK_salida_galpon` (`cod_galpon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `control_salida`
--
ALTER TABLE `control_salida`
  ADD CONSTRAINT `FK_id_control_cod_empleado` FOREIGN KEY (`cod_empleado`) REFERENCES `empleado` (`id_empleado`),
  ADD CONSTRAINT `FK_id_control_cod_salida` FOREIGN KEY (`cod_salida`) REFERENCES `salida` (`id_salida`);

--
-- Filtros para la tabla `galpon`
--
ALTER TABLE `galpon`
  ADD CONSTRAINT `FK_galpon_mantenimiento` FOREIGN KEY (`cod_mantenimiento`) REFERENCES `mantenimiento` (`id_mantenimiento`);

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `FK_inventario_empleado` FOREIGN KEY (`modificado_por`) REFERENCES `empleado` (`id_empleado`);

--
-- Filtros para la tabla `mantenimiento`
--
ALTER TABLE `mantenimiento`
  ADD CONSTRAINT `FK_mantenimiento_empleado` FOREIGN KEY (`modificado_por`) REFERENCES `empleado` (`id_empleado`);

--
-- Filtros para la tabla `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `FK_registro_inventario` FOREIGN KEY (`cod_inventario`) REFERENCES `inventario` (`id_inventario`);

--
-- Filtros para la tabla `salida`
--
ALTER TABLE `salida`
  ADD CONSTRAINT `FK_salida_galpon` FOREIGN KEY (`cod_galpon`) REFERENCES `galpon` (`id_galpon`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
