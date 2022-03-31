/*
  Warnings:

  - You are about to drop the column `name` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `desc` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "name",
ADD COLUMN     "desc" TEXT NOT NULL;
