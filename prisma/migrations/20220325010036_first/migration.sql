-- CreateEnum
CREATE TYPE "Status" AS ENUM ('initialized', 'paid', 'processing', 'completed');

-- CreateEnum
CREATE TYPE "Catagory" AS ENUM ('food', 'drink', 'soup');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "coordinateX" INTEGER NOT NULL,
    "coordinateY" INTEGER NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'initialized',
    "totalPrice" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SetOnOrder" (
    "id" SERIAL NOT NULL,
    "setQuantity" INTEGER NOT NULL,
    "setSubtotal" INTEGER NOT NULL,
    "itemDetails" TEXT NOT NULL,
    "setId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Set" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "menuId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ItemOnSet" (
    "id" SERIAL NOT NULL,
    "itemQuantity" INTEGER NOT NULL,
    "setId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "catagory" "Catagory" NOT NULL DEFAULT E'food',
    "name" TEXT NOT NULL,
    "basePrice" INTEGER NOT NULL,
    "upgradeCost" INTEGER NOT NULL DEFAULT 0,
    "imageUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_id_key" ON "Menu"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SetOnOrder_id_key" ON "SetOnOrder"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Set_id_key" ON "Set"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemOnSet_id_key" ON "ItemOnSet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetOnOrder" ADD CONSTRAINT "SetOnOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetOnOrder" ADD CONSTRAINT "SetOnOrder_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnSet" ADD CONSTRAINT "ItemOnSet_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOnSet" ADD CONSTRAINT "ItemOnSet_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
