-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CPF', 'RG', 'SUS', 'NIS', 'WORK_CARD');

-- CreateEnum
CREATE TYPE "ContactType" AS ENUM ('EMAIL', 'CELL_PHONE', 'HOME_PHONE');

-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('VICTIM', 'AGGRESSOR');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MASTER');

-- CreateEnum
CREATE TYPE "FormSegment" AS ENUM ('PUBLIC', 'CAD_PERSON');

-- CreateEnum
CREATE TYPE "FormStatus" AS ENUM ('PUBLISHED', 'DRAFT', 'REMOVED');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('NONE', 'OBJECTIVE', 'MULTIPLE', 'PLAIN_TEXT');

-- CreateTable
CREATE TABLE "address_people" (
    "id" VARCHAR(36) NOT NULL,
    "number" VARCHAR(191),
    "zip_code" VARCHAR(50),
    "public_place" VARCHAR(100),
    "neighborhood" VARCHAR(191),
    "neighborhood_complement" TEXT,
    "county" VARCHAR(191),
    "city" VARCHAR(191),
    "person_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "address_people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_people" (
    "id" VARCHAR(36) NOT NULL,
    "document_type" "DocumentType" NOT NULL,
    "document_number" VARCHAR(191) NOT NULL,
    "shipping_date" TIMESTAMP(3),
    "person_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "document_people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_people" (
    "id" VARCHAR(36) NOT NULL,
    "contact_type" "ContactType" NOT NULL,
    "contact" VARCHAR(191) NOT NULL,
    "person_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "contact_people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "social_name" VARCHAR(191),
    "birth_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person_inputs" (
    "id" VARCHAR(36) NOT NULL,
    "number" VARCHAR(22) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "person_inputs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person_input_details" (
    "id" VARCHAR(36) NOT NULL,
    "person_input_id" VARCHAR(36) NOT NULL,
    "person_id" VARCHAR(36) NOT NULL,
    "person_type" "PersonType" NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "person_input_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(36) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "username" VARCHAR(191),
    "role" "Role" NOT NULL DEFAULT 'USER',
    "password_hashed" VARCHAR(191),
    "company_id" VARCHAR(36),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(191),
    "initials" VARCHAR(100) NOT NULL,
    "code" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forms" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(191),
    "author_id" VARCHAR(36) NOT NULL,
    "author_draft" JSONB NOT NULL,
    "segment" "FormSegment" DEFAULT 'PUBLIC',
    "status" "FormStatus" DEFAULT 'DRAFT',
    "order" INTEGER NOT NULL DEFAULT 999,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form_consumers" (
    "id" VARCHAR(36) NOT NULL,
    "form_id" VARCHAR(36) NOT NULL,
    "company_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "form_consumers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "form_id" VARCHAR(36) NOT NULL,
    "parent_id" VARCHAR(36),
    "type" "QuestionType" DEFAULT 'OBJECTIVE',
    "order" INTEGER NOT NULL DEFAULT 999,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" VARCHAR(36) NOT NULL,
    "content" VARCHAR(191) NOT NULL,
    "has_content" BOOLEAN DEFAULT false,
    "is_default" BOOLEAN DEFAULT false,
    "question_id" VARCHAR(36) NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 999,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question_answers" (
    "id" VARCHAR(36) NOT NULL,
    "form_id" VARCHAR(36) NOT NULL,
    "question_id" VARCHAR(36) NOT NULL,
    "answer_id" VARCHAR(36),
    "response" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "question_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person_question_answers" (
    "id" VARCHAR(36) NOT NULL,
    "person_id" VARCHAR(36) NOT NULL,
    "question_answer_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "person_question_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "person_input_question_answers" (
    "id" VARCHAR(36) NOT NULL,
    "person_input_id" VARCHAR(36) NOT NULL,
    "form_id" VARCHAR(36) NOT NULL,
    "question_answer_id" VARCHAR(36) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),

    CONSTRAINT "person_input_question_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "address_people_person_id_idx" ON "address_people"("person_id");

-- CreateIndex
CREATE INDEX "document_people_document_type_document_number_person_id_idx" ON "document_people"("document_type", "document_number", "person_id");

-- CreateIndex
CREATE INDEX "contact_people_person_id_idx" ON "contact_people"("person_id");

-- CreateIndex
CREATE INDEX "people_name_social_name_idx" ON "people"("name", "social_name");

-- CreateIndex
CREATE INDEX "person_inputs_number_idx" ON "person_inputs"("number");

-- CreateIndex
CREATE INDEX "person_input_details_person_input_id_person_id_idx" ON "person_input_details"("person_input_id", "person_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_company_id_idx" ON "users"("email", "company_id");

-- CreateIndex
CREATE UNIQUE INDEX "companies_code_key" ON "companies"("code");

-- CreateIndex
CREATE INDEX "companies_initials_idx" ON "companies"("initials");

-- CreateIndex
CREATE INDEX "forms_author_id_idx" ON "forms"("author_id");

-- CreateIndex
CREATE INDEX "form_consumers_form_id_company_id_idx" ON "form_consumers"("form_id", "company_id");

-- CreateIndex
CREATE INDEX "questions_form_id_parent_id_idx" ON "questions"("form_id", "parent_id");

-- CreateIndex
CREATE INDEX "answers_question_id_idx" ON "answers"("question_id");

-- CreateIndex
CREATE INDEX "question_answers_form_id_question_id_answer_id_idx" ON "question_answers"("form_id", "question_id", "answer_id");

-- CreateIndex
CREATE INDEX "person_question_answers_person_id_question_answer_id_idx" ON "person_question_answers"("person_id", "question_answer_id");

-- CreateIndex
CREATE INDEX "person_input_question_answers_person_input_id_form_id_quest_idx" ON "person_input_question_answers"("person_input_id", "form_id", "question_answer_id");

-- AddForeignKey
ALTER TABLE "address_people" ADD CONSTRAINT "address_people_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_people" ADD CONSTRAINT "document_people_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_people" ADD CONSTRAINT "contact_people_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_input_details" ADD CONSTRAINT "person_input_details_person_input_id_fkey" FOREIGN KEY ("person_input_id") REFERENCES "person_inputs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_input_details" ADD CONSTRAINT "person_input_details_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forms" ADD CONSTRAINT "forms_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_consumers" ADD CONSTRAINT "form_consumers_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_consumers" ADD CONSTRAINT "form_consumers_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "questions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_answers" ADD CONSTRAINT "question_answers_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_answers" ADD CONSTRAINT "question_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_answers" ADD CONSTRAINT "question_answers_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_question_answers" ADD CONSTRAINT "person_question_answers_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_question_answers" ADD CONSTRAINT "person_question_answers_question_answer_id_fkey" FOREIGN KEY ("question_answer_id") REFERENCES "question_answers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_input_question_answers" ADD CONSTRAINT "person_input_question_answers_person_input_id_fkey" FOREIGN KEY ("person_input_id") REFERENCES "person_inputs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_input_question_answers" ADD CONSTRAINT "person_input_question_answers_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person_input_question_answers" ADD CONSTRAINT "person_input_question_answers_question_answer_id_fkey" FOREIGN KEY ("question_answer_id") REFERENCES "question_answers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
