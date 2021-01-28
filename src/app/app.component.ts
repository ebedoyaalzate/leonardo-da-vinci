import { Component, OnInit } from '@angular/core';
import DataBase from './dataBase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pictures = DataBase

  ngOnInit(): void {
    const leftImg = document.getElementById('left-img') as HTMLObjectElement;
    const title = document.getElementById('title') as HTMLObjectElement;

    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      leftImg.style.transform = `translateX(${scrollY * -0.9}px)`;
      title.style.transform = `translate3d(${scrollY * 0.5}px, ${scrollY * -0.8}px, 0)`;
    });

  }
}
