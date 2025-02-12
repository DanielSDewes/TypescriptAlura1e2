export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) 
    {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime()); // aplicando conceito de programação defensiva utilizando um clone do espaço de memória para q o get não permita altereção dos valores originais
        return data;
    }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao { /* todo método static é um método que eu posso chamar diretamente na classe, como Negociacao.criaDe */
        const exp = /-/g;
        const date = new Date(dateString.replace(exp,','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}