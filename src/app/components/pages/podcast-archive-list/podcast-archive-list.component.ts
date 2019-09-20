import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "./../../../../services/wpapi.service";

@Component({
  selector: "app-podcast-archive-list",
  templateUrl: "./podcast-archive-list.component.html",
  styleUrls: ["./podcast-archive-list.component.css"]
})
export class PodcastArchiveListComponent implements OnInit {
  categories;
  selectedItem;
  podcastVideo;
  currentData;
  isfirst = false;
  @Input() getPodcast;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice.getCategory("?parent=15").subscribe(categories => {
      this.categories = categories;
      this.categories.sort((a, b) => b.name - a.name);
      this.selectedItem = categories[0];
    });
  }
  getYearPodcastPost(category, event, toggle) {
    this.selectedItem = category;

    if (this.currentData) {
      if (this.currentData != category) {
        this.isfirst = true;
      } else {
        this.isfirst = !toggle;
      }
    }
    this.currentData = category;

    this.wpservice
      .getQuaterlyImagePostFromCategory(`?categories=${category.id}`)
      .subscribe(podcastVedio => {
        this.podcastVideo = podcastVedio;
        console.log(this.podcastVideo);
      });
  }
}
