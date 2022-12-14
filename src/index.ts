import { Campeonato } from "./models/Campeonato"
import { Equipe } from "./models/Equipe"
import { Jogador, posicao } from "./models/Jogador"
import { tatica, Treinador } from "./models/Treinador"
import { JogadorRepo } from "./repository/PrismaJogadorRepository"







const jRepo = new JogadorRepo()

const equipe1 = new Equipe("2", 'Equipe1', [])

jRepo.create(19, "Renan", 10, "LINHA", {campeonatoId: null, golsContra: 0, golsPro: 0, nome: "Equipe1", id: null})