import { Component, OnInit } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";

@Component({
  selector: "app-fact-sheet-archive",
  templateUrl: "./fact-sheet-archive.component.html",
  styleUrls: ["./fact-sheet-archive.component.css"]
})
export class FactSheetArchiveComponent implements OnInit {
  getParentCategory;
  getCategories;
  subCategory;
  getSelected;
  categoryData;
  currentSubCate;
  categoryDatas = [];
  isfirst = false;
  constructor(private wpservice: WPAPIService) {}

  ngOnInit() {
    this.wpservice
      .getCategory("?parent=127&per_page=20")
      .subscribe(pcategories => {
        this.getParentCategory = pcategories;

        this.getParentCategory.forEach(pCategory => {
          var categoryData = {
            parentName: null,
            getCategories: null
          };
          this.wpservice
            .getCategory("?parent=" + pCategory.id)
            .subscribe(category => {
              categoryData.parentName = pCategory.name;
              categoryData.getCategories = category;
              this.getCategories = category;
              this.categoryDatas.push(categoryData);
            });
        });
      });
  }
  getYearPost(category, e, toggle) {
    if (this.currentSubCate) {
      if (category == this.currentSubCate) {
        this.isfirst = !toggle;
      } else {
        this.isfirst = true;
      }
      this.currentSubCate = category;
    } else {
      this.isfirst = !toggle;
      this.currentSubCate = category;
    }

    this.categoryData = null;
    this.wpservice.getCategory(`?parent=${category.id}`).subscribe(subCate => {
      this.subCategory = subCate;
      this.subCategory.sort((a, b) => b.name - a.name);
      this.subCategory = subCate;
      console.log(this.subCategory);
    });
  }
  getSubCategoryData(sub, e) {
    this.wpservice
      .getPostFromCategory(`?categories=${sub.id}`)
      .subscribe(data => {
        this.categoryData = data;
      });
  }
}
