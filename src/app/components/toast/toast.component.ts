import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  constructor() { }
  
  msg: string;

  openToast(tipo, mensagem){
    const toast = document.getElementById('toast');
    toast.innerHTML = mensagem;
    toast.classList.add(tipo);
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.remove(tipo);
    }, 2000);
  }

}
