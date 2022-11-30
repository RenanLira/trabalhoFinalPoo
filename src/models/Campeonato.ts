import { Equipe } from "./Equipe"

export class Campeonato {

    private _equipes: Equipe[] = []
    private _chaveamento: Equipe[][] = []

    constructor(
        private _nome: string,
    ){}

    public adicionarEquipe(equipe: Equipe) : Equipe[] {

        // a equipe deve ter no maximo 11 profissionais
        // minimo 5 jogadores
        // 1 tecnico por equipe


        return this._equipes

    }

    public gerarChaveamento() : void {
        // deve-se respeitar a progressão geometrica de razão = 2
    }

    public eliminarEquipe(equipe: Equipe) : void {

        // eliminar uma equipe que perdeu o jogo
        // não deve ser excluida do BD apenas desvinculada do chaveamento


    }

    
    public get nome() : string {
        return this._nome
    }
    
    public get equipes() : Equipe[] {
        return this._equipes
    }
    public get faseAtual() : Equipe[][] {

        return this._chaveamento
    }
    
    


}