/*
  Warnings:

  - A unique constraint covering the columns `[addressId]` on the table `barber_shop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `barber_shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressId` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barber_shop" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "barber_shop_addressId_key" ON "barber_shop"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "person_addressId_key" ON "person"("addressId");

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barber_shop" ADD CONSTRAINT "barber_shop_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
