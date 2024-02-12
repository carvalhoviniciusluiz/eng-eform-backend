
-- InsertForms

INSERT INTO "public"."forms" ("id","name","created_at","updated_at","author_id","author_draft","status", "order", "segment")
VALUES
('f594187f-504c-4266-b313-6d1fb19bb197','INFORMAÇÕES GERAIS','2023-03-27 13:48:22.181 UTC','2023-03-27 13:48:22.181 UTC','a8164d83-b66c-435a-be84-8f5c981fa222','{"id":"a8164d83-b66c-435a-be84-8f5c981fa222","email":"sepm@sepm.com","updatedAt":"2023-03-27T12:47:53.671Z"}','PUBLISHED', 0, 'CAD_PERSON');

-- InsertFormConsumers

INSERT INTO "public"."form_consumers" ("id", "form_id", "company_id")
VALUES ('b3fdccb0-3a97-4979-80e9-31765bc35de2', 'f594187f-504c-4266-b313-6d1fb19bb197', 'b973f87a-a7d0-4e14-b295-97326f5476a1');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES ('349843ed-6d8b-4f88-8674-753fee1f22fb','Nacionalidade','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','f594187f-504c-4266-b313-6d1fb19bb197','PLAIN_TEXT');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES ('63823e13-16a5-48e6-8a8f-3a8cefd2fe13','Cidade / Município','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","created_at","updated_at","question_id")
VALUES
('882c1421-5a37-41b2-a14d-bad734c6ebee','Macapá','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('cd3371ea-153e-4fcc-8a06-066111fa56c3','Santana','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('0dab6c49-5ec2-4a2c-9674-30d8958633b2','Laranjal do Jari','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('8351c72a-d631-4ab8-b46a-aa5d506a4fdd','Oiapoque','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('54d5bd16-9d4a-4411-89c9-f671b20a99e5','Mazagão','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('93070eb1-c7bb-4e07-b82c-85924e94599a','Porto Grande','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('d9202b4d-4363-4d62-b652-61e99233ecd1','Tartarugalzinho','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('2df65979-120e-4b95-837e-11cffa0a55da','Pedra Branca do Amapari','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('217ee48e-7eff-4120-b2f0-fa91fb28b165','Vitória do Jari','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('df48a150-7a9b-451e-9973-7991b0cd585e','Calçoene','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('4730c30b-377d-4d89-a330-4478c88bba25','Amapá','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('600cd23f-7515-483f-9c9a-407b64b92d89','Ferreira Gomes','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('4aed88ef-85c4-4b59-acfd-b7e022a94d85','Itaubal','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('15beed6e-bb25-4fb2-92e9-206ed64e59d3','Serra do Navio','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('e3d2d173-e9b2-4131-aadf-38a693f996eb','Cutias','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13'),
('1ed54fce-edb2-41b7-b2d7-a00c234c8b5b','Pracuúba','2024-01-30 16:36:48.877 UTC','2024-01-30 16:36:48.877 UTC','63823e13-16a5-48e6-8a8f-3a8cefd2fe13');


-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES ('c40ef3a5-0335-4bb0-aff7-9e592157520e','Raça / Cor','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('696388eb-0261-49da-9b90-847039470386','Amarela',false,false,'c40ef3a5-0335-4bb0-aff7-9e592157520e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('44029daa-cefc-44da-8313-9a5eac4ab21b','Branca',false,false,'c40ef3a5-0335-4bb0-aff7-9e592157520e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('97de9c06-8572-4e61-88da-e71b1484ba01','Parda',false,false,'c40ef3a5-0335-4bb0-aff7-9e592157520e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('27042532-b73d-42e9-ac0c-e75954453ddf','Preta',false,false,'c40ef3a5-0335-4bb0-aff7-9e592157520e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('8283e4c0-f824-4471-9eeb-0cd152cbcf10','Indígena',false,false,'c40ef3a5-0335-4bb0-aff7-9e592157520e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('5fdbcec1-8711-4f59-b461-772458a90139','Outros',true,false,'c40ef3a5-0335-4bb0-aff7-9e592157520e','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","parent_id","type")
VALUES ('7a15c535-4e48-4a23-9858-3a88c877c449','Em caso de indígena, etnia','2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','f594187f-504c-4266-b313-6d1fb19bb197','c40ef3a5-0335-4bb0-aff7-9e592157520e','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","created_at","updated_at","question_id")
VALUES
('01ec1992-7043-4f45-afc4-4f7bad36e056','Karipuna','2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('4b4d64fc-1134-42b0-9dac-67125ff25b7d','Galibi-Kalinã','2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('1eb67f86-a682-4729-99e0-aca1ca7acb55','Galibi-Marworno','2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('1b653c44-b675-430c-8265-b8482f8adcb6','Palikur-Arukwayene','2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('fe1bcc15-04af-41ab-8f6f-7e544905e012','Wajãpi','2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES
('c84f3307-3981-4ff3-8eef-815195b1e8e6','Localidade','2024-01-30 17:16:40.817 UTC','2024-01-30 17:16:40.817 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES
('82eba2d0-ccdc-45fb-b08e-c4e2e7038233','Reside em área Quilombola','c84f3307-3981-4ff3-8eef-815195b1e8e6','2024-01-30 17:16:40.817 UTC','2024-01-30 17:16:40.817 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","created_at","updated_at","question_id")
VALUES
('9831b2d4-e47d-4bb7-a5ab-2633b52f969f','Sim','2024-01-30 17:16:40.817 UTC','2024-01-30 17:16:40.817 UTC','82eba2d0-ccdc-45fb-b08e-c4e2e7038233'),
('8f25ecac-c62b-4d89-86e2-a49f1d398ac1','Não','2024-01-30 17:16:40.817 UTC','2024-01-30 17:16:40.817 UTC','82eba2d0-ccdc-45fb-b08e-c4e2e7038233');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES
('ad6bd0bb-0556-47ee-a1d4-6f9f04d5606e','Reside em área rural','c84f3307-3981-4ff3-8eef-815195b1e8e6','2024-01-30 18:01:20.819 UTC','2024-01-30 18:01:20.819 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","created_at","updated_at","question_id")
VALUES
('d48e0871-f406-4490-a1f5-4bbcf1fd764c','Sim','2024-01-30 18:01:20.819 UTC','2024-01-30 18:01:20.819 UTC','ad6bd0bb-0556-47ee-a1d4-6f9f04d5606e'),
('fcdc5928-b019-4199-af2b-ede141ea4ccf','Não','2024-01-30 18:01:20.819 UTC','2024-01-30 18:01:20.819 UTC','ad6bd0bb-0556-47ee-a1d4-6f9f04d5606e');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES
('8ae6739b-f1ff-4967-ac4c-4f94a68e7f36','Reside em área urbana','c84f3307-3981-4ff3-8eef-815195b1e8e6','2024-01-31 13:05:18.191 UTC','2024-01-31 13:05:18.191 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","created_at","updated_at","question_id")
VALUES
('3481163d-b463-493e-aff5-8e152548e199','Sim','2024-01-31 13:05:18.191 UTC','2024-01-31 13:05:18.191 UTC','8ae6739b-f1ff-4967-ac4c-4f94a68e7f36'),
('54ea1b70-fd62-448f-a5bf-b80fa6dd7b74','Não','2024-01-31 13:05:18.191 UTC','2024-01-31 13:05:18.191 UTC','8ae6739b-f1ff-4967-ac4c-4f94a68e7f36');

-- InsertQuestions
