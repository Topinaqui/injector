
class Movimentacao {
    operacao = ""
    custo = 0
    action = ""

    getOperacao() {
      return this.operacao
    }

    setOperacao(operacao) {
      this.operacao = operacao
    }

    getCusto() {
      return this.custo
    }

    setCusto(custo) {
      this.custo = custo
    }

    getAction() {
      return this.action
    }

    setAction(action) {
      this.action = action
    }

    toString() {
      let string = `[
        operacao: ${this.getOperacao()}
        custo: ${this.getCusto()}
        action: ${this.getAction()}

      ]`

      return string
    }
}

export default Movimentacao
