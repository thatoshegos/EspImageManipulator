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
    window.scrollTo(0,0);
    this.wpservice
      .getCategory("?parent=6&per_page=20")
      .subscribe(pcategories => {
        //console.log('pcategories', pcategories)
        this.getParentCategory = pcategories;

        this.getParentCategory.forEach(pCategory => {
          if (pCategory.id === 13) { return null }
          var categoryData = {
            parentName: null,
            getCategories: null
          };
          this.wpservice
            .getCategory("?parent=" + pCategory.id)
            .subscribe(category => {
              categoryData.parentName = pCategory.name;
              categoryData.getCategories = category;
              categoryData.getCategories = categoryData.getCategories.map(cat => {
                try{
                  return {
                    ...cat,
                    description: JSON.parse(cat.description)
                  }
                } catch(err) {
                  return {
                    ...cat
                  }
                  // cat.description = cat.description
                }
              }).sort((a,b) => parseInt(a.description.order_of_the_fund_on_fact_sheets_archive) < parseInt(b.description.order_of_the_fund_on_fact_sheets_archive) ? -1 : 1)
              this.getCategories = category;
              this.categoryDatas.push(categoryData);
              this.categoryDatas.sort((a,b) => a.parentName - b.parentName ? 1 : -1);
              //console.log('aaaa',this.categoryDatas)
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
    this.wpservice.getCategory(`?parent=${category.id}&per_page=20`).subscribe(subCate => {
      this.subCategory = subCate;
      this.subCategory.sort((b, a) => b.name - a.name);
      this.subCategory = subCate;
      //console.log(this.subCategory);
    });
  }
  getSubCategoryData(sub, e) {
    this.wpservice
      .getPostFromCategory(`?categories=${sub.id}`)
      .subscribe(data => {
        this.categoryData = data;
        //console.log('----',this.categoryData)
      });
  }
}
