import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { SearchMemberComponent } from './search-member/search-member.component';

const routes: Routes = [
  { path: 'create-member', component: CreateMemberComponent },
  { path: 'search-member', component: SearchMemberComponent },
  { path: '', redirectTo: '/create-member', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
