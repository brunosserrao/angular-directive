import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDiretiaEmitir]'
})
export class DiretiaEmitirDirective implements OnInit {
  @Output() emitir: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.emitir.emit('alertar output');
  }

}
