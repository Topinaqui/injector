import Client from './classes/Client/Client'
import ContaCorrente from './classes/ContaCorrente/ContaCorrente'
import { getClients } from './services/client-service'
import ClienteHelper from './classes/ClienteHelper/ClienteHelper'


let clients = ClienteHelper.clientsFromData(getClients())
ClienteHelper.printClients(clients)
