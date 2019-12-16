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
  categories;
  openedCategory;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    window.scrollTo(0,0);
    console.log('(this.formHeadin',this.formHeading)
  }
  getFormData(heading, event, toggle) {
    console.log('heading',heading)
    this.openedCategory = heading.headings
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
        console.log(this.getFormPageData[0].acf.form_title);
        const arr = this.convertUrl()
        // makeCategories
        let categories = []
        for (let index = 0; index < arr.length; index++) {
          const element = arr[index];
          if (element.category){
            console.log('element',element, this.getFormPageData)
            const category= element.category
            const existingCategoryIndex = categories.findIndex(item => item.category == category)
            if (existingCategoryIndex == -1){
              categories.push({
                category,
                items:[element]
              });
            } else {
              categories[existingCategoryIndex].items.push(element)
            }
          }
        }
        console.log('dsada', categories)
        this.categories = categories;

        this.changedSlug = heading.headings;
      });
    }
  }

  convertUrl () {
    console.log('category', this.getFormPageData[0].acf);
    const url =  this.getFormPageData[0].acf.form_title;
    for (let i = 0; i < url.length; i++) {
      const element = url[i];
      if (!element.encoded) {
        element.url = encodeURI(element.url)
        element.encoded = true
      }
      
    }
    return url
  }

  slugify(s) {
    return s
      .toLowerCase()
      .split(" ")
      .map(i => i[0] + i.substr(1))
      .join("-");
  }
}
