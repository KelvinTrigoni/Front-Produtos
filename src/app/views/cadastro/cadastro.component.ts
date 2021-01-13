import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastComponent } from "../toast/toast.component";
import { ProdutosService } from './../../services/produto/produtos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  produto = new FormGroup({
    nome: new FormControl('', [
      Validators.required
    ]),
    descricao: new FormControl('', [
      Validators.required
    ]),
    preco: new FormControl('', [
      Validators.required
    ]),
    quantidade: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private toast: ToastComponent,
    private produtoService: ProdutosService
  ) { }

  ngOnInit(): void {
  }

  validaForm() {
    let msg: string = '';
    if(this.produto.status == 'INVALID'){
      if(this.produto.controls.nome.errors){
        msg += ' Nome '
      }

      if(this.produto.controls.descricao.errors){
        msg += ' Descrição '
      }

      if(this.produto.controls.preco.errors){
        msg += ' Preço '
      }

      if(this.produto.controls.quantidade.errors){
        msg += ' Quantidade '
      }
      
      this.toast.openToast('warning',`Preencha os campos.`);
    }else{
      this.cadastrar();
    }
  }

  cadastrar() {
    console.log(this.produto);
    this.produtoService.postProdutos(this.produto.value)
      .subscribe(suc => {
          this.toast.openToast('success',`Produto cadastrado com sucesso.`);
          this.produto.reset();
        },
        error => {
          console.error(error);
          this.toast.openToast('warning',`Erro ao cadastrar.`);
        });
  }

}
