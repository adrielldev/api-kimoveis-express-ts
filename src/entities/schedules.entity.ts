import {Entity,Column,PrimaryColumn,ManyToOne,JoinColumn} from 'typeorm';

import { v4 as uuidv4} from 'uuid'
import { Property } from './property.entity';
import { User } from './user.entity';


@Entity()

export class Schedules {

    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    date:Date

    @Column()
    hour:Date

    @ManyToOne((type)=>Property,{
        eager:true
    })@JoinColumn()
    property:string

    @ManyToOne((type)=>User,{
        eager:true
    })@JoinColumn()
    user:string





    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }


}

