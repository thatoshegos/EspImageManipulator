import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-podcast-slider",
  templateUrl: "./podcast-slider.component.html",
  styleUrls: ["./podcast-slider.component.css"]
})
export class PodcastSliderComponent implements OnInit {
  @Input() sliders;
  constructor() {}
  config: SwiperOptions = {
    autoplay: 3000,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 30
  };

  ngOnInit() {}
}
