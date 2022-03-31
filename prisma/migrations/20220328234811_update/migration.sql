/*
  Warnings:

  - Made the column `userId` on table `CouponOnUser` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CouponOnUser" DROP CONSTRAINT "CouponOnUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "ItemOnSet" DROP CONSTRAINT "ItemOnSet_setId_fkey";

-- DropForeignKey
ALTER TABLE "Set" DROP CONSTRAINT "Set_menuId_fkey";

-- DropForeignKey
ALTER TABLE "SetOnOrder" DROP CONSTRAINT "SetOnOrder_orderId_fkey";

-- AlterTable
ALTER TABLE "CouponOnUser" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ItemOnSet" ALTER COLUMN "setId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Set" ALTER COLUMN "menuId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SetOnOrder" ALTER COLUMN "orderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CouponOnUser" ADD CONSTRAINT "CouponOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetOnOrder" ADD CONSTRAINT "SetOnOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnSet" ADD CONSTRAINT "ItemOnSet_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE SET NULL ON UPDATE CASCADE;
