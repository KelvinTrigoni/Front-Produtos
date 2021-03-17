import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import _ from "underscore";

import { Produto } from './../../model/Produto.model';
import { ToastComponent } from "../../components/toast/toast.component";
import { ProdutosService } from '../../services/produto/produtos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  alter: boolean = false;

  produtoAlt: Produto;

  id: string;

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
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!_.isEmpty(this.route.snapshot.params)) {
      this.id = this.route.snapshot.params.id;
      this.alter = true;
      this.produtoService.getProdutosById(this.route.snapshot.params.id)
        .subscribe(suc => {
          console.log(suc);
          this.produtoAlt = suc;
          this.fillForm();
        }, error => {
          console.error(error);
          this.toast.openToast('warning', `Erro ao buscar dados.`);
        });
    }
  }

  fillForm() {
    this.produto.patchValue(this.produtoAlt);
  }

  validaForm() {
    this.produto.value.preco = String(this.produto.value.preco);
    let msg: string = '';
    if (this.produto.status == 'INVALID') {
      this.toast.openToast('warning', `Preencha os campos.`);
    } else {
      if(!this.alter){
        this.cadastrar();
      }else{
        this.alterar();
      }
    }
  }

  cadastrar() {
    this.produtoService.postProdutos(this.produto.value)
      .subscribe(suc => {
        this.toast.openToast('success', `Produto cadastrado com sucesso.`);
        this.produto.reset();
      }, error => {
        console.error(error);
        this.toast.openToast('warning', `Erro ao cadastrar.`);
      });
  }

  alterar() {
    let body: Produto = this.produto.value;
    body.id = this.id;
    this.produtoService.putProdutos(body)
      .subscribe(suc => {
        this.toast.openToast('success', `Produto alterado com sucesso.`);
        this.produto.reset();
        this.router.navigate(['/listagem']);
      }, error => {
        console.error(error);
        this.toast.openToast('warning', `Erro ao alterar.`);
      });
  }

}
