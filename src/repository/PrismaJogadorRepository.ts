import { Equipe, PrismaClient } from "@prisma/client";


export class JogadorRepo {

    prisma = new PrismaClient()

    async create(idade: number, nome: string, numeroCamisa: number, posicao: string, equipe: Equipe) {
    }


}

