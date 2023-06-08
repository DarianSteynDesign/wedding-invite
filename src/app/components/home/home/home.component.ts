import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
