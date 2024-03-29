import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import RealEstate from "./real_state.entity";

@Entity('categories') 
class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 45, unique: true })
    name: string

    @OneToMany(() => RealEstate, realEstate => realEstate.category)
    realEstate: RealEstate[]
}

export default Category