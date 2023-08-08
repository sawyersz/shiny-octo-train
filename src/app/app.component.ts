import { Component } from '@angular/core';

export interface Card {
  title: string;
  image: string;
  body: string
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = 'Soy\'s Project';
  public cards:Card[] = [
    {title:'Routes', image: 'images/route.jpeg', body:"Welcome to Routes", routerLink: "./route-library"},
    {title:'Images', image: 'images/treeline.jpeg', body:"Welcome to Images", routerLink: "./image-library"},
    {title:'Code', image: 'images/code.jpeg', body:"Welcome to Code", routerLink: "./code-library"},
    {title:'Author', image: 'images/author.jpeg', body:"About the Author", routerLink: "./author-library"}
  ];

}
