import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  tiles: Tile[] = [
    {text: 'One', cols: 7, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 5, rows: 1, color: 'lightgreen'}
  ];
  ngOnInit(): void {
  }

}
