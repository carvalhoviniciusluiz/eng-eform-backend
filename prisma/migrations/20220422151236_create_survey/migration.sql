-- CreateTable
CREATE TABLE "surveys" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(191),
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted" TIMESTAMP(3),
    "form_id" TEXT NOT NULL,
    "parent_id" TEXT,

    CONSTRAINT "surveys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "surveys_name_idx" ON "surveys"("name");

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "forms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "surveys" ADD CONSTRAINT "surveys_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "surveys"("id") ON DELETE SET NULL ON UPDATE CASCADE;
