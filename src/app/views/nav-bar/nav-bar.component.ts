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
    var words = local.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    this.tela = words.join(" ");
  }
}
