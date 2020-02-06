import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayContent = true;
  clickCount = 0;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDisplay() {
    this.displayContent = !this.displayContent;
    this.clickCount += 1
    this.clicks.push(this.clickCount)
  }

}
