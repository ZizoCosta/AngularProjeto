import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null//,
    /* endereco: {
        endereco: null,
        cep: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      } */

  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  onBtn(form:any) {
    console.log(form);
    //console.log(this.usuario);
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(form.value))
        //.map((res: any) => res)
        .subscribe((dados : any ) => {
          
          console.log(dados);
          form.form.reset();

          //this.resetDadosForm(form);

        });

  }

  verificaValidtouched(campo:any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo:any){
    return {
      'has-error': this.verificaValidtouched(campo),
      'has-feedback': this.verificaValidtouched(campo)
    }
  }

  ConsultaCEP(cep: any, form: any){
    //console.log(cep.target.value);
    var nro = cep.target.value;
    nro = nro.replace(/\D/g,'');

   if(nro!=''){
        var validacep = /^[0-9]{8}$/;

        this.resetDadosForm(form);

        if(validacep.test(nro)){
          this.httpClient.get(`//viacep.com.br/ws/${nro}/json/`)
            /* .map((dados: { json: () => any; }) => dados.json()) */
            .subscribe(dados => this.populaDadosForma(dados, form) ); //this.populaDadosForma(dados, form)
        }
    }
     /* else {

    } */

  }

  populaDadosForma(dados:any, formulario:any){
    /* formulario.setValue({
        nome: formulario.value.nome,
        email: formulario.value.email,
        endereco: {
          logradouro: dados.logradouro,
          cep: dados.cep,
          numero: null,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      }); */

      formulario.form.patchValue({
        endereco: {
          logradouro: dados.logradouro,
          cep: dados.cep,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });

      console.log(formulario);
  }

  resetDadosForm(formulario:any){
    formulario.form.patchValue({
      endereco: {
        logradouro: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
