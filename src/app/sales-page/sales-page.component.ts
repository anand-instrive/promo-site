import { Component,  OnInit,  } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.scss']
})
export class SalesPageComponent implements OnInit {

  typeWritterList = ['Facebook ads', 'Instagram stories', 'YouTube ads', 'Marketing videos', 'Real estate videos', 'Product videos', 'Video listicles', 'Inspirational videos', 'Event promos', 'HR videos', 'Holiday offers', 'Product tutorials'];
  
  showNavigationArrows = false;
  showNavigationIndicators = false; 
  currentRate = 4.5;
  
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }
   
 

  
}
