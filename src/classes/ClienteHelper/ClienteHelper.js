import Client from '../Client/Client';

class ClientHelper {

  static clientsFromData(clientsData = []) {
    let clients = []

      for (const clientData of clientsData) {

        let client = Object.assign(new Client(), clientData)
        clients.push(client)
      }

      return clients
  }

  static printClients(clients = []) {
    for (const client of clients) {
      console.log(client.toString())
    }
  }
}

export default ClientHelper 

