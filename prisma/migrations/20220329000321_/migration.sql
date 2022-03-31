/*
  Warnings:

  - A unique constraint covering the columns `[setOnOrderId]` on the table `CouponOnUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CouponOnUser" ADD COLUMN     "setOnOrderId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "CouponOnUser_setOnOrderId_key" ON "CouponOnUser"("setOnOrderId");

-- AddForeignKey
ALTER TABLE "CouponOnUser" ADD CONSTRAINT "CouponOnUser_setOnOrderId_fkey" FOREIGN KEY ("setOnOrderId") REFERENCES "SetOnOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
