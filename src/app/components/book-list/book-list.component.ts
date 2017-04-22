import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'my-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookComponent implements OnInit {
  heading = 'Library';
  cash = 10000;
  cashDisponible = 10000;
  costoTotal=0;
  books: Book[];

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.bookService.getBooks()
      .then(books => this.books = books.slice(0, 5));
  }

  totalCost() {
    let sum = 0;
    this.books.forEach((book)=>{
        sum+=book.price;
    });
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.costoTotal;
  }

  buy(book) {
    if(book.isAvailable){
      if(this.costoTotal+book.price>this.cash){
        alert("El cash no es suficiente")
      }else{
        this.costoTotal+=book.price;
        this.cashDisponible =this.cash-this.costoTotal;
        book.isAvailable=false;
      }
    }else{
      alert("El libro no esta disponible");
    }
  }

  cancelBuy(book) {
    this.costoTotal-=book.price;
    book.isAvailable=true;
  }

}
