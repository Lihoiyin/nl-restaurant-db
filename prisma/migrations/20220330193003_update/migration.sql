/*
  Warnings:

  - Added the required column `canChange` to the `ItemOnSet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ItemOnSet" ADD COLUMN     "canChange" BOOLEAN NOT NULL;
