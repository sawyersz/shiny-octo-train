import { Component } from '@angular/core';

export interface Card {
  title: string;
  image: string;
  body: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'Soy\'s Project';
  public cards:Card[] = [
    {title:'Routes', image: 'Routes Image', body:"Welcome to Routes"},
    {title:'Images', image: 'Generic Image', body:"Welcome to Images"},
    {title:'Code', image: 'Code Image', body:"Welcome to Code"},
    {title:'Author', image: 'Me Image', body:"About the Author"}
  ];

}
