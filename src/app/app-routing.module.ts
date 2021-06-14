import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from './components/indice/indice.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'indice' , component: IndiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
