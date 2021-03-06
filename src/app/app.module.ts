import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesPageComponent } from './sales-page/sales-page.component';
import { FiverrComponent } from './fiverr/fiverr.component';
import { TestComponent } from './test/test.component';
import { NaveBarComponent } from './nave-bar/nave-bar.component';
import { TestimonialSliderComponent } from './testimonial-slider/testimonial-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuBigComponent } from './menu-big/menu-big.component';
import { VideoTestComponent } from './video-test/video-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPageComponent,
    FiverrComponent,
    TestComponent,
    NaveBarComponent,
    TestimonialSliderComponent,
    MenuBigComponent,
    VideoTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
