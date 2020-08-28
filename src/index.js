import Client from './classes/Client/Client'
import ContaCorrente from './classes/ContaCorrente/ContaCorrente'
import { getClients } from './services/client-service'
import ClienteHelper from './classes/ClienteHelper/ClienteHelper'


let clients = ClienteHelper.clientsFromData(getClients())
ClienteHelper.printClients(clients)


console.log("Testes: ...")

console.log(clients)

console.log("Instance of Client: ", clients[0] instanceof Client)

console.log("Conta corrente: ", clients[1].getContaCorrente())
console.log("Instance of ContaCorrente: ", clients[0].contaCorrente instanceof ContaCorrente)

console.log("clienteID: ", clients[0].getClienteID())
console.log("conta ID: ", clients[0].getContaCorrente().getID())
console.log("Nome cliente: ", clients[0].getClienteNome())
console.log("Email cliente: ", clients[0].getClienteEmail())
console.log("Email cpf: ", clients[0].getClienteCPF())
console.log("Email conta poupança: ", clients[0].getContaPoupanca())
