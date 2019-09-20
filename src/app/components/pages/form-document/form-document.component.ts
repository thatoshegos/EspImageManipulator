import { Component, OnInit, Input } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
  selector: "app-form-document",
  templateUrl: "./form-document.component.html",
  styleUrls: ["./form-document.component.css"]
})
export class FormDocumentComponent implements OnInit {
  @Input() formHeading;
  slug;
  getFormPageData;
  apiHitted = true;
  changedSlug;
  currentSubCate;
  isfirst = false;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {}
  getFormData(heading, event, toggle) {
    // accordian data
    if (this.currentSubCate) {
      if (heading == this.currentSubCate) {
        this.isfirst = !toggle;
      } else {
        this.isfirst = true;
      }
      this.currentSubCate = heading;
    } else {
      this.isfirst = !toggle;
      this.currentSubCate = heading;
    }
    // accordian code end
    this.slug = this.slugify(heading.headings);
    if (this.changedSlug) {
      if (this.changedSlug == heading.headings) {
        this.apiHitted = false;
      } else {
        this.apiHitted = true;
      }
    }

    if (this.apiHitted) {
      this.wpservice.pages(`?slug=${this.slug}`).subscribe(data => {
        this.getFormPageData = null;
        this.getFormPageData = data;
        console.log(this.getFormPageData);
        this.changedSlug = heading.headings;
      });
    }
  }
  slugify(s) {
    return s
      .toLowerCase()
      .split(" ")
      .map(i => i[0] + i.substr(1))
      .join("-");
  }
}
