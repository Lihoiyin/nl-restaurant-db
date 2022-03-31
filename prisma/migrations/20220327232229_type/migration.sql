-- CreateEnum
CREATE TYPE "Type" AS ENUM ('set', 'single');

-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "type" "Type" NOT NULL DEFAULT E'set';
