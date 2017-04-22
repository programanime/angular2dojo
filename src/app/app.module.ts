import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AppComponent } from './app.component';
import { BookService } from './services/book.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
