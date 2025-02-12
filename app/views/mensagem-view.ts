import { view } from "./view.js";

export class MensagemView extends view<string> { /* na hora de extender a class view, informar o tipo que vai implementar no lugar de T, no caso uma string */
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
}