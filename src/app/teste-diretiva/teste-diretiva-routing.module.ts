import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteDiretivaComponent } from './components/teste-diretiva/teste-diretiva.component';


const routes: Routes = [{
  path: '',
  component: TesteDiretivaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteDiretivaRoutingModule { }
