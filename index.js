function aplicarDescontoTeste() {
  return aplicarDesconto(10, 2)
}


function aplicarDesconto(valor, desconto) {
  if(desconto > valor) return 0
  return valor - desconto
}

function aplicarDescontoGrandeTest() {
  return aplicarDesconto(1, 10)
}

console.log('A aplicação de desconto GRANDE está funcionando? ')
console.log(aplicarDescontoGrandeTest())
console.log('OLÁ JEST')
console.log('A aplicação de desconto está funcionando?')
console.log('Resultado:', aplicarDescontoTeste())

module.exports = { aplicarDescontoTeste, aplicarDesconto }
