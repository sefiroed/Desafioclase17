import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

//Pasamos nuestros parametros a la Base de datos

@Entity()
export class Productos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    url: string;
}