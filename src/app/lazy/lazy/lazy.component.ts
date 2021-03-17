import { Component, OnInit } from '@angular/core';

import { ToastComponent } from './../../components/toast/toast.component';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(
    private toast: ToastComponent
  ) { }

  ngOnInit(): void {
  }


  openToast(){
    this.toast.openToast('success','Email enviado');
  }
}
