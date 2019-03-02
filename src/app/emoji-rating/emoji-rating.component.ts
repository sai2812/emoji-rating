import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emoji-rating',
  templateUrl: './emoji-rating.component.html',
  styleUrls: ['./emoji-rating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmojiRatingComponent implements OnInit {

  @Input() rating: number;
  @Output() ratedValue = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  handleRate(event) {
    this.ratedValue.emit(event.value);
  }

}
