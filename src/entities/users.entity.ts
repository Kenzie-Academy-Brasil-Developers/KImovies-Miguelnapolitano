import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';

@Entity('users')
class user  {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ length: 120 })
    password: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: string | Date

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: string | Date

    @DeleteDateColumn({ type: 'timestamp' })
    updateAt: string | Date

}

export default user