CREATE TABLE `creditcards` (
  `id` int(11) NOT NULL,
  `number` varchar(256) NOT NULL,
  `cvv` varchar(256) NOT NULL,
  `expiration` date NOT NULL,
  `company` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `creditcards`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `creditcards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

-- Temp example
INSERT INTO `creditcards` (`id`, `number`, `cvv`, `expiration`, `company`)
VALUES (NULL, '5179255337127769', '566', '2018-08-25', 'Teste company');
