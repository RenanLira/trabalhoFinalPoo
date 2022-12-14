
export abstract class Profissional {

    constructor(
        private _nomePessoa: string,
        private _idade: number,
        // private _equipePertencente: Equipe
    ){}


    public get nomePessoa() : string {
        return this._nomePessoa
    }

    
    public get idade() : number {
        return this._idade
    }

}