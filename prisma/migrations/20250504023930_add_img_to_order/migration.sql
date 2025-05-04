/*
  Warnings:

  - You are about to drop the column `productId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `image` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_productId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "image" TEXT NOT NULL;
