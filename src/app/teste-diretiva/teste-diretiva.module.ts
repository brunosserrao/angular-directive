import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteDiretivaRoutingModule } from './teste-diretiva-routing.module';
import { TesteDiretivaComponent } from './components/teste-diretiva/teste-diretiva.component';
import { DiretiaEmitirDirective } from './directives/diretia-emitir.directive';


@NgModule({
  declarations: [TesteDiretivaComponent, DiretiaEmitirDirective],
  imports: [
    CommonModule,
    TesteDiretivaRoutingModule
  ]
})
export class TesteDiretivaModule { }
