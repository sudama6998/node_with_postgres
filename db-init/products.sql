drop database if exists products;
create database products;
\c products;
create table products_info(
    id serial,
    name varchar,
    price varchar,
    description varchar
);