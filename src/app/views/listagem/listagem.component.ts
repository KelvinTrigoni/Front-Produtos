import { Component, OnInit } from '@angular/core';
import _ from 'underscore';

import { ToastComponent } from '../../components/toast/toast.component';
import { ProdutosService } from './../../services/produto/produtos.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  constructor(
    private produtoService: ProdutosService,
    private toast: ToastComponent
  ) { }

  lista: Array<any>;
  load: boolean = false;
  listaVazia: boolean = false;

  ngOnInit(): void {
    this.produtoService.getProdutos()
      .subscribe(suc => {
        if(!_.isEmpty(suc)){
          this.lista = suc;
        }else{
          this.listaVazia = true
        }        
      }, error => {
        console.error(error);
        this.toast.openToast('warning','Erro');
      });
  }

  excluir(id){
    this.load = true;
    this.produtoService.deleteProdutos(id)
      .subscribe(suc => {
        this.load = false;
        this.toast.openToast('success',suc.mensagem);
        this.ngOnInit();
      }, error => {
        this.load = false;
        console.error(error);
        this.toast.openToast('warning','Erro ao excluir produto.');
      });
  }

}
