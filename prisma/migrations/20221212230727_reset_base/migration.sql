/*
  Warnings:

  - You are about to drop the column `profissionalId` on the `Jogador` table. All the data in the column will be lost.
  - You are about to drop the column `profissionalId` on the `Treinador` table. All the data in the column will be lost.
  - Added the required column `profissionalId` to the `Profissional` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Jogador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "gols" INTEGER NOT NULL,
    "numeroCamisa" INTEGER NOT NULL,
    "posicao" TEXT NOT NULL
);
INSERT INTO "new_Jogador" ("gols", "id", "idade", "nome", "numeroCamisa", "posicao") SELECT "gols", "id", "idade", "nome", "numeroCamisa", "posicao" FROM "Jogador";
DROP TABLE "Jogador";
ALTER TABLE "new_Jogador" RENAME TO "Jogador";
CREATE TABLE "new_Profissional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "profissionalId" TEXT NOT NULL,
    "equipeId" TEXT,
    CONSTRAINT "Profissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Treinador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Profissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Profissional_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Profissional" ("equipeId", "id") SELECT "equipeId", "id" FROM "Profissional";
DROP TABLE "Profissional";
ALTER TABLE "new_Profissional" RENAME TO "Profissional";
CREATE TABLE "new_Treinador" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "tatica" TEXT NOT NULL
);
INSERT INTO "new_Treinador" ("id", "idade", "nome", "tatica") SELECT "id", "idade", "nome", "tatica" FROM "Treinador";
DROP TABLE "Treinador";
ALTER TABLE "new_Treinador" RENAME TO "Treinador";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
