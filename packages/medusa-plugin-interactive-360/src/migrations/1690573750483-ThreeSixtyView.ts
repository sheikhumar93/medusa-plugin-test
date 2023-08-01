import { MigrationInterface, QueryRunner } from "typeorm";

export class ThreeSixtyView1690573750483 implements MigrationInterface {
  name = "ThreeSixtyView1690573750483";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "threesixty_view" (
        "id" character varying NOT NULL, 
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP WITH TIME ZONE, 
        "metadata" jsonb, 
        "product_id" character varying NOT NULL, 
        CONSTRAINT "PK_c5cb94be2d8011eebe560242ac1" PRIMARY KEY ("id"))`
    );

    await queryRunner.query(
      `ALTER TABLE "threesixty_view" 
      ADD CONSTRAINT "FK_21baf9d82d8411eebe560242ac1" 
      FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "threesixty_view" DROP CONSTRAINT "FK_21baf9d82d8411eebe560242ac1"`
    );

    await queryRunner.query(`DROP TABLE "threesixty_view"`);
  }
}
