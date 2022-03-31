/*
  Warnings:

  - You are about to drop the column `setOnOrderId` on the `CouponOnUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderId]` on the table `CouponOnUser` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CouponOnUser" DROP CONSTRAINT "CouponOnUser_setOnOrderId_fkey";

-- DropIndex
DROP INDEX "CouponOnUser_setOnOrderId_key";

-- AlterTable
ALTER TABLE "CouponOnUser" DROP COLUMN "setOnOrderId",
ADD COLUMN     "orderId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "CouponOnUser_orderId_key" ON "CouponOnUser"("orderId");

-- AddForeignKey
ALTER TABLE "CouponOnUser" ADD CONSTRAINT "CouponOnUser_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
