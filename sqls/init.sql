CREATE TABLE `creditcards` (
  `id` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `cvv` int(4) NOT NULL,
  `expiration` date NOT NULL,
  `company` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `creditcards`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `creditcards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
