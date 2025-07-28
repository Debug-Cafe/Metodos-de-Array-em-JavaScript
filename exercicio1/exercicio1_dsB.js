function combinarArrays(...arrays) {
  return arrays.flat();
}

const timesPaulistas = ['Corinthians', 'Palmeiras'];
const timesCariocas = ['Flamengo', 'Botafogo'];
const timesGaúchos = ['Grêmio', 'Internacional'];

const todosOsTimes = combinarArrays(timesPaulistas, timesCariocas, timesGaúchos);

console.log(todosOsTimes);
