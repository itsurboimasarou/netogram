import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;

    @Column('text',{unique: true})
    uid: string;

}
