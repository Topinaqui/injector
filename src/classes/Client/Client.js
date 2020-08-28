import ContaCorrente from "../ContaCorrente/ContaCorrente"


class Client {
  clienteID = ""
  clienteNome = ""
  clienteEmail = ""
  clienteCPF = "132.321.456-22"
  contaPoupanca = 1500.00

  oContaCorrente = new ContaCorrente()

  set contaCorrente(value) {

    if (value && typeof value === "object") {
      let newValue  = null
      newValue = Object.assign(new ContaCorrente(), value)
      this.oContaCorrente = newValue
    }
  }

  getContaCorrente() {
    return this.oContaCorrente
  }

  setContaCorrente(conta) {
    this.contaCorrente = conta
  }

  getClienteID() {
    return this.clienteID
  }

  setClienteID(clienteID) {
    this.clienteID = clienteID
  }

  getClienteNome() {
    return this.clienteNome
  }

  setClienteNome(clienteNome) {
    this.clienteNome = clienteNome
  }

  getClienteEmail() {
    return this.clienteEmail;
  }

  setClienteEmail(clienteEmail) {
    this.clienteEmail = clienteEmail;
  }

  getClienteCPF(clienteCPF) {
    return this.clienteCPF;
  }

  setClienteCPF(clienteCPF) {
    this.clienteCPF = clienteCPF;
  }

  getContaPoupanca() {
    return this.contaPoupanca
  }

  setContaPoupanca(contaPoupanca) {
    this.contaPoupanca = contaPoupanca
  }

  toString() {
    let string = `[
      id: ${this.getClienteID()}
      nome: ${this.getClienteNome()}
      CPF: ${this.getClienteCPF()}
      email: ${this.getClienteEmail()}
      conta poupanca: ${this.getContaPoupanca()}
      conta corrente: ${this.getContaCorrente().toString()}
    ]`

    return string
  }

}


// export default InjectableDecorator.decorate(Client)
export default Client
