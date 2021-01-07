import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-diretiva',
  templateUrl: './teste-diretiva.component.html',
  styleUrls: ['./teste-diretiva.component.scss']
})
export class TesteDiretivaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alertar(mensagem: string): void {
    alert(mensagem);
  }

}
