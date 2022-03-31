-- AlterTable
ALTER TABLE "CouponOnUser" ADD COLUMN     "orderId" INTEGER;

-- AddForeignKey
ALTER TABLE "CouponOnUser" ADD CONSTRAINT "CouponOnUser_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
