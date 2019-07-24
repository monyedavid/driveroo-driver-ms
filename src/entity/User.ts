import {
    Entity,
    Column,
    BaseEntity,
    PrimaryGeneratedColumn,
    // PrimaryColumn,
    BeforeInsert
} from "typeorm";
// import * as uuidv4 from "uuid/v4";

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    // @PrimaryColumn("uuid") id: string;

    @Column("varchar", { length: 255, nullable: true })
    email: string | null;

    @Column("text", { nullable: true })
    password: string | null;

    @Column("boolean", { default: false })
    confirmed: boolean;

    @Column("boolean", { default: false })
    forgotPasswordLock: boolean;

    @Column("text", { nullable: true })
    twitterId: string | null;
}
