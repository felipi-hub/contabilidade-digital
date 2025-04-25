import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients: Client[] = []; // Array para armazenar clientes

  constructor() {}

  addClient(client: Client) {
    this.clients.push(client); // Adiciona um cliente
  }

  getClients(): Client[] {
    return this.clients; // Retorna a lista de clientes
  }
}



