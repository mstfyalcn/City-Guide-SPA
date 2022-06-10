import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'City-Guide-SPA';



}

const year=2022;
const month =1
const date = 29
const dateObj= new Date(year, month, date)

console.log(dateObj + "aaaaaaaaaaaa")

