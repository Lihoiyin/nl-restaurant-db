/*
  Warnings:

  - You are about to drop the column `gift` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `name` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "gift",
ADD COLUMN     "name" TEXT NOT NULL;
