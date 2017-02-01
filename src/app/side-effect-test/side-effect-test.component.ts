import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-effect-test',
  templateUrl: './side-effect-test.component.html',
  styleUrls: ['./side-effect-test.component.css']
})
export class SideEffectTestComponent implements OnInit {
  timesContentRequested = 0;
  constructor() { }

  ngOnInit() {
  }

  getContent() {
    let content = this.buildContent();
    setTimeout(() => {
      this.timesContentRequested += 1;
    }, 1);
    return content;
  }

  buildContent() {
    return "yes";
  }

}
