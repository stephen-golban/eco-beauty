-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MEN', 'WOMEN', 'UNISEX');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ProductCategory" ADD VALUE 'BAGS';
ALTER TYPE "ProductCategory" ADD VALUE 'SHOES';
ALTER TYPE "ProductCategory" ADD VALUE 'ACCESSORIES';
ALTER TYPE "ProductCategory" ADD VALUE 'MEN';
ALTER TYPE "ProductCategory" ADD VALUE 'WOMEN';

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "dealLabel" TEXT,
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "isDeal" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "howToUse" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "isOrganic" DROP NOT NULL,
ALTER COLUMN "isVegan" DROP NOT NULL,
ALTER COLUMN "isCrueltyFree" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Deal" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "startsAt" TIMESTAMP(3),
    "endsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DealToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DealToProduct_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_DealToProduct_B_index" ON "_DealToProduct"("B");

-- AddForeignKey
ALTER TABLE "_DealToProduct" ADD CONSTRAINT "_DealToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Deal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DealToProduct" ADD CONSTRAINT "_DealToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
