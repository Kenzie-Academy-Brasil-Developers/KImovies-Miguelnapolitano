import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import addres from "./addresses.entity";
import category from "./categories.entity";


@Entity('real_state')
class realState {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'boolean' ,default: false })
    sold: boolean

    @Column({ type:'decimal', precision: 12, scale: 2 })
    value: number

    @Column({ type: 'integer' })
    size: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: string | Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: string | Date

    @OneToOne(() => addres, addresses => addresses.id)
    @JoinColumn()
    address: addres

    @ManyToOne(() => category, categories => categories.id)
    category: category[]
}

export default realState