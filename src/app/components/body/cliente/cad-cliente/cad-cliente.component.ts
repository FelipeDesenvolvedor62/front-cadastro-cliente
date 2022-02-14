import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.sass']
})
export class CadClienteComponent implements OnInit {

  model = new Cliente

  constructor() { }

  ngOnInit(): void {
  }

}
