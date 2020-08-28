import Client from '../src/classes/Client/Client'
import ContaCorrente from '../src/classes/ContaCorrente/ContaCorrente'
import { getClients } from '../src/services/client-service'
import ClienteHelper from '../src/classes/ClienteHelper/ClienteHelper'

import assert from 'assert';


let clients = ClienteHelper.clientsFromData(getClients())


describe('Cliente build', function () {
  describe('Conta corrente do cliente', function () {
    it(' Deveria ser um objeto de ContaCorrente', function () {
      assert.equal(clients[0].getContaCorrente() instanceof ContaCorrente, true);
    });
  });
});
