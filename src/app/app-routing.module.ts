import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { MessagesResolver } from './resolvers/messages.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: {messages: MessagesResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
