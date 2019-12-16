import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() getArticleData;
  article_banners;
  article_image;
  article_subtitle;
  constructor() {
    console.log('this', this.getArticleData)
  }

  ngOnInit() {
    this.article_banners = this.getArticleData.acf.article_banners
    this.article_image = this.getArticleData.acf.financial_adviser_image_second ? this.getArticleData.acf.financial_adviser_image_second[0].url : ''
    this.article_subtitle = this.getArticleData.acf.subtitle
  }
}
