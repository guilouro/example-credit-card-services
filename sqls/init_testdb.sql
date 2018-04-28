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
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`) VALUES
('d79f0540-4a8c-11e8-a498-738ef08dd9f6', 'U2FsdGVkX19W64/KX2v7KAWpFDdY8cT/yKuJOz7OOGOsBSfvMzCahhf+n+Mbkm6x', 'U2FsdGVkX18tyujJpEsFDf5i0UbatOulSR6O69ybKHg=', '2083-11-29', 'U2FsdGVkX1+kX2q8v9+dgOSDssfYlSeXkVYWflfE4z8=');

