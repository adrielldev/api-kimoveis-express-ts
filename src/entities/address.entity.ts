import {Entity,Column,PrimaryColumn,OneToOne} from 'typeorm';

import { v4 as uuidv4} from 'uuid'


@Entity()

export class Address {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    district:string

    @Column()
    zipCode:string

    @Column()
    number?:string

    @Column()
    city:string

    @Column()
    state:string

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}