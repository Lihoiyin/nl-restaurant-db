/*
  Warnings:

  - Added the required column `imageUrl` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "imageUrl" TEXT NOT NULL;
