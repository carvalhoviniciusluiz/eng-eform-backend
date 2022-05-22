/*
  Warnings:

  - Made the column `content` on table `answers` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('OBJECTIVE', 'MULTIPLE');

-- AlterTable
ALTER TABLE "answers" ALTER COLUMN "content" SET NOT NULL;

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "type" "QuestionType" DEFAULT E'OBJECTIVE';
