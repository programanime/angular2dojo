import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  { path: 'book-list',  component: BookComponent },
  { path: 'book-detail/:id',  component: BookDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
