import {Entity,Column,PrimaryColumn,ManyToOne,OneToOne, JoinColumn, OneToMany} from 'typeorm';

import { v4 as uuidv4} from 'uuid'

import { Category } from './category.entity';

import { Address } from './address.entity';
import { Schedules } from './schedules.entity';
// one to one com address
// many to one com category

@Entity()

export class Property {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    value:number

    @Column()
    size:number


    @Column()
    sold:boolean

    @Column()
    createdAt:Date

    @Column()
    updatedAt:Date

    @OneToOne((type)=>Address,{
        eager:true
    })@JoinColumn()
    address:Address

    @OneToMany(type=>Schedules,sche => sche.property)
    schedules:Schedules[];

    @ManyToOne((type)=>Category,cat=>cat.id)
    category_id:string




    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}