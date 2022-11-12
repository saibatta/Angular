import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-routing01',
  templateUrl: './routing01.component.html',
  styleUrls: ['./routing01.component.css'],
})
export class Routing01Component implements OnInit {
  constructor() {}

  @Input()
  ch_title=''

  @Output() changeTitle = new EventEmitter<string>();

  ngOnInit(): void {}
  onnButtonClick = (name: any) => {
    console.log('**onnButtonClick**', name);
    this.changeTitle.emit(name);
  };
}
