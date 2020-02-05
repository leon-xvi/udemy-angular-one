import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmitUsername() {
    this.username = ''
  }

}
