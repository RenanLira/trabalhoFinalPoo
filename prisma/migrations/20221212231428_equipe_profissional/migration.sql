/*
  Warnings:

  - You are about to drop the column `equipeId` on the `Profissional` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profissional" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "profissionalId" TEXT NOT NULL,
    CONSTRAINT "Profissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Treinador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Profissional_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Jogador" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Profissional_id_fkey" FOREIGN KEY ("id") REFERENCES "Equipe" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Profissional" ("id", "profissionalId") SELECT "id", "profissionalId" FROM "Profissional";
DROP TABLE "Profissional";
ALTER TABLE "new_Profissional" RENAME TO "Profissional";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
