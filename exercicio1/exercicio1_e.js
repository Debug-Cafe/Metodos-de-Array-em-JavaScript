const dadosPessoais = {
  nome: 'Ana Silva',
  idade: 32
};

const dadosProfissionais = {
  cargo: 'Desenvolvedora Front-End',
  salario: 6500
};

const funcionario = {
  ...dadosPessoais,
  ...dadosProfissionais
};

console.log(funcionario);