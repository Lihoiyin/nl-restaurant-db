/*
  Warnings:

  - You are about to drop the column `orderId` on the `CouponOnUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CouponOnUser" DROP CONSTRAINT "CouponOnUser_orderId_fkey";

-- DropIndex
DROP INDEX "CouponOnUser_orderId_key";

-- AlterTable
ALTER TABLE "CouponOnUser" DROP COLUMN "orderId";
