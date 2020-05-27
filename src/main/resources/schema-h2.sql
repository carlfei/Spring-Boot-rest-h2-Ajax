CREATE TABLE coche
        (
        id NUMBER(10) NOT NULL,
        tipo VARCHAR2(50) NOT NULL,
        PRIMARY KEY(id)
        );
        
insert into coche (id, tipo) VALUES (1,'sedan'),(2,'sedan2'),
(3,'sedan3'),(4,'sedan4'),(5,'sedan5');