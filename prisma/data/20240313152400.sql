-- TRUNCATE address_people, contact_people, document_people, person_input_details, person_input_question_answers, person_question_answers, question_answers, person_inputs, people CASCADE;

-- TRUNCATE answers, questions, form_consumers, forms, companies, users CASCADE;

-- InsertCompanies

INSERT INTO "public"."companies" ("id","name","initials","created_at","updated_at","code")
VALUES
('b973f87a-a7d0-4e14-b295-97326f5476a1','Secretaria Extraordinária de Políticas para as Mulheres','SEPM','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',573),
(gen_random_uuid(),'Secretaria de Estado de Trabalho e Empreendedorismo','SETE','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',932),
(gen_random_uuid(),'Secretaria de Estado de Educação','SEED','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',165),
(gen_random_uuid(),'Secretaria de Estado de Inclusão e Mobilização Social','SIMS','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',247),
(gen_random_uuid(),'Secretaria de Estado de Saúde','SESA','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',810),
(gen_random_uuid(),'Hospital de Emergência', 'Pronto Socorro','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',386),
(gen_random_uuid(),'Hospital da Mulher Mães Luzia','HMML','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',521),
(gen_random_uuid(),'Hospital das Clínicas Alberto Lima','HCAL','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',749),
(gen_random_uuid(),'Coordenadoria de DST','AIDS e Hepatites Virais','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',639),
(gen_random_uuid(),'Centro de Referência em Práticas Integrativas e Complementares do Amapá','CRPIC','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',104),
(gen_random_uuid(),'Centro de Reabilitação do Amapá','CREAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',893),
(gen_random_uuid(),'Secretaria de Estado da Justiça e Segurança Pública','SEJUSP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',432),
(gen_random_uuid(),'Delegacia Geral da Polícia Civil','DGPC','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',618),
(gen_random_uuid(),'Delegacias Especializadas de Crimes contra a Mulher Vítima de Violência Doméstica e Familiar','DCCM’s','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',327),
(gen_random_uuid(),'Centro de Referência e Atendimento à Mulher','CRAM','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',576),
(gen_random_uuid(),'Centro de Atendimento à Mulher e à Família','CAMUF','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',215),
(gen_random_uuid(),'Centro de Referência em Atendimento à Mulher','CRAM','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',930),
(gen_random_uuid(),'Polícia Militar do Estado do Amapá','PMAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',483),
(gen_random_uuid(),'Polícia Técnico Científica do Amapá','POLITEC','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',762),
(gen_random_uuid(),'Instituto de Administração Penitenciária Feminina','IAPEN','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',129),
(gen_random_uuid(),'Centro Integrado Operações de Defesa Social','CIODES','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',875),
(gen_random_uuid(),'Corpo de Bombeiros Militar do Estado do Amapá','CBMAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',368),
(gen_random_uuid(),'Agencia de Desenvolvimento Econômico do Amapá','AGENCIA','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',594),
(gen_random_uuid(),'Secretaria de Estado do Desenvolvimento das Cidades','SDC','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',417),
(gen_random_uuid(),'Centro de Atenção Psicossocial','CAPS','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',687),
(gen_random_uuid(),'Centro de Atenção Psicossocial para Álcool e Outras Drogas','CAPS AD','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',205),
(gen_random_uuid(),'Defensoria Pública Geral do Estado do Amapá','DPE','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',981),
(gen_random_uuid(),'Secretaria Extraordinária de Políticas Públicas para os Afrodescendentes','SEAFRO','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',503),
(gen_random_uuid(),'Secretaria Extraordinária Povos Indígenas','SEPI','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',178),
(gen_random_uuid(),'Secretaria Extraordinária de Políticas para a Juventude','SEJUV','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',849),
(gen_random_uuid(),'Promotoria de Defesa da Mulher','Promotoria de Defesa da Mulher','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',396),
(gen_random_uuid(),'Agência de Defesa e Inspeção Agropecuária do Amapá','Agência de Defesa e Inspeção Agropecuária do Amapá','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',705),
(gen_random_uuid(),'Agência de Fomento do Amapá','AFAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',251),
(gen_random_uuid(),'Centro de Gestão da Tecnologia da informação','PRODAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',941),
(gen_random_uuid(),'Escola de Administração Pública','EAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',609),
(gen_random_uuid(),'Fundação da Criança e do Adolescente do Estado do Amapá','FCRIA','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',734),
(gen_random_uuid(),'Instituto de Desenvolvimento Rural do Estado do Amapá','Rurap','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',168),
(gen_random_uuid(),'Instituto de Terras do Estado do Amapá','Amapá Terras','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',828),
(gen_random_uuid(),'Laboratório Central de Saúde Pública','LACEM','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',456),
(gen_random_uuid(),'Rádio Difusora de Macapá','Difusora','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',598),
(gen_random_uuid(),'Secretaria de Estado da Ciência e Tecnologia','CTEC','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',863),
(gen_random_uuid(),'Secretaria de Estado da Comunicação','SECOM','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',172),
(gen_random_uuid(),'Secretaria de Estado da Cultura','SECULT','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',325),
(gen_random_uuid(),'Secretaria de Estado de Transporte','SETRAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',596),
(gen_random_uuid(),'Secretaria de Estado do Desenvolvimento Rural','SDR','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',710),
(gen_random_uuid(),'Secretaria de Estado do Desporto e Lazer','SEDEL','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',349),
(gen_random_uuid(),'Secretaria de Estado do Turismo','SECULT','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',927),
(gen_random_uuid(),'Secretaria Extraordinária de Representação do Governo do Estado do Amapá em Brasília','Secretaria Extraordinária de Representação do Governo do Estado do Amapá em Brasília','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',823),
(gen_random_uuid(),'Sistema Integrado do Atendimento ao Cidadão','SIAC','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',577),
(gen_random_uuid(),'Universidade do Estado do Amapá','UEAP','2023-03-27 12:50:41.497 UTC','2023-03-27 12:50:41.497 UTC',607);

-- InsertUsers

-- master@master.com
-- sepm@sepm.com
-- Ch@nge123
INSERT INTO "public"."users" ("id","username","email","role","password_hashed","company_id","created_at","updated_at")
VALUES
('977e22e0-4c36-4fbc-b394-3456c16492e0','master','master@master.com','MASTER','$2a$10$WC4znjUbRFWfc1uOXorKxecXmZv8bgtQ2EG.Jf4yk8ROdrgluCe8O',null,'2023-03-27 12:47:53.671 UTC','2023-03-27 12:47:53.671 UTC'),
('a8164d83-b66c-435a-be84-8f5c981fa222','sepm','sepm@sepm.com','ADMIN','$2a$10$xk0YVVUyh2qkoaAehWP8vuUsxyPKpN6EwLdljI0cbNkYw3ebZ6S2q','b973f87a-a7d0-4e14-b295-97326f5476a1','2023-03-27 12:47:53.671 UTC','2023-03-27 12:47:53.671 UTC');

-- InsertForms

INSERT INTO "public"."forms" ("id","name","created_at","updated_at","author_id","author_draft","status", "order", "segment")
VALUES
('64f9e7dd-de6d-400b-877c-252c965c0f12','ACOMPANHAMENTO','2023-03-27 13:48:22.181 UTC','2023-03-27 13:48:22.181 UTC','a8164d83-b66c-435a-be84-8f5c981fa222','{"id":"a8164d83-b66c-435a-be84-8f5c981fa222","email":"sepm@sepm.com","updatedAt":"2023-03-27T12:47:53.671Z"}','PUBLISHED', 1, 'CAD_PERSON'),
('f594187f-504c-4266-b313-6d1fb19bb197','INFORMAÇÕES GERAIS','2023-03-27 13:48:22.181 UTC','2023-03-27 13:48:22.181 UTC','a8164d83-b66c-435a-be84-8f5c981fa222','{"id":"a8164d83-b66c-435a-be84-8f5c981fa222","email":"sepm@sepm.com","updatedAt":"2023-03-27T12:47:53.671Z"}','PUBLISHED', 0, 'CAD_PERSON');

-- InsertFormConsumers

INSERT INTO "public"."form_consumers" ("id", "form_id", "company_id")
VALUES
('30b67f70-d6a0-4e08-b0b3-46e46652a15a', '64f9e7dd-de6d-400b-877c-252c965c0f12', 'b973f87a-a7d0-4e14-b295-97326f5476a1'),
('b3fdccb0-3a97-4979-80e9-31765bc35de2', 'f594187f-504c-4266-b313-6d1fb19bb197', 'b973f87a-a7d0-4e14-b295-97326f5476a1');

/**
* ACOMPANHAMENTO
*/
-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('b488a7e1-efce-43cb-ad3e-d4d59ac02c86','Durante o atendimento, a vítima demonstra percepção de risco sobre sua situação? A percepção é de existência ou inexistência do risco? (por exemplo, ela diz que o agressor pode matá-la, ou ela justifica o comportamento do agressor ou naturaliza o comportamento violento?). Anote a percepção e explique.','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999),
('c0bdb180-79a1-4807-9875-216ca27762d1','Existem outras informações relevantes com relação ao contexto ou situação da vítima e que possam indicar risco de novas agressões? (Por exemplo, a vítima tem novo(a) companheiro(a) ou tomou decisões que anunciam um rompimento definitivo com o agressor (pretende mudar de casa, bairro, cidade). Anote e explique.','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999),
('9938d346-423c-4dbe-b150-a51979484c61','Como a vítima se apresenta física e emocionalmente? (Tem sinais de esgotamento emocional, está tomando medicação controlada, necessita de acompanhamento psicológico e/ou psiquiátrico?) Descreva.','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999),
('9403a773-7860-4538-af03-1d3cd4c9a1f6','Existe o risco de a vítima tentar suicídio ou existem informações de que tenha tentado se matar?','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999),
('b6443897-f443-4436-ab95-6b66b43bbaea','A vítima ainda reside com o(a) agressor(a) ou ele tem acesso fácil à sua residência? Explique a situação.','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999),
('42311562-4d7d-4d78-8c22-545d7bb205b3','Descreva, de forma sucinta, outras circunstâncias que chamaram sua atenção e que poderão representar risco de novas agressões, a serem observadas no fluxo de atendimento.','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999),
('55d6df5d-7e70-4bfb-88a0-9d2d47333aaa','Quais são os encaminhamentos sugeridos para a vítima?','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','PLAIN_TEXT', 999);

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES
('55129c12-8758-4cb6-b2aa-de232028b90a','A vítima concordou com os encaminhamentos?','2024-01-30 18:01:20.819 UTC','2024-01-30 18:01:20.819 UTC','64f9e7dd-de6d-400b-877c-252c965c0f12','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","created_at","updated_at","question_id")
VALUES
('dce70f8a-7f01-41bf-a592-dca0d56bfaf5','Sim','2024-01-30 18:01:20.819 UTC','2024-01-30 18:01:20.819 UTC','55129c12-8758-4cb6-b2aa-de232028b90a'),
('80bad7ed-9dfb-4a21-9cd7-b5afe45e67f1','Não','2024-01-30 18:01:20.819 UTC','2024-01-30 18:01:20.819 UTC','55129c12-8758-4cb6-b2aa-de232028b90a');

/**
* INFORMAÇÕES GERAIS
*/
-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES ('2854c7ec-4195-4cf9-b546-4af4d34e29a7','Nacionalidade','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','f594187f-504c-4266-b313-6d1fb19bb197','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('003ee701-cd2c-4c3e-a72d-2bf850d23921','Brasileiro',false,false,'2854c7ec-4195-4cf9-b546-4af4d34e29a7','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('4af8d634-22f7-4178-aeea-c31960849bb1','Estrangeiro',true,false,'2854c7ec-4195-4cf9-b546-4af4d34e29a7','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

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

INSERT INTO "public"."answers" ("id","content","has_content","is_default","created_at","updated_at","question_id")
VALUES
('01ec1992-7043-4f45-afc4-4f7bad36e056','Karipuna',false,false,'2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('4b4d64fc-1134-42b0-9dac-67125ff25b7d','Galibi-Kalinã',false,false,'2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('1eb67f86-a682-4729-99e0-aca1ca7acb55','Galibi-Marworno',false,false,'2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('1b653c44-b675-430c-8265-b8482f8adcb6','Palikur-Arukwayene',false,false,'2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('fe1bcc15-04af-41ab-8f6f-7e544905e012','Wajãpi',false,false,'2024-01-30 16:24:01.881 UTC','2024-01-30 16:24:01.881 UTC','7a15c535-4e48-4a23-9858-3a88c877c449'),
('0606678e-9383-4ee1-b196-e23c56ce7d29','Outros',true,false,'2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC', '7a15c535-4e48-4a23-9858-3a88c877c449');

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

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type")
VALUES ('f5577090-1511-4182-a28d-393f0a4673ae','Filiação','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','f594187f-504c-4266-b313-6d1fb19bb197','MULTIPLE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('36aad467-3689-4d85-8767-5a18d29a90bb','Pai',true,false,'f5577090-1511-4182-a28d-393f0a4673ae','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('2fdf81c8-d44f-43f3-8a1a-7a762dc68ce2','Mãe',true,false,'f5577090-1511-4182-a28d-393f0a4673ae','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('7b2351c6-03b6-442d-91de-2a32ac0725c2','Outros',true,false,'f5577090-1511-4182-a28d-393f0a4673ae','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertForms

INSERT INTO "public"."forms" ("id","name","created_at","updated_at","author_id","author_draft","status", "order", "segment")
VALUES
('e3728c43-98c9-4ff3-a6be-7feeba7a5702','FIXA DE ATENDIMENTO','2023-03-27 13:48:22.181 UTC','2023-03-27 13:48:22.181 UTC','a8164d83-b66c-435a-be84-8f5c981fa222','{"id":"a8164d83-b66c-435a-be84-8f5c981fa222","email":"sepm@sepm.com","updatedAt":"2023-03-27T12:47:53.671Z"}','PUBLISHED', 0, 'CAD_PERSON');

-- InsertFormConsumers

INSERT INTO "public"."form_consumers" ("id", "form_id", "company_id")
VALUES
('8a34cfe4-bd52-464f-b73a-0aa44260b353', 'e3728c43-98c9-4ff3-a6be-7feeba7a5702', 'b973f87a-a7d0-4e14-b295-97326f5476a1');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','PROCEDÊNCIA','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE', 1);

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('6758580d-0449-44e1-bd82-08ce1ec23412','Espontânea',false,false,'d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('af5e39a9-b7c1-46ee-bf4f-00b24607bb8a','Atendimento remoto',false,false,'d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2d7e4eae-f86f-4a4a-9506-3f213976770c','Busca ativa',false,false,'d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('e69b0fc0-6d65-477b-bcea-e066098de022','RAM, qual?',true,false,'d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('70826300-f7f1-4461-82d7-6794cb92f5df','Outro órgão, qual?',true,false,'d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('977f9303-9de7-4f45-8a35-166090a343bb','Outras situações',true,false,'d4ce4628-7c0e-4d17-89f6-ecc9078e96e4','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('f0651ec1-fcd1-42c0-b8e4-e1d0a8b3d2f0','DADOS DE IDENTIFICAÇÃO','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE', 2);

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('5d8cd88d-6a4e-4e9b-8bd7-4d85f04ca4d0','Acolhimento',false,false,'f0651ec1-fcd1-42c0-b8e4-e1d0a8b3d2f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('0d979281-fefc-47cd-a7ef-7cbd0c7092cd','Reacolhimento',false,false,'f0651ec1-fcd1-42c0-b8e4-e1d0a8b3d2f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('03bedc87-3608-46c7-8a00-32a142c82fc4','Atendimento',false,false,'f0651ec1-fcd1-42c0-b8e4-e1d0a8b3d2f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('dab18c45-e636-44ce-9d2a-bc150d652323','PREENCHIMENTO','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE', 3);

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('b1cd3155-86aa-4da4-81a9-2c1e784e641e','Identidade de Gênero','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('e236001a-c98b-4542-92b7-531ff6d901ae','Cisgênero *Que se identifica com o gênero designado ao nascer',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('fc5758fd-7751-400c-b2a6-c376aaef3705','Transexual',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('461e1c6a-1215-4df9-ad14-50e5341b79b7','Travestir',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('85572933-63c0-419d-bcad-0ede5f00f343','Pansexual',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('624100de-684c-4f44-a333-38fb31703a1e','Não fluído',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('88070020-92b8-45fc-9ab1-4d72eefb6a8e','Não binário',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('dc2fb9a3-9227-4c80-ac5c-f330738ff11b','Ignorado',false,false,'b1cd3155-86aa-4da4-81a9-2c1e784e641e','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('6504a191-1786-4068-a2f6-9ed973757e9d','Orientação sexual','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('704d2ec4-5074-4a0f-bcb3-d0d97e7ed34f','Heterossexual',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f38d1b65-1e38-4a8d-8c2c-ce01b92f4d28','Bissexual',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('297adaba-0b23-4acf-a17c-49127a39f23f','Lésbica',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('fc2d8bab-7082-4385-b544-36715893ef1b','Assexual',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('b994a4ca-ece7-481b-9fee-ec92861bf621','Pansexual',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('c0216c03-9f3f-40b8-858a-39fe6a25ab7c','Demissexual',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('e82b7294-7a4c-4e6a-b3d8-d59160880d9d','Ignorado',false,false,'6504a191-1786-4068-a2f6-9ed973757e9d','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('1b6597d7-ffb2-453b-83e8-fd4daad4ac6d','Você é intersexo','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('e1ec2b5c-eeaa-4469-ad0d-cd94502412ee','Sim',false,false,'1b6597d7-ffb2-453b-83e8-fd4daad4ac6d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('bb2de508-4eee-44de-a5b5-772384b52728','Não',false,false,'1b6597d7-ffb2-453b-83e8-fd4daad4ac6d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('23c4b5be-9ef0-498f-aae3-94044ab78774','Não soube responder ',false,false,'1b6597d7-ffb2-453b-83e8-fd4daad4ac6d','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('f26e5217-22c2-4fd3-a34e-77a44d004a10','Estado Civil','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('2cda9fdd-91a3-4b9d-a0d7-b4420107e854','Solteira',false,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('718069cb-3fe5-428e-83f8-6935946e03e4','Casada',false,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('61170f70-d8c7-4b15-a304-1d0d8db2252e','Viúva',false,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('5710c729-82f7-4713-8594-73931bdbe077','Separada',false,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('f498bf1c-3b69-4e56-a773-4bdf56b5a23b','Divorciada',false,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('4bff6b03-5c7e-4d30-8fce-a11f31ab241e','União Estável',false,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('ed676626-67a6-4464-a2d0-02229bf6a857','Outros',true,false,'f26e5217-22c2-4fd3-a34e-77a44d004a10','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('5d71d79a-0e14-499e-b868-f5a1890fb832','Escolaridade','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('5a5cace1-1c41-4e2c-b502-853e5b8b3722','Sem escolaridade',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6ed715dd-54e2-4660-affb-188c5d797495','Alfabetizada',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('22d1fc81-92fa-4ccc-b90c-3667ed7354d8','Ensino fundamental incompleto',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('d8b5e1ec-c693-4fc3-8c52-a362d1133afe','Ensino fundamental completo',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('5f1e091d-c438-416e-8083-2b99d6e61823','Ensino médio incompleto',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('62bfd67c-5955-48a7-8429-225f3fbb9b97','Ensino médio completo',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('32cde8a1-8cea-4027-9240-40c24d4c1dd4','Ensino superior incompleto',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('f59310d9-e0c7-43d6-b780-d78e70f9e745','Ensino superior completo',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('60b14259-79b7-4ffb-9b49-634a08a8b940','Curso técnico',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('947e5ef8-f6b6-4485-a74d-628781655fdb','Pós-graduação ',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('83022d9f-0cfe-42c7-93a6-c36b53b4de5f','Não estuda - Menor de 18 anos',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('f3618a06-8ef0-42d1-b4f4-7b1938d3599b','Na escola - Menor de 18 anos',false,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('ddeb11d2-4e7b-469a-92a3-d2b0ae125a3b','Outros',true,false,'5d71d79a-0e14-499e-b868-f5a1890fb832','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('742e3525-9775-47fb-a073-4307d928d958','Participou de algum curso profissionalizante?','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('34609a2b-4a73-4e15-856d-324dad8f4dc5','Não',false,false,'742e3525-9775-47fb-a073-4307d928d958','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('83473d40-ef8b-460f-8fc2-8e7609094e19','Sim, qual?',true,false,'742e3525-9775-47fb-a073-4307d928d958','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('fdb463b7-94e2-4036-9bff-f70304624938','Caso tenha feito algum curso profissionalizante, concluiu?','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('3e7fd65c-1d78-43ed-bc61-d927439d9d7a','Não',false,false,'fdb463b7-94e2-4036-9bff-f70304624938','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('841d06e6-3024-45f6-a790-bd2c4ba408e6','Sim',false,false,'fdb463b7-94e2-4036-9bff-f70304624938','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('38823908-5f50-40ed-a0d7-e9cffb4d1125','Possui interesse em fazer algum curso?','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('67cd31ec-e9e0-4d7f-8202-d4bcc90afe5b','Não',false,false,'38823908-5f50-40ed-a0d7-e9cffb4d1125','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('1ae23a6f-9f9a-4449-b15d-65c0b57874c0','Sim, qual área?',true,false,'38823908-5f50-40ed-a0d7-e9cffb4d1125','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('c5aa594b-ad68-4e4d-88b5-f16ef330e14a','Empregabilidade','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('10646c2d-7f88-4d72-90a6-7d4895d7171c','Emprego formal (contrato/carteira assinada)',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('3c29bd25-7a2b-44e0-a970-ed1f2f67b394','Emprego informal/autônomo ( Profissional prestador de serviço sem vínculo empregatício)',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('59bb0636-964f-41c4-9e54-7953c6c26786','MEI (com CNPJ)',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6bd6ef4b-29fd-4690-b5f3-ff84d0c8f9ae','Aposentada',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('82ff7790-7cde-4c1e-8aad-41a18e339811','Servidora pública',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('b07e03ea-014b-49fe-9483-b4156dcabb21','Desempregada',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('97e83957-3d43-4210-84be-eff78ee4eaa5','Estudante',false,false,'c5aa594b-ad68-4e4d-88b5-f16ef330e14a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('cccd18c2-25de-412b-805d-f7f20afc3318','Renda individual','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('f358dab8-e8e7-41ef-bf05-0e6331af9c4b','Não possui renda',false,false,'cccd18c2-25de-412b-805d-f7f20afc3318','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('53d6ed12-a9b6-4d5b-92ca-8bdca7333c66','Menor que um salário mínimo',false,false,'cccd18c2-25de-412b-805d-f7f20afc3318','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a187c1f4-471b-4641-92ad-5819f66f8833','1 salário mínimo',false,false,'cccd18c2-25de-412b-805d-f7f20afc3318','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d7b23a86-61ec-4254-99cc-b2edea3f1491','2 a 5 salários mínimos',false,false,'cccd18c2-25de-412b-805d-f7f20afc3318','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ca20ff57-7b80-4e68-9a08-21291779b46b','Não declarou renda',false,false,'cccd18c2-25de-412b-805d-f7f20afc3318','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('9486a114-6695-4a2a-8595-5f798506da6e','Número de filhos','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('ab77e186-f456-4a6e-9060-ff659494b3aa','1 a 3',false,false,'9486a114-6695-4a2a-8595-5f798506da6e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('0ef006f1-43ad-45be-854d-8e5ae661ae37','4 a 6',false,false,'9486a114-6695-4a2a-8595-5f798506da6e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('065337b1-e798-44fd-8042-8c3a4be74d4f','7 a 10',false,false,'9486a114-6695-4a2a-8595-5f798506da6e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('1bca6ef7-7287-443d-9a8b-9e41de6f6655','Mais de 10',false,false,'9486a114-6695-4a2a-8595-5f798506da6e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('4d46f66e-3287-4349-8551-65d7770de310','Não possui filhos',false,false,'9486a114-6695-4a2a-8595-5f798506da6e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('ff5b4946-79b8-4c6d-9981-cd86beb6eb4e','Mãe atípica','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('d9e0223c-ed26-443d-9076-e40cded79336','Não',false,false,'ff5b4946-79b8-4c6d-9981-cd86beb6eb4e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('dfa4b470-4ba9-4f68-b46b-59f3b896abed','Sim',false,false,'ff5b4946-79b8-4c6d-9981-cd86beb6eb4e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('0b874979-57ea-40c4-8b5a-940fb16985d6','No caso de ser casada ou possuir união estável','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','NONE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('8b519610-fc51-487a-83d2-2f39d3cce7a5','Nome do cônjuge',true,false,'0b874979-57ea-40c4-8b5a-940fb16985d6','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('72e70698-cabb-45ce-bca8-5c6d95717d7f','Endereço',true,false,'0b874979-57ea-40c4-8b5a-940fb16985d6','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('02a9f01c-9500-4111-b47d-ae1c116ccaa4','Telefone',true,false,'0b874979-57ea-40c4-8b5a-940fb16985d6','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','Escolaridade (cônjuge)','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('2b8e619b-c07c-4976-818b-652cdd8af08d','Sem escolaridade',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ca0d58e6-4448-4735-b53d-7e9ab10f6c45','Ensino fundamental incompleto',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('5e996437-98eb-4f5e-99a6-f57fdbd951d1','Ensino fundamental completo',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c616a413-f0c7-44a5-8894-54d008bcd5b0','Ensino médio incompleto',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('84374f4a-be57-4aad-8cb2-1ca502cb091d','Ensino médio completo',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('89a2c5cc-eb7d-4f0d-b90c-fc43e4e66d66','Ensino superior incompleto',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('789514ec-9fab-4b1f-ac2b-be2a334a520c','Ensino superior completo',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('137bc172-138b-49cf-86fb-e746de8b87a4','Curso técnico',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('bce70530-c641-4141-b918-b71e8e777ffe','Pós-graduação',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d7a46c94-2c3d-42ea-9f14-52f47d115b06','Mestrado',false,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('9b26494e-aded-425c-989d-f22e61b01b77','Outros',true,false,'89e1d06e-43d9-4d1f-abde-8eb8ccedabfd','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('d7df4d26-1edd-4e72-84ed-fb5b5db16bad','Empregabilidade (cônjuge)','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('89459155-69ad-43f1-b6a7-9363fb3c4158','Emprego formal (contrato/carteira assinada)',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a8f3b17e-865f-4dbd-bea3-821889f4191b','Emprego informal/autônomo (Profissional prestador de serviço sem vínculo empregatício)',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('bcf03871-8c0a-4700-bd12-eae797b61315','MEI (com CNPJ)',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('82017f2b-43b8-4b40-87b2-df1370c5e668','Aposentado',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('0092bf80-09e8-49ab-97e4-d92d503e97e0','Servidor público',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('fb4e25da-58d9-41d2-8e9e-1ed37779d586','Desempregado',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2b32c04e-acf0-418a-ab84-92fb30019473','Estudante',false,false,'d7df4d26-1edd-4e72-84ed-fb5b5db16bad','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('6efda9c4-9c02-4323-8649-04c503a3ba31','Renda individual (cônjuge)','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('0c287940-2f76-4e22-bb29-b650a31197c2','Não possui renda',false,false,'6efda9c4-9c02-4323-8649-04c503a3ba31','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('7cd49ecc-af3f-4021-98c8-f83b1ee5fa1c','Menor que um salário mínimo',false,false,'6efda9c4-9c02-4323-8649-04c503a3ba31','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('80aaf566-156e-4552-9fc7-5b579476af4f','1 salário mínimo',false,false,'6efda9c4-9c02-4323-8649-04c503a3ba31','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('251269b8-98f7-4934-99b3-f5d6c42fd58d','2 a 5 salários mínimos',false,false,'6efda9c4-9c02-4323-8649-04c503a3ba31','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a833e648-3ed3-4265-8e92-e141344372bf','Não declarou renda',false,false,'6efda9c4-9c02-4323-8649-04c503a3ba31','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type","order")
VALUES ('933e71a4-c22a-4ff7-8edb-ec9b6c8d010f','AUTOR (A) DA VIOLÊNCIA','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE',4);

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('f49c10d1-a1a4-40cc-ab89-1c6c287b3300','Escolaridade','933e71a4-c22a-4ff7-8edb-ec9b6c8d010f','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('5d2ddab9-96fd-412d-b63d-2071816ac72e','Sem escolaridade',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('7de836b1-346d-4ec4-b4a6-f576ba47b8b7','Alfabetizada',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('3c2f44ce-8015-4e0c-8419-f602dc83d5da','Ensino fundamental incompleto',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('fea20b4b-bb0d-485c-9545-029cada6f51c','Ensino fundamental completo',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('8cfd005f-c782-4f3b-ad4f-c096003b3b64','Ensino médio incompleto',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('d34a0c11-557c-4c7d-84f8-5ca4d29ac260','Ensino médio completo',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('d39a86ce-24c9-4b1d-b3cd-960c13d606a4','Ensino superior incompleto',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('077b5c10-b69f-43c3-8ef4-5db09fc1157e','Ensino superior completo',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('5d9313de-34f3-42ac-ac4b-58b0869a3896','Curso técnico',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('926a2655-c05e-4404-83d4-1a29e6aeeac2','Pós-graduação ',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('c0da4a11-0810-4fb5-8442-a86d6dde061a','Não estuda - Menor de 18 anos',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('3b51f7df-c18f-4b34-ab7d-a33e13e45dd9','Na escola - Menor de 18 anos',false,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC'),
('87c0a532-2254-4aa7-a21c-e05dccb2a518','Outros',true,false,'f49c10d1-a1a4-40cc-ab89-1c6c287b3300','2024-02-01 18:45:40.393 UTC','2024-02-01 18:45:40.393 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('4668c66a-f928-4e3c-b7f6-073de8604670','Trabalha','933e71a4-c22a-4ff7-8edb-ec9b6c8d010f','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('5dacb75c-21e9-4ab6-a35d-8dcfa5438575','Não',false,false,'4668c66a-f928-4e3c-b7f6-073de8604670','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('19ffc59c-0e4f-4139-bc0b-a6dd74a445a9','Sim, qual profissão/ocupação?',true,false,'4668c66a-f928-4e3c-b7f6-073de8604670','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('3738cd56-cc88-4c18-b0f8-899731133a30','Vinculo com o agressor','933e71a4-c22a-4ff7-8edb-ec9b6c8d010f','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('f706b1a8-5334-496e-b030-ab533ef0d4f3','Companheiro',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('7604466c-e94a-4b11-906d-df8ea457fdb5','Companheira',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a7dc951d-769b-4631-b26e-428128a9cb3d','Namorado',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('30f27f7f-4f17-4d2b-9cc5-32ea24362227','Namorada',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('fd20d395-f423-4ebe-a7d4-6791f44840e0','Ex companheiro',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ef2b7e9f-4dda-4d46-9f28-7c5752fe0859','Ex companheira',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ddf1f327-06ef-412e-87cd-f1c577559d82','Ex namorado',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('9fde2058-d412-4c31-806a-60215a9be5fd','Ex namorada',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f9cd66b0-cef4-4c5d-877a-7f2fcb248f08','Empregador',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('0752ecce-ca4e-452b-aafe-bf0ddae55c2c','Pai',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('717d70a2-5342-4fa7-b325-972cdc86123a','Mãe',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('0b285fcc-b910-4941-9b7e-2b35848abf87','Filho',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('37163282-8122-4bc3-b71e-dd3207faf06b','Filha',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('88aafb28-6403-4069-b7ab-03cb16a4ee3f','Irmão',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('78403039-1291-4024-bd07-4f98a10817e2','Irmã',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('777b85bb-3f7a-487a-821d-b3216f888798','Padrastro',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('132cb6e2-4d90-4fec-9436-96ccabde6c12','Madrasta',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('51a1b75f-7f34-48b5-bc9d-ed0fe0ac8e4f','Sem vínculo ',false,false,'3738cd56-cc88-4c18-b0f8-899731133a30','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('10616219-d701-47d4-82df-6cfb9587b7f0','Potencializadores da violência','dab18c45-e636-44ce-9d2a-bc150d652323','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('70d99a06-dc22-4036-ba76-b3248142e598','Traição',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('89d3bb88-f170-48ec-ab92-89a50be96bd4','Ciúmes',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('5e1b7308-3949-4491-9163-ade3770f6c40','Conflito Familiar',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ec10a57b-6a47-485f-864f-84e8054b0e0f','Álcool',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('679287e3-88f8-4204-98e7-00ec038bfc20','Drogas',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2dac9923-14d0-4770-b299-0f72ac230ca8','Sexismo',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('9737b775-8e34-4e67-bb4b-5006b67afa97','Lesbofobia',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('799ded0a-34a1-4ed0-b708-c56aa5515482','Bifobia',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6b187531-cc96-48ad-b4c8-64f1780760e5','Transfobia',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('97bde595-a26f-4a86-a1b3-27708217be01','Racismo',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d16f9fe2-142c-4905-874c-2bbc1141d559','Intolerância religiosa',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('8b16d827-e7ce-4851-a26c-a16b132530d5','Xenofobia',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2ef22444-2244-458a-bce3-06541c9186b5','Conflito geracional',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('35c7c25d-905b-454e-9244-d33ac8a79bd2','Situação de rua',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d8c2b27f-b185-4a5f-9082-85db4f79ff44','Misoginia',false,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('111d3e25-7940-486d-a0b2-f7935c3347cb','Outros',true,false,'10616219-d701-47d4-82df-6cfb9587b7f0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type","order")
VALUES ('3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','TIPOLOGIA DA VIOLÊNCIA','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE',5);

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('3da1ec53-0927-4e07-a720-0c71593afa3b','Física',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('8a757b00-90db-436f-897e-0389fabb4752','Psicológica/Emocional',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('4db3b6fd-d5ba-4290-9c88-01d328274734','Sexual',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('08dc552d-2882-447d-bbd1-a8116c879b3d','Patrimonial',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('447c9c57-005a-45a5-a615-0bbfd053db9c','Moral',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('e5a9d00f-92b1-4f59-87e1-ebc7bd274f34','Institucional/empresarial',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('769d00b8-6020-4cb7-9e6a-4b6b2c92ea12','Assédio moral',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('93a998be-73ba-45e7-a076-0c9dbd74f2b5','Assédio sexual',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('cdd44e6c-3777-4662-a61b-4ead2cbbbc70','Autoritarismo',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('44d1354c-278e-4cb3-a72f-413b42a8beb3','Agressão cibernética',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ca5f383e-ade6-4118-8610-858e5c8c5806','Ataques nas redes sociais',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6f84b05c-a204-4e3c-95db-e0f5317999ac','Gravações não consensuais',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('eddf9b64-2872-4549-8293-eee77892cf1b','Publicações difamatórias',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('814d50aa-252b-4b6b-aa88-7fa83c417993','Importunação sexual',false,false,'3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('349843ed-6d8b-4f88-8674-753fee1f22fb','Descrição da violência','3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','PLAIN_TEXT');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('a4cf1db8-9d8a-496d-9998-0e04ae37d77e','Vínculo com o Agressor (a)','3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('d57177c2-3cba-492c-bc2c-67be191a6033','Companheiro',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('802b7035-2a0c-4164-ad79-6e3e030b3bda','Companheira',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('78dd5cd7-40ba-497f-898a-09bfa9dc7f71','Namorado',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('77399d62-fb08-4997-9989-413231d73aa2','Namorada',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('040fb23e-24d8-48e3-9d2a-4ce283aa9582','Ex companheiro',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ff1e7456-a8db-4b72-b7a4-a2cae7dc541f','Ex companheiro',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('9571c465-0fc0-40fb-b2be-fdd5924688ad','Ex namorado',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('814ac872-abe3-495f-984e-d79bdd26c1ac','Ex namorada',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('abf9b52c-3653-4197-9fbf-ccb89cc50d4d','Empregador',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c173810d-4226-4ddf-8d72-9d1adbd0af5f','Pai',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('8d7c6b39-b177-44f3-bd32-28eb637daaf1','Mãe',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('9c564152-c499-48bf-a0a0-d3e94ccd9c41','Filho',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f5032f26-9348-43ff-acf3-b27890e5fbd1','Filha',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('5a1d047a-723d-406d-89ca-5b5e479327f2','Irmão',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('4d558bcf-1646-431a-ae98-181a51a976a5','Irmã',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d4ecd4ba-3f31-43c7-9be4-fbb800c874cd','Padrastro',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d95d569c-7ba9-4338-acbc-6b1bf8d10d36','Madrasta',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('bd8748fa-c153-4a31-980e-e76e08297c0f','Sem vínculo',false,false,'a4cf1db8-9d8a-496d-9998-0e04ae37d77e','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('cdd7e65a-3300-497a-a4f3-897ed748b980','Ocorreu outras vezes','3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('e40068a1-515c-4932-8942-f2dfcd64fb40','Não',false,false,'cdd7e65a-3300-497a-a4f3-897ed748b980','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('393182cf-4a7c-4c69-b409-a3811c7e9acf','Sim',false,false,'cdd7e65a-3300-497a-a4f3-897ed748b980','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('034c7c6e-c0cb-49fd-b47d-18a36af49ee5','Com o mesmo agressor','3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('d7bcdb1a-efbc-4426-bb70-5ffc98890243','Não',false,false,'034c7c6e-c0cb-49fd-b47d-18a36af49ee5','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('58bba617-4537-4ba3-8f59-4f569d69fdfe','Sim',false,false,'034c7c6e-c0cb-49fd-b47d-18a36af49ee5','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('ee0d619b-f4b7-403f-9cf5-f23011fdfe39','Local de ocorrência','3dabb6e9-0c84-4f08-99c6-9fb5716f1bfc','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('bb835b75-666f-4c1b-855e-5b890ee7425a','Residência',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('1d2afc84-357a-4741-8647-1355d77289bb','Trabalho',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('e38add2b-2084-40db-a433-fa4193cc1e88','Via pública',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6377ced0-1b36-43c6-9966-0d732d3a44ad','Escola',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a913e1d4-1848-40f7-b7fd-acd2bdf408fc','Hospitais',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('7661f2e7-0347-48f1-8577-47bed1baab80','Habitação coletiva',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d98dc445-129a-4ad6-a6e1-1cbb2e6598eb','Bar ou similares',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('ae89f813-ceaf-4f39-91d6-0bd50e881b42','Comércio/serviços',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('eef2eeec-c0c2-4735-8c6d-f8849c30f92b','Indústrias/construção',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a201dd30-613f-47bb-8951-056955048bba','Local de prática esportiva',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f8482d87-7759-435f-91a1-deeaad823b09','Sistema prisional',false,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d0cbdeb0-9756-4d37-8259-62fec2e069ae','Outros',true,false,'ee0d619b-f4b7-403f-9cf5-f23011fdfe39','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('2367b912-939a-4724-98cc-08ba2297f744','COMPOSIÇÃO FAMILIAR','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE', 6);

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('9e333d8e-cc8b-4340-a965-2008f8f7257b','Total da renda familiar','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('6f521520-e319-4e7c-875e-431e28d96c80','Menos de 1 salário mínimo',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('e8d94b35-aba5-4018-b5e8-aee6003ee842','1 salário mínimo',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2f8b1b32-c925-47e7-b814-5c7a711f4110','Até 2 salários mínimos',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('eacbc485-969f-4105-8700-01c2cadf3ba1','Até 3 salário mínimo',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('37662af2-468c-4787-8028-61d8c092df11','Até 4 salário mínimo',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('acdc1bfa-7991-4a35-95b9-a049a339ee05','Até  5 salários mínimos',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('0914daa7-5489-4dec-ab43-6eef35c0a82d','Acima de 5 salários mínimos',true,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('312eb765-85cb-4ee2-ab86-f64692b6567a','Ignorado',false,false,'9e333d8e-cc8b-4340-a965-2008f8f7257b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('3710a205-bd42-4d9c-98e5-c408bdcfe12d','Condições de moradia','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('4226bf9f-d752-4739-9a4d-8a0b09e53a22','Casa própria',false,false,'3710a205-bd42-4d9c-98e5-c408bdcfe12d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('4bce3b89-4e34-4b2d-8268-4f43856f2cde','Alugada',false,false,'3710a205-bd42-4d9c-98e5-c408bdcfe12d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('68fb2cca-736e-42dc-960a-259ef2343c50','Cedida',false,false,'3710a205-bd42-4d9c-98e5-c408bdcfe12d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('7e59c8ac-3c89-4023-ab09-614cc87315cf','Outros',true,false,'3710a205-bd42-4d9c-98e5-c408bdcfe12d','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('39258ff9-a000-4b5c-bbd6-56c7f78394a0','Tipo de construção','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('43493500-b03e-4331-8fe9-0ceef036d2c8','Alvenaria',false,false,'39258ff9-a000-4b5c-bbd6-56c7f78394a0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('98c43d93-e60f-464b-883b-e35752e34a49','Madeira',false,false,'39258ff9-a000-4b5c-bbd6-56c7f78394a0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6d73d088-2990-4cc2-9397-a62b0fe18f5f','Mista',false,false,'39258ff9-a000-4b5c-bbd6-56c7f78394a0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6ae288f2-1b00-4ba7-9669-340338f1bfbe','Outros',true,false,'39258ff9-a000-4b5c-bbd6-56c7f78394a0','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('60ded63a-8594-48c1-a31e-dbe3c8037c9a','Destinação de lixo','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('673ab2e7-3b35-4772-8ffa-9f35b9f165c5','Coletado',false,false,'60ded63a-8594-48c1-a31e-dbe3c8037c9a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c0c5f446-5231-4a95-8723-c3e31f7925c9','Queimado',false,false,'60ded63a-8594-48c1-a31e-dbe3c8037c9a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f193301e-f3fd-4fb2-8839-28aebb1992ee','Enterrado',false,false,'60ded63a-8594-48c1-a31e-dbe3c8037c9a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2946bc2d-6bc3-455e-9d3d-9ab70818dd39','Reciclagem',false,false,'60ded63a-8594-48c1-a31e-dbe3c8037c9a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('383542d0-7e9b-49e1-9f99-ed3064bad13f','Outros',true,false,'60ded63a-8594-48c1-a31e-dbe3c8037c9a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('75bf0951-9cb7-40b9-b477-f8bbbb6d050a','Iluminação','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('12dfa0a5-4b91-448b-a2fd-77ca5aa3f64d','Companhia elétrica/CEA equatorial',false,false,'75bf0951-9cb7-40b9-b477-f8bbbb6d050a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('cad90f83-4b4b-42b7-aa51-e6747ffca2c2','Clandestino',false,false,'75bf0951-9cb7-40b9-b477-f8bbbb6d050a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('32b4d6d1-cd06-4f25-8df5-74a90b008611','Outros',true,false,'75bf0951-9cb7-40b9-b477-f8bbbb6d050a','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('8c8703f3-eb5f-4a61-9552-ccf1bec6da24','Abastecimento de água','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('837e2cc9-0ad0-4a7e-8cfa-edf7cf1969e1','Caesa',false,false,'8c8703f3-eb5f-4a61-9552-ccf1bec6da24','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('aa981290-e9c4-4e1a-a04a-ca7dfb6733dc','CSA',false,false,'8c8703f3-eb5f-4a61-9552-ccf1bec6da24','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a4aa9e96-d2be-4d69-96ba-acd79ad31851','Poço artesiano',false,false,'8c8703f3-eb5f-4a61-9552-ccf1bec6da24','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('2f16f526-5e7d-48fe-b997-1a48f6b5a2ac','Poço amazonas',false,false,'8c8703f3-eb5f-4a61-9552-ccf1bec6da24','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('63319b3d-7e33-46cc-a4fa-27e3d03d1119','Outros',true,false,'8c8703f3-eb5f-4a61-9552-ccf1bec6da24','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('1b7b2dfa-9072-4f0c-bc59-292fa741909b','Esgotamento sanitário','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('c72e19f6-dc2a-422c-b641-232c09ffa57d','CSA',false,false,'1b7b2dfa-9072-4f0c-bc59-292fa741909b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('e4c166bb-f2d0-4a4f-9538-721365920228','Fossa séptica',false,false,'1b7b2dfa-9072-4f0c-bc59-292fa741909b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('7113e30c-0666-4736-b29f-745e923d3041','Fossa céu aberto',false,false,'1b7b2dfa-9072-4f0c-bc59-292fa741909b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('b9912d59-2901-44ec-95e6-b1a2ab8607a8','Fossa seca',false,false,'1b7b2dfa-9072-4f0c-bc59-292fa741909b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c5a707c8-cc28-4d85-828a-1a66e45c59a8','Outros',true,false,'1b7b2dfa-9072-4f0c-bc59-292fa741909b','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('11bc1a14-4802-4ab9-9d9b-b858718ff2f3','Terreno','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('d04a8742-9027-4f7c-9651-222fbf5693df','Alagado',false,false,'11bc1a14-4802-4ab9-9d9b-b858718ff2f3','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f3ebf897-8ace-443e-b2ce-c51a4a4818b0','Aterrado firme',false,false,'11bc1a14-4802-4ab9-9d9b-b858718ff2f3','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('25a12aa7-8fb5-4cc3-a7ea-a26cd558e5e0','Invasão',false,false,'11bc1a14-4802-4ab9-9d9b-b858718ff2f3','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('8104a970-82dd-4b5b-b27a-fb4975653766','Assentamento',false,false,'11bc1a14-4802-4ab9-9d9b-b858718ff2f3','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('70f56f63-e673-462f-90b5-88dfb2132f9e','Outros',true,false,'11bc1a14-4802-4ab9-9d9b-b858718ff2f3','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('e0beec2d-d6cf-4ae8-9b09-86647802df95','Participa de programa de assistência','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('9d3066eb-9fca-4a03-aecc-f2f57d426aa0','Não',false,false,'e0beec2d-d6cf-4ae8-9b09-86647802df95','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c92ab290-068d-4c95-8d9d-9e2218c5c14a','Sim, qual?',true,false,'e0beec2d-d6cf-4ae8-9b09-86647802df95','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('180fa189-2ed0-469a-85aa-c33d1d09b4d5','Pessoa com Deficiência','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('dc716aab-91c6-401c-9fb0-3b8b9c21d776','Não',false,false,'180fa189-2ed0-469a-85aa-c33d1d09b4d5','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('1fc27d82-6516-4801-9ad7-a2cee8fd95bd','Sim, qual?',true,false,'180fa189-2ed0-469a-85aa-c33d1d09b4d5','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('5a46aa57-b81a-4350-8496-1ae0632bfa99','Recebe benefício','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('4b5d4737-0e78-4871-9318-84f91b23593b','Não',false,false,'5a46aa57-b81a-4350-8496-1ae0632bfa99','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('49293b24-45f2-4609-8a7d-484057a6656a','Sim, qual?',true,false,'5a46aa57-b81a-4350-8496-1ae0632bfa99','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","parent_id","created_at","updated_at","form_id","type")
VALUES ('c7d209cb-8c35-441c-b5c2-5f1036eb6b64','Mapeamento de risco social básico','2367b912-939a-4724-98cc-08ba2297f744','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE');

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('db23ba11-649c-4310-8309-2ea36f5559be','Apenado',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('b4719ec7-21b0-4284-a3dc-f2969bf12985','Apenada',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('28e95a84-b4d3-4735-aca1-73f958658e78','Egresso do sistema prisional',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('a7a423ba-3f50-4e4d-847d-2dc451129810','Egressa do sistema prisional',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('b635973d-b56c-48ce-b695-5c0845ce6f40','Menores em conflito com a lei',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('f4718785-25fc-4da9-a9af-817694222291','Dependente de drogas',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('55f9db70-6024-4beb-8439-8c317ea97fe2','Alcoolismo',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('6d29ae7d-78b4-4740-9545-676d4370c224','Tabagismo',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c812fa13-6905-4ba8-9d2d-314f38b0ee45','Morador de rua',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('20819188-6c55-4565-a4c4-a7575ec2dfb5','Moradora de rua',false,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('71f09254-7ed2-482d-a2fe-1f204d9fe5dc','Outros',true,false,'c7d209cb-8c35-441c-b5c2-5f1036eb6b64','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('cdcb4a75-4019-494b-bdec-0589f0a150b9','BREVE RELATO DA SITUAÇÃO','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','PLAIN_TEXT', 7);

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','ATENDIMENTO MULTIPROFISSIONAL','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','OBJECTIVE', 8);

INSERT INTO "public"."answers" ("id","content","has_content","is_default","question_id","created_at","updated_at")
VALUES
('b57f59f0-7c8f-44de-8123-b94b744417cc','Assistente social',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d73522bf-0b9d-4da2-a7a7-fc3c8327ea15','Psicóloga',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('d702e9b8-6329-41ba-b233-5485143b7b31','Assistente jurídico',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('1c841b34-37be-4bfa-a533-8ad96a794525','Enfermeiro',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('66856786-7c56-46ab-a137-1efea6b6b471','Fonoaudióloga',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('c2140985-89a7-41a0-8580-4181a3b6fe27','Fisioterapeuta',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('930bd757-4b78-42f3-b394-5c9a8adb4da2','Pedagoga/Oficinais',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC'),
('546371ef-660e-42f0-b303-1221f3dae83f','Sociólogo',false,false,'f7ad96e7-b5bd-4b76-bf15-e71a009bdf86','2024-01-30 16:12:23.784 UTC','2024-01-30 16:12:23.784 UTC');

-- InsertSubQuestions

INSERT INTO "public"."questions" ("id","content","created_at","updated_at","form_id","type", "order")
VALUES ('0b13dfe0-ec1d-4a28-8002-9fd23405d052','ENCAMINHAMENTO PARA REDE DE ATENDIMENTO A MULHER – RAM','2024-01-30 17:07:56.161 UTC','2024-01-30 17:07:56.161 UTC','e3728c43-98c9-4ff3-a6be-7feeba7a5702','PLAIN_TEXT', 9);
