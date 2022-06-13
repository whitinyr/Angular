import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string =' http://cursosxemplo.com';
  cursoAngular:boolean = true;
  urlImagem = 'http://lorempixel.com.br/500/400/?1';
  urlImagem2 = 'http://lorempixel.com.br/500/400/?2';

  valorAtual: string ='';

  isMouseOver: boolean = false;

  nome: string = 'abc';
  nome2: string = '';

  pessoa:any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  onMudouValor(evento:any){
console.log(evento);
  }
  
  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado"');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
