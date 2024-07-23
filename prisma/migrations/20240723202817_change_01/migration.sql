/*
  Warnings:

  - You are about to drop the column `scanDate` on the `DetectedComputers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[scanDateId]` on the table `DetectedComputers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `scanDateId` to the `DetectedComputers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetectedComputers" DROP COLUMN "scanDate",
ADD COLUMN     "scanDateId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ScanDate" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScanDate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DetectedComputers_scanDateId_key" ON "DetectedComputers"("scanDateId");

-- AddForeignKey
ALTER TABLE "DetectedComputers" ADD CONSTRAINT "DetectedComputers_scanDateId_fkey" FOREIGN KEY ("scanDateId") REFERENCES "ScanDate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
