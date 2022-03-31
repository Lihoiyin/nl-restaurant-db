-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "couponId" INTEGER;

-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "discount" INTEGER NOT NULL,
    "gift" TEXT
);

-- CreateTable
CREATE TABLE "CouponOnUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_id_key" ON "Coupon"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CouponOnUser_id_key" ON "CouponOnUser"("id");

-- AddForeignKey
ALTER TABLE "CouponOnUser" ADD CONSTRAINT "CouponOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
