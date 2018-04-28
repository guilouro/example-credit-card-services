CREATE TABLE `creditcards` (
  `id` char(36) NOT NULL,
  `number` varchar(256) NOT NULL,
  `cvv` varchar(256) NOT NULL,
  `expiration` date NOT NULL,
  `company` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `creditcards`
  ADD PRIMARY KEY (`id`);

-- Temp example
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('aedf1924-6c73-412d-8386-ae5c432af2a9', '5179255337127769', '020', '2018-08-25', 'ERIK RUECKER');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('16831d1d-5d41-43b6-b42f-11b42dc79f08', '5179255337127769', '131', '2018-08-25', 'ELBERT JACOBS');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('7de509f3-46c9-477e-bbf9-ea1fd0a69565', '5179255337127769', '242', '2018-08-25', 'ABRAHAM FRITSCH');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('92f55a2b-128a-4e9b-aee4-bcdb9f422b5d', '5179255337127769', '353', '2018-08-25', 'MS. DESTINEE TILLMAN');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('d581a64c-2d23-45ae-952d-d9b25026d3ab', '5179255337127769', '464', '2018-08-25', 'LIANA SAUER');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('628c56a0-d37d-4c9e-ad4d-355d772ebefb', '5179255337127769', '575', '2018-08-25', 'LIZETH SCHILLER');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('9fc0245d-5ce1-4de3-b421-9611acedcebd', '5179255337127769', '686', '2018-08-25', 'EDNA MURAZIK');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('332a7d43-eead-4ee5-baf7-a84fd142b1d3', '5179255337127769', '797', '2018-08-25', 'AIMEE LEGROS');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('a8ee8b55-f213-4b09-aae3-f2aaf02dccbf', '5179255337127769', '810', '2018-08-25', 'DARIAN BRUEN');
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES ('d28c9d3b-9438-4b09-b6fd-46e63e51365b', '5179255337127769', '911', '2018-08-25', 'MR. DONNA AUFDERHAR');
