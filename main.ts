input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1825; index++) {
        valor_dado += randint(0, 6)
        cantidad_agua = cantidad_agua + valor_dado
        if (cantidad_agua <= 2) {
            dias += 1
        }
        basic.showNumber(cantidad_agua)
        promedio += cantidad_agua / 1825
        basic.showNumber(promedio)
        basic.showNumber(dias)
    }
})
let dias = 0
let promedio = 0
let valor_dado = 0
let cantidad_agua = 0
cantidad_agua = 0
valor_dado = 0
promedio = 0
dias = 0
