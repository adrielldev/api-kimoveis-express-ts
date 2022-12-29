import {Entity,Column,PrimaryColumn,OneToMany} from 'typeorm';

import { v4 as uuidv4} from 'uuid'
import { Schedules } from './schedules.entity';


@Entity()

export class User {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    isAdm:boolean

    @Column()
    isActive:boolean
    
    @Column()
    createdAt:Date

    @Column()
    updatedAt:Date

    @OneToMany(type=>Schedules,sche => sche.user)
    schedules:Schedules[];
    
    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}