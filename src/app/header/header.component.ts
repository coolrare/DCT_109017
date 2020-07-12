import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  counter = 0;
  keyword = '';

  constructor() {}

  ngOnInit(): void {}

  buttonClick(event: MouseEvent) {
    console.log('test');
    // if(event.altKey) {
    // this.counter += 1;
    this.counter = +this.counter + 1;
    // }
    console.log(event);
  }

  keywordInput(event: InputEvent){
    // console.log(event);
    this.counter = +(event.target as HTMLInputElement).value;
    // console.log(event.target );
  }

}
