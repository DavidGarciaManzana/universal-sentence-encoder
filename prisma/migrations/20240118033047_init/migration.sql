-- CreateTable
CREATE TABLE "country" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "key" VARCHAR,

    CONSTRAINT "country_pkey" PRIMARY KEY ("id")
);
