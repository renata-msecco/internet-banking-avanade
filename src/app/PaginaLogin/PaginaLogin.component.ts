import { Component, OnInit } from '@angular/core';

export class User {
  public cpf: string;
  public password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './PaginaLogin.component.html',
  styleUrls: ['./PaginaLogin.component.css']
})

export class PaginaLoginComponent implements OnInit {
text = 'text';
password = 'password';
placeholderCpf = 'Digite o seu CPF...';
placeholderSenha = 'Digite sua senha...';
classInput = 'input';
submit = 'submit';
titleButton = 'Entrar';
classButton = 'button';
classFooter = 'buttonFooter';
nameFooter = 'Sair';
logo = ['../../assets/image/logo.png'];
nameInputCPF = 'nameInputCPF';
nameInputSenha = 'nameInputSenha';
nameButton = 'nameButton';
valorCPF = '';
valorSenha = '';

  model = new User();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form) {
    console.log(form.value);
  }

  getCPF($event){
    this.valorCPF = $event.target.value;
    return this.valorCPF;
  }

  getSenha($event){
    this.valorSenha = $event.target.value;
    return this.valorSenha;
  }

  autenticacaoDoUsuario(){
    console.log('clicou', this.valorCPF, this.valorSenha);
  }
}


