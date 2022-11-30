import { Campeonato } from "./models/Campeonato"
import { Equipe } from "./models/Equipe"
import { Jogador, posicao } from "./models/Jogador"
import { tatica, Treinador } from "./models/Treinador"


const j1 = new Jogador('Renan', 19, 10, posicao.LINHA)
const treinador = new Treinador('Lira', 26, tatica.OFENSIVA)


const time1 = new Equipe('equipe1', [j1, treinador])

const campeonato = new Campeonato('Torneio Renan', [time1])

console.log(campeonato.equipes)