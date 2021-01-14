import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tost: ToastComponent
  ) { }

  load: boolean = false;
  auth: string;

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.auth = 'já';
    }else{
      this.auth = 'não';
    }
  }
  
  autenticar(){
    this.load = true;
    this.authService.autenticar()
      .subscribe(suc => {
        localStorage.setItem('token', suc.token);
        this.load = false;
        this.auth = 'já';
        this.tost.openToast('success','autenticado');
        document.location.reload();
      }, error =>{
        console.log(error);
        this.tost.openToast('warning','erro ao autenticar');
      });
  }
}
