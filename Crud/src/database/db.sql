create database CrudLinks

create table user(
    idUser int(11) not null,
    username varchar(30)not null,
    password varchar(60)not null,
    fullname varchar(60)not null
);

alter table user add primary key(idUser);

alter table user modify idUser int(11) not null auto_increment;

create table link(
    idLink int(11) not null,
    title varchar(100) not null,
    url varchar(255) not null,
    description text,
    idUser int (11),
    created_at timestamp not null default current_timestamp,
    constraint FK_user foreign key (idUser) references user(idUser)
);

alter table link add primary key (idLink);

alter table link modify idLink int(11) not null auto_increment;


