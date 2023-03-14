import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import RealState from './real_state.entity'
import User from './users.entity'

@Entity('schedules_users_properties')
class Schedule {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    date: String

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealState, real_state => real_state.schedules)
    realEstate: RealState
}

export default Schedule