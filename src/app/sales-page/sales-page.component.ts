import { Component,  OnInit,  } from '@angular/core';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.scss']
})
export class SalesPageComponent implements OnInit {

  typeWritterList = ['Facebook ads', 'Instagram stories', 'YouTube ads', 'Marketing videos', 'Real estate videos', 'Product videos', 'Video listicles', 'Inspirational videos', 'Event promos', 'HR videos', 'Holiday offers', 'Product tutorials'];
  
  showNavigationArrows = false;
  showNavigationIndicators = false; 

  
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  

  constructor() { }

  ngOnInit(): void {
  }
   
 

  
}
