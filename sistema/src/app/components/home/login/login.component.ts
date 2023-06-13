import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';

import { LoginRequest } from 'src/app/models/requests/login.request.models';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private loginService: LoginService,
    private spinnerService: NgxSpinnerService,
    private authenticationHelper: AuthenticationHelper
  ){    
  }

  formLogin = new FormGroup({
    
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,      
    ]),
    
  });



  get form(): any {
    return this.formLogin.controls;
  }


  onSubmit() : void {

    this.spinnerService.show();

    let loginRequest: LoginRequest = {      
      email: this.formLogin.value.email as string,
      password: this.formLogin.value.password as string, 
    }
    
    this.loginService.post(loginRequest)
      .subscribe({
        next: (response) => {                      
          this.authenticationHelper.singIn(response);
          window.location.href = '/dashboard'        
        },
        error: (e) => {          
          this.mensagemErro = 'Acesso não autorizado!'
        }
      }).add(() => {
        this.spinnerService.hide();
      });

    
  }


}

