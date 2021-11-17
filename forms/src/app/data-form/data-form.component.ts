import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  //formulario: FormGroup;
  userform: FormGroup | any;

  constructor(
      public formBuilder: FormBuilder,
      private httpClient: HttpClient
    ) { }

  ngOnInit(): void {

   /*  this.formulario = new FormGroup({
      nome: new FormControl(null).
      email: new FormControl(null)
    }); */

     this.userform = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]]
    });

  //  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
  //, Validators.minLength(3), Validators.MaxLength(20)]
  }

    get getControl(){
      return this.userform.controls;
  }

    onSubmit() {
      console.log(this.userform);

       this.httpClient.post('https://httpbin.org/post', JSON.stringify(this.userform.value))
        .subscribe((dados : any ) => {

          console.log(dados);
          //this.limparCampos();

        },
        (error:any) => alert("ERRor"));

    }

    limparCampos() {
        this.userform.reset();
    }

    resetar() {
      this.limparCampos();
    }

    verificaValidtouched(campo: string){
      return !this.userform.get(campo).valid && this.userform.get(campo).touched;
      //return !campo.valid && campo.touched;
    }

    verificaEmailInvalido() {
        let campoEmail = this.userform.get('email');
        if(campoEmail.errors) {
          return campoEmail.errors['email'] && campoEmail.touched;
        }
    }

    aplicaCssErro(campo: string){
      return {
        'has-error': this.verificaValidtouched(campo),
        'has-feedback': this.verificaValidtouched(campo)
      }
    }


}
