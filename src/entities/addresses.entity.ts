import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('addresses')
class addres {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45 })
    street: string

    @Column({ length: 8 })
    zipCode: string

    @Column({ type: 'varchar', length: 7, nullable: true, default: null })
    number: string | null

    @Column({ length: 20 })
    city: string

    @Column({ length: 2 })
    state: string
}

export default addres