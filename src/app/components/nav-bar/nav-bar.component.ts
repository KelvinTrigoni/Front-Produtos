import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  tela: string;

  constructor() { }

  ngOnInit(): void {
    this.montaString(window.document.URL.split('/')[3]);
  }

  montaString(local){
    if(local != ''){
      this.tela = local;
    }else{
      this.tela = 'Home';
    }
  }
}
