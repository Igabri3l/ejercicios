function main(...data) {
  let numeros = []
  let palindromos = []
  data.forEach((e) => {
    if (!isNaN(e))
      numeros.push(e)
  })

  numeros.forEach(e => {
    if (esPalindromo(e)) {
      palindromos.push(e)
    }
  });
  palindromos.sort(function (a, b) { return a - b })
  console.log(palindromos)
}

function esPalindromo(arr) {
  arr = arr.toString()
  const strReversed = arr.split("").reverse().join("");
  return strReversed === arr ? true : false;
}

main(65, 2, 3, 4, 6, 7, 4, 3, 645, 757, 88)