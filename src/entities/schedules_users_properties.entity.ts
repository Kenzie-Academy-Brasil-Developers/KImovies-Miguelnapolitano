import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import realState from "./real_state.entity";
import user from "./users.entity";


@Entity('schedules_users_properties')
class schedulesUsersProperties {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    date: Date

    @Column()
    hour: string

    @ManyToOne(() => user, users => users.id)
    user: user

    @ManyToOne(() => realState, real_state => real_state.id)
    realEstate: realState
}

export default schedulesUsersProperties