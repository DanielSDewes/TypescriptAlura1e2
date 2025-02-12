// comando para iniciar o server: npm run start

import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController;
const form = document.querySelector('.form');
if (form) { /* a form pode ser HTMLInputElement ou null, com esse if, eu garanto que só vou executar o código quando a form não estiver vazia e com isso o ts para de "reclamar" */
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique o seu form!')
}
/*
const negociacoesView = new NegociacoesView;
const template = negociacoesView.template();
console.log(template);
*/