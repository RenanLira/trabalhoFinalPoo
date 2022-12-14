import { Equipe } from "./Equipe"
import { Treinador } from "./Treinador"
import { Profissional } from "./Profissional"
import { Jogador } from "./Jogador"
import { MaximoProfissionais, MinimoJogadores, TimeNaoExiste } from "../Execptions/ApplicationError"

export class Campeonato {

    private _equipes: Equipe[] = []
    private _chaveamento: Equipe[][] = []

    constructor(
        private _nome: string,
    ){}

    public adicionarEquipe(equipe: Equipe) {
        //Fazer exceção de apenas um técnico por time
        if(equipe.participantes.length > 11){
            throw new MaximoProfissionais("Maxido de profissionais na equipe excedido")
        }
        if(equipe.participantes.length < 5){
            throw new MinimoJogadores("É necessário no minimo 5 jogadores por time")
        }
        this._equipes.push(equipe)

        // a equipe deve ter no maximo 11 profissionais
        // minimo 5 jogadores
        // 1 tecnico por equipe


        //return this._equipes

    }

    public buscarEquipe(id:string) : Equipe {
        //Fazer excecção de equipe não encontrada
        const equipeProcurada = this._equipes.filter((equipe, index) => equipe.id === id)[0]

        if (!equipeProcurada) {
            throw new TimeNaoExiste('Esta equipe não existe')
        }

        return equipeProcurada;
    }


    public golMarcado(idEquipeMarcou: string, idEquipeSofreu:string, jogador?: Jogador) : void {
        
        let equipeMarcou = this.buscarEquipe(idEquipeMarcou)
        equipeMarcou.golFeito()
        let equipeSofreu = this.buscarEquipe(idEquipeSofreu)
        equipeSofreu.golLevado()

        if (jogador) {
            jogador?.golJogador()
        }

        // adicionar gol para o jogador e contabilizar com o total de gols da equipe
        // adicionar golContra para a equipe adversaria
        // em caso de gol contra apenas não sera contabilizado gol para nenhum jogador

        
    }

    public gerarChaveamento() : void {
        const equipesSorteadas = this._equipes.sort(() => Math.random() - 0.5)

        for (let i = 0; i < equipesSorteadas.length; i + 2) {

            this._chaveamento = [...this._chaveamento, equipesSorteadas.splice(i, i+2)]
        }


        
        
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