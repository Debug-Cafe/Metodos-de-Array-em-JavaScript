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

function adicionarIsAdult(funcionario) {
  return {
    ...funcionario,
    isAdult: funcionario.idade >= 18
  };
}

const funcionarioComIsAdult = adicionarIsAdult(funcionario);

console.log(funcionarioComIsAdult);
