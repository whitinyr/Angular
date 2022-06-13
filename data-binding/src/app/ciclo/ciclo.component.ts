import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

 @ Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
   }

   ngOnChanges() {
    this.log('ngOnChanges');
   }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoChecked() {
    this.log('ngDoChecked');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
