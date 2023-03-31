function imprimirNumeros(x, y, z) {
  let numeros = []
  numeros.push(x, y, z)
  numeros.sort(function (a, b) { return a - b })
  console.log(`el menor es ${numeros[0]}, el mediano ${numeros[1]}, el grande ${numeros[2]}`)
}

imprimirNumeros(10, 2, -1)