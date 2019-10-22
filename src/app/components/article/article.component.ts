import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() getArticleData;
  constructor() {
    console.log('this', this.getArticleData)
  }

  ngOnInit() {}
}
