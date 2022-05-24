import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-big',
  templateUrl: './menu-big.component.html',
  styleUrls: ['./menu-big.component.scss']
})
export class MenuBigComponent implements OnInit {

  typeWritterList = ['Facebook ads', 'Instagram stories', 'YouTube ads', 'Marketing videos', 'Real estate videos', 'Product videos', 'Video listicles', 'Inspirational videos', 'Event promos', 'HR videos', 'Holiday offers', 'Product tutorials'];
  
  showNavigationArrows = false;
  showNavigationIndicators = false; 
  currentRate = 4.5;
  
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
