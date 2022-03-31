/*
  Warnings:

  - You are about to drop the column `basePrice` on the `Set` table. All the data in the column will be lost.
  - Added the required column `price` to the `Set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Set" DROP COLUMN "basePrice",
ADD COLUMN     "price" INTEGER NOT NULL;
