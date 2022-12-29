import {Entity,Column,PrimaryColumn,OneToMany} from 'typeorm';

import { v4 as uuidv4} from 'uuid'

import { Property } from './property.entity';



// one to many com property


@Entity()

export class Category {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name:string

    @OneToMany(type=>Property,prop=>prop.category_id,{
        eager:true
    })
    properties:Property[];

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}