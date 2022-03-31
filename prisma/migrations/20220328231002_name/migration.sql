/*
  Warnings:

  - You are about to drop the column `price` on the `Set` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `Set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Set" DROP COLUMN "price",
ADD COLUMN     "basePrice" INTEGER NOT NULL;
