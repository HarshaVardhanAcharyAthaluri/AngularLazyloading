import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

{
 path:"inbox",
 loadChildren:"../app/inbox/inbox.module#InboxModule"
},
{
  path:"sent",
  loadChildren:"../app/sent/sent.module#SentModule"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
