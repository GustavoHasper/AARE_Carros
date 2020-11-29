import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CarrosListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", marca: 'Ford', modelo: 'Fiesta Sedan', price: 32000, cor: 'Chumbo', placa: 'AAA-1111' },
      { sku: "2", marca: 'Toyota', modelo: 'Supra', price: 150000, cor: 'Vermelho', placa: 'AAA-2222' },
      { sku: "3", marca: 'Fiat', modelo: 'Uno Vivace', price: 18000, cor: 'Branco', placa: 'AAA-3333' },
      { sku: "4", marca: 'Hyundai', modelo: 'HB20', price: 50500, cor: 'Prata', placa: 'AAA-4444' },
      { sku: "5", marca: 'Renault', modelo: 'Logan', price: 35000, cor: 'Preto', placa: 'AAA-5555' }
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '5%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '20%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '20%',
      },
      placa: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '20%',
      },
      price: {
        title: 'Fipe',
        type: 'number',
        filter: true,
        width: '20%',
      },
      cor: {
        title: 'Cor',
        type: 'string',
        filter: true,
        width: '15%',
        
      },
    }
  };

}
