import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

@Entity()
export class Profile {

  @PrimaryColumn()
  uid: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  avatarUrl: string;

  @Column()
  coverUrl: string;

  @Column()
  bio: string;

}
