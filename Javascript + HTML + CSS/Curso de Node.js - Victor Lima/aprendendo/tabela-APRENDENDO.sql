> mysql -h localhost -u root -p 

SHOW DATABASE;

USE SISTEMADECADASTRO;

DESCRIBE SISTEMADECADASTRO;

select * from postagens;


CREATE TABLE usuarios (
    nome varchar(50) NOT NULL,
    email varchar(100),
    idade int
);

INSERT INTO usuarios (nome, email,IDADE) VALUES(
    'ALANA', 'ALANA@TESTE.COM', 30);

INSERT INTO usuarios (nome, email,IDADE) VALUES(
    "RAFFAEL",
    "RAFFAEL@TESTE.COM",
    30
)
INSERT INTO usuarios (nome, email,IDADE) VALUES(
    'MARIA', 'MARIA@TESTE.COM', 50
);

INSERT INTO usuarios (nome, email,IDADE) VALUES(
    'AURORA', 'AURORA@TESTE.COM', 6
);

select * from usuarios where idade = 30;
select * from usuarios where idade >= 18;

Delete from usuarios where nome = 'maria';

UPDATE usuarios SET IDADE = 7 WHERE idade = 6;

