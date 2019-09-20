import {Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit} 
from '@angular/core';
import { SwiperComponent } from "angular2-useful-swiper";

@Component({
  selector: 'app-how-to-invest',
  templateUrl: './how-to-invest.component.html',
  styleUrls: ['./how-to-invest.component.css']
})
export class HowToInvestComponent implements AfterViewInit {
  @Input() dataset;
  @Input() fromHowToInvest;
  slideDatas;
  backgroundUrl;
  index;
  constructor() {}
  config: SwiperOptions = {
    autoplay: 3000,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30
    //initialSlide: 0
  };
  @ViewChild("usefulSwiper") public usefulSwiper: SwiperComponent;
  ngAfterViewInit() {
    if (this.dataset.acf) {
      this.slideDatas = this.dataset.acf.how_do_i_invest;
    } else {
      this.slideDatas = this.dataset;
      //console.log(this.slideDatas);
    }
  }
  ngOnChanges() {
    if (this.dataset.acf) {
      this.slideDatas = this.dataset.acf.how_do_i_invest;
    } else {
      this.slideDatas = this.dataset;
    }
    // console.log("usefulSwiper", this.usefulSwiper);
    if (typeof this.usefulSwiper != "undefined") {
      if (this.usefulSwiper) {
        this.usefulSwiper.swiper.slideTo(0);
        this.usefulSwiper.swiper.startAutoplay();
      }
    }
  }
}
