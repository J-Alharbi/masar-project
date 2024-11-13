import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticleTable1731502524782 implements MigrationInterface {
    name = 'CreateArticleTable1731502524782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Articles" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "body" text NOT NULL, CONSTRAINT "PK_855d4c8e93574fddefaab9225c6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Articles"`);
    }

}
