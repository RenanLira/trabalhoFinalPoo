import { Jogador } from "./Jogador";
import { Profissional } from "./Profissional";



export class Equipe {

    private _golsPro: number = 0
    private _golsContra: number = 0

    constructor(
        private _id: string,
        private _nomeEquipe: string,
        private _participantes: Profissional[]
    ){}


    public golMarcado(idEquipeAdversaria: string, jogador?: Jogador) : number {

        // adicionar gol para o jogador e contabilizar com o total de gols da equipe
        // adicionar golContra para a equipe adversaria
        // em caso de gol contra apenas não sera contabilizado gol para nenhum jogador

        return this._golsPro
    }

    // metodos gets
    
    public get nomeEquipe() : string {

        return this._nomeEquipe
    }

    public get id() : string {

        return this._id
    }
    

}