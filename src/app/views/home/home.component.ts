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
    private toast: ToastComponent
  ) { }

  load: boolean = false;
  auth: string;

  ngOnInit(){
    if(this.authService.authJWT()){
      this.auth = 'já';
      this.toast.openToast('success','Autenticado');
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
        this.toast.openToast('success','autenticado');
        document.location.reload();
      }, error =>{
        console.log(error);
        this.load = false;
        this.toast.openToast('warning','erro ao autenticar');
      });
  }

  openToast(){
    this.toast.openToast('success','Olha o toast');
  }
}
