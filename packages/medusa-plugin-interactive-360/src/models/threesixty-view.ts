import { BeforeInsert, Entity, ManyToOne, Column, JoinColumn } from "typeorm";
import { DbAwareColumn, BaseEntity } from "@medusajs/medusa";
import { Product } from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/utils";

@Entity({ name: "threesixty_view" })
export class ThreesixtyView extends BaseEntity {
  @Column({ type: "varchar", nullable: false })
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @DbAwareColumn({ type: "jsonb", nullable: true })
  metadata: Record<string, unknown>;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "threesixtyview");
  }
}
