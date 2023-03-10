import { MigrationInterface, QueryRunner } from "typeorm";

export class editClasses1678383580762 implements MigrationInterface {
    name = 'editClasses1678383580762'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_state" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
