import { Profissional } from "./Profissional"

export enum posicao {
    LINHA,
    GOLEIRO,
}

export class Jogador extends Profissional{


    private _golsFeitos: number = 0

    constructor(
        _nomePessoa: string,
        _idade: number,
        private _numeroCamisa: number,
        private _posicao: posicao,


    ){
        super(_nomePessoa, _idade,)
    }



    public golJogador(){
        this._golsFeitos = this._golsFeitos + 1
    }

    
    public get numeroCamisa() : number {
        return this._numeroCamisa
    }

    public get golsFeitos() : number {
        return this._golsFeitos
    }
    
    public get posicao() : posicao {

        return this._posicao
    }
    
    

}