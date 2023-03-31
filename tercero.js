function numeros(...data) {
  let par = []
  let impar = []
  let promedioPar, promedioImpar
  for (const arg of data) {
    if (arg % 2 == 0) {
      par.push(arg)
    } else {
      impar.push(arg)
    }
  }
  promedioPar = prom(par)
  promedioImpar = prom(impar)

  if (promedioPar > promedioImpar) {
    console.log(`el promedio mayor es el par: ${promedioPar} y el menor es el impar: ${promedioImpar}`)
  } else {
    console.log(`el promedio mayor es el impar: ${promedioImpar} y el mayor es el par: ${promedioPar}`)
  }

}


function prom(arr) {
  let total = 0;
  for (const arg of arr) {
    total += arg;
  }
  return total / arr.length;
}

numeros(1, 2, 3, 4, 6, 7, 4, 3, 645, 45, 3, 23, 57, 7, 8, 45, 236, 800, 23)
