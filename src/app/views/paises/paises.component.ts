import { Component, OnInit } from '@angular/core';
import _ from 'underscore';

import { PaisesService } from './../../services/paises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any;
  filtro: any;

  constructor(
    public paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.paisesService.getPaises()
      .subscribe(suc => {
        this.paises = suc;
        this.filtro = suc;
      });
  }

  filtra(nome) {
    if (nome == '') {
      this.filtro = this.paises;
    } else {
      _.each(this.paises, value => {
        if (value.name.toUpperCase() == nome.toUpperCase()) {
          this.filtro = [value];
        }
      })
    }
  }

}
