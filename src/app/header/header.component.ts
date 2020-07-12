import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  counter = 0;
  isHighlight = false;
  fontSize = 30;

  // _keyword = '';
  // @Input() set keyword(value) {
  //   this._keyword = value;
  // }

  // get keyword(){
  //   return this._keyword;
  // }

  @Input() keyword = '';
  @Output() keywordChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
  }

  buttonClick(event: MouseEvent) {
    console.log('test');
    // if(event.altKey) {
    // this.counter += 1;
    this.counter = +this.counter + 1;
    // }
    console.log(event);
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;

    this.keywordChange.emit(this.keyword);
  }

  keywordInput(event: InputEvent) {
    // console.log(event);
    this.counter = +(event.target as HTMLInputElement).value;
    // console.log(event.target );
  }
}
