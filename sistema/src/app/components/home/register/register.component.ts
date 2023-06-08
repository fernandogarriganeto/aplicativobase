import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CriarContaRequest } from 'src/app/models/requests/criar-conta.request.models';
import { CriarContaService } from 'src/app/services/criar-conta.service';
import { MatchPasswordValidator } from 'src/app/validators/matchpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private criarContaService: CriarContaService
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

    let criarContaRequest: CriarContaRequest = {
      name: this.formRegister.value.name as string,
      email: this.formRegister.value.email as string,
      password: this.formRegister.value.password as string, 
    }
    
    this.criarContaService.post(criarContaRequest)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (e) => {
          console.log(e.error);
        }
      });

    
  }


}
