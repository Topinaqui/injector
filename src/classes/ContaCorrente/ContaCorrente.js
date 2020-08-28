import Movimentacao from '../Movimentacao/Movimentacao'


class ContaCorrente {
  id = ""
  saldo = 0
  oMovimentacoes = []

  set movimentacao(values) {
    let movs = []

    if (values.length) {
      for (const mov of values) {
        let newMov = Object.assign(new Movimentacao(), mov)

        movs.push(newMov)
      }
    }

    this.oMovimentacoes = movs
  }

  getID() {
    return this.id
  }

  setID(id) {
    this.id = id
  }

  getSaldo() {
    return this.saldo
  }

  getMovimentacao() {
    return this.oMovimentacoes
  }

  setMovimentacao(movimentacao) {
    this.movimentacoes = movimentacao
  }

  setSaldo(saldo) {
    this.saldo = saldo
  }

  toString() {
    let string = `[
      id: ${this.getID()}
      saldo: ${this.getSaldo()}
      movimentacoes: ${this.getMovimentacao()}
    ]`

    return string
  }

}

export default ContaCorrente
