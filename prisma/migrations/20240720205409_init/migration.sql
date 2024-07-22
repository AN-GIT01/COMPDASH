/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "LicensedComputers" (
    "id" SERIAL NOT NULL,
    "compName" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LicensedComputers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetectedComputers" (
    "id" SERIAL NOT NULL,
    "compName" TEXT NOT NULL,
    "swName" TEXT NOT NULL,
    "swVersion" TEXT NOT NULL,
    "scanDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetectedComputers_pkey" PRIMARY KEY ("id")
);
