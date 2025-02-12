export enum DiaDaSemana {
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}
/* As enum começam de 0, porém, se modificarmos o valor de alguma das enum, os próximos valores passarão a contar a partir do novo valor. Conforme no exemplo abaixo onde d = 5.

enum teste {
    a,
    b = 3,
    c,
    d,
    f
}
*/