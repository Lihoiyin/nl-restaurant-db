/*
  Warnings:

  - A unique constraint covering the columns `[couponOnUserId]` on the table `Coupon` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `CouponOnUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "couponOnUserId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_couponOnUserId_key" ON "Coupon"("couponOnUserId");

-- CreateIndex
CREATE UNIQUE INDEX "CouponOnUser_userId_key" ON "CouponOnUser"("userId");

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_couponOnUserId_fkey" FOREIGN KEY ("couponOnUserId") REFERENCES "CouponOnUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
