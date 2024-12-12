# Book App

crea un app di `libri` in cui si possono lasciare `recensioni` pubbliche

# Database structure

- table: books
- table: recensioni

# books table

id
title
author
abstract
pages
year

```sql
CREATE TABLE `books_web_app`.`books` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NOT NULL,
  `author` VARCHAR(150) NOT NULL,
  `abstract` TEXT(500) NOT NULL,
  `pages` SMALLINT NULL,
  `year` YEAR NULL,
  PRIMARY KEY (`id`));

```

# recensioni table

id
book_id
username
date
recensione
voto

```sql
CREATE TABLE `books_web_app`.`recensioni` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `book_id` INT UNSIGNED NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `date` DATE NOT NULL,
  `recensione` TEXT(500) NOT NULL,
  `vote` TINYINT(5) NOT NULL,
  PRIMARY KEY (`id`));
```

# creazione db

# FOREING KEY 👇

```sql
ALTER TABLE `books_web_app`.`recensioni`
ADD INDEX `recensioni-book_idx` (`book_id` ASC) VISIBLE;
;
ALTER TABLE `books_web_app`.`recensioni`
ADD CONSTRAINT `recensioni-book`
  FOREIGN KEY (`book_id`)
  REFERENCES `books_web_app`.`books` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
```

<!-- # db book

INSERT INTO `132_books_web_app`.`books` (`id`, `title`, `author`, `abstract`, `pages`, `year`) VALUES
(1, 'Il Signore degli Anelli', 'J.R.R. Tolkien', 'Un viaggiatore di nome Frodo deve portare un anello magico a Mordor per distruggerlo.', 1000, 1954),
(2, '1984', 'George Orwell', 'In un futuro distopico, il governo controlla ogni aspetto della vita delle persone.', 300, 1949),
(3, 'Il Cuore delle Tenebre', 'Stephen King', 'Un gruppo di amici si imbatte in un mostro nel cuore del Maine.', 500, 1983); -->

<!-- # db recensioni

INSERT INTO `132_books_web_app`.`recensioni` (`id`, `book_id`, `username`, `date`, `recensione`, `vote`) VALUES
(1, 1, 'Federico', '2022-01-01', 'Un libro fantastico che mi ha fatto pensare.', 5),
(2, 2, 'Giovanni', '2022-02-01', 'Un libro distopico che mi ha dato fastidio.', 3),
(3, 3, 'Luca', '2022-03-01', 'Un libro orrore che mi ha fatto paura.', 4); -->
#   b a c k e n d - b o o k - a p p  
 