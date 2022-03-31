/*
  Warnings:

  - You are about to drop the column `catagory` on the `Item` table. All the data in the column will be lost.
  - Added the required column `category` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "catagory",
ADD COLUMN     "category" TEXT NOT NULL;
