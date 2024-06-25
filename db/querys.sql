DROP DATABASE IF EXISTS noticiasdb;

CREATE DATABASE noticiasdb;

USE noticiasdb;

DROP TABLE IF EXISTS noticias;

CREATE TABLE
    noticias (
        id INT (11) UNSIGNED NOT NULL AUTO_INCREMENT,
        categoria TINYINT (3) UNSIGNED NOT NULL DEFAULT 1,
        titulo VARCHAR (500) NOT NULL,
        cuerpo TEXT NOT NULL,
        autor VARCHAR (50) NOT NULL,
        fecha DATE NOT NULL,
        imagen VARCHAR (150) DEFAULT NULL,
        PRIMARY KEY (id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

