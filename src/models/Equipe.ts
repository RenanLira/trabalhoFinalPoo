import { Jogador } from "./Jogador";
import { Profissional } from "./Profissional";
import {Campeonato} from "./Campeonato";



export class Equipe {

    private _golsPro: number = 0
    private _golsContra: number = 0

    constructor(
        private _id: string,
        private _nomeEquipe: string,
        private _participantes: Profissional[]
    ){}


    /*public golMarcado(idEquipeAdversaria: string, jogador?: Jogador) : number {
        
        let equipeGolSofrido
        let golJogador
        this._golsPro = this._golsPro + 1
        jogador?.golJogador()
        equipeGolSofrido = busca


        // adicionar gol para o jogador e contabilizar com o total de gols da equipe
        // adicionar golContra para a equipe adversaria
        // em caso de gol contra apenas não sera contabilizado gol para nenhum jogador

        return this._golsPro
    }*/

    public golLevado():void{
        this._golsContra = this._golsContra + 1
    }

    public golFeito():void{
        this._golsPro = this._golsPro + 1
    }


    // metodos gets
    
    public get nomeEquipe() : string {

        return this._nomeEquipe
    }

    public get id() : string {

        return this._id
    }

    public get participantes(){
        return this._participantes
    }

    public get golsPro(){
        return this._golsPro
    }
    
    public get golsContra(){
        return this._golsContra
    }
}