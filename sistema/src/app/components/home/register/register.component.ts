import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { CriarContaRequest } from 'src/app/models/requests/criar-conta.request.models';
import { CriarContaService } from 'src/app/services/criar-conta.service';
import { MatchPasswordValidator } from 'src/app/validators/matchpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private criarContaService: CriarContaService,
    private spinnerService: NgxSpinnerService
  ){    
  }

  formRegister = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-ZÀ-Üà-ü\s]{8,100}$/)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required
    ]),
  }, {
    validators: [
      MatchPasswordValidator.matchPassword
    ]
  });



  get form(): any {
    return this.formRegister.controls;
  }


  onSubmit() : void {

    this.spinnerService.show();

    let criarContaRequest: CriarContaRequest = {
      name: this.formRegister.value.name as string,
      email: this.formRegister.value.email as string,
      password: this.formRegister.value.password as string, 
    }
    
    this.criarContaService.post(criarContaRequest)
      .subscribe({
        next: (response) => {          
          this.mensagemSucesso = `Parabéns ${response.name}, você foi cadastrado(a) com sucesso.`;
          this.formRegister.reset();
        },
        error: (e) => {          
          this.mensagemSucesso = 'Erro ao cadastrar usuário!'
        }
      }).add(() => {
        this.spinnerService.hide();
      });

    
  }


}
