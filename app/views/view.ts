export abstract class view<T> { 
    /* abstract class pode ter um ou mais métodos abstratos */
    /* <T> Esse tipo genérico indica que tem parâmetros de métodos que devem ser definidos na classe filha, e onde isso deve ser implementado, informar o T no tipo conforme abaixo */
    protected elemento: HTMLElement;
    private escapar = false;
    /* private = só é acessado no constructor do obj
        public = acessado em qualquer lugar
        protected = acessável pelo obj pai e pelos filhos em caso de implementação de herança
    */

    constructor(seletor: string, escapar?: boolean) { /* o ? torna o parâmetro opicional, se não for informado, é "undefined", mas não pode ter nenhum required depois dos opcionais */
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM!`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string; /* declarar o método assim faz com que a classe filha seja obrigada a implementar o mesmo */

    update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}