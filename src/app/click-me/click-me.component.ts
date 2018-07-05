import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {
  message = '';
  values = '';
  input = ['Ram', 'Shyam'];

  constructor() {
  }

  ngOnInit() {
  }

  onClickMe() {
    this.message = 'Welcome to angular click event';
  }

  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement> event.target).value + ' | ';
  }

  onKeyUp(value: string) {
    this.values += value + '|';
  }

  onEnter(value: string) {
    this.values = value;
  }

  update(value: string) {
    if (value) {
      this.input.push(value);
    }
  }
}
