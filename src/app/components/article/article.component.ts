import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() getArticleData;
  article_banners;
  constructor() {
    console.log('this', this.getArticleData)
  }

  ngOnInit() {
    this.article_banners = this.getArticleData.acf.article_banners
  }
}
