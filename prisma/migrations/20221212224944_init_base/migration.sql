-- CreateTable
CREATE TABLE "Equipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "golsPro" INTEGER DEFAULT 0,
    "golsContra" INTEGER DEFAULT 0,
    "campeonatoId" TEXT,
    CONSTRAINT "Equipe_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "Campeonato" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profissional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "equipeId" TEXT,
    CONSTRAINT "Profissional_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Treinador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "tatica" TEXT NOT NULL,
    "profissionalId" TEXT,
    CONSTRAINT "Treinador_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Jogador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "gols" INTEGER NOT NULL,
    "numeroCamisa" INTEGER NOT NULL,
    "posicao" TEXT NOT NULL,
    "profissionalId" TEXT,
    CONSTRAINT "Jogador_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Campeonato" (
    "id" TEXT NOT NULL PRIMARY KEY
);
