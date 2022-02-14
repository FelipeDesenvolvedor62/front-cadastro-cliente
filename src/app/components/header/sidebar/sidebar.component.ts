import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  items: MegaMenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cadastro',
        items: [
          [
            {
              label: '',
              items: [{ label: 'Cliente' }, { label: 'Produto' }],
            },
          ],
        ],
      },
    ];
  }
}
