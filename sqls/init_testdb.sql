CREATE DATABASE IF NOT EXISTS upnid_db_test;
GRANT ALL ON upnid_db_test.* TO 'user'@'%';

USE upnid_db_test;

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
VALUES ('7f8b9936-4a28-11e8-842f-0ed5f89f718b', '5179255337127769', '566', '2018-08-25', 'Teste company');
