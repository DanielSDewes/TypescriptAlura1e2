import { Negociacoes } from "../models/negocicacoes.js";
import { view } from "./view.js";

export class NegociacoesView extends view<Negociacoes> {  

    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thread>
                <tr>
                    <th>DATA></th>
                    <th>QUANTIDADE></th>
                    <th>VALOR></th>
                </tr>
            </thead>
        
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date) {
        return new Intl.DateTimeFormat().format(data)
    }
}