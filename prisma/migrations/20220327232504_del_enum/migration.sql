/*
  Warnings:

  - Changed the type of `catagory` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Set` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "catagory",
ADD COLUMN     "catagory" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Set" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Catagory";

-- DropEnum
DROP TYPE "Type";
