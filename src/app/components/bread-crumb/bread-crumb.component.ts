import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bread-crumb",
  templateUrl: "./bread-crumb.component.html",
  styleUrls: ["./bread-crumb.component.css"]
})
export class BreadCrumbComponent implements OnInit {
  @Input() CurrentUrl;
  breadCrumb;
  parentCrumb;
  childCrumb;
  sChildCrumb;
  parentLink;
  childLink;
  sChildLink;
  constructor() {}

  ngOnInit() {
    // console.log(this.CurrentUrl);

    if (this.CurrentUrl.child == "our-funds"){
      this.parentLink = this.CurrentUrl.parent + "/invest-with-us";
    } else {
      this.parentLink = this.CurrentUrl.parent;
    }

    this.childLink = this.CurrentUrl.parent +"/"+this.CurrentUrl.child;
    this.sChildLink = this.CurrentUrl.parent+"/"+this.CurrentUrl.child+"/"+this.CurrentUrl.schild
    var parent = this.CurrentUrl.parent.split("-");
    var menu = this.CurrentUrl.child.split("-");
    var smenu = this.CurrentUrl.schild.split("-")
    console.log(menu)
    menu.length >= 3
      ? (this.CurrentUrl.child = menu[0] + " " + menu[1] + " " + menu[2])
      : (this.CurrentUrl.child = menu[0] + " " + menu[1]);

    this.CurrentUrl.parent =
      parent.length > 1 ? parent[0] + " " + parent[1] : parent[0];

    if (
      this.CurrentUrl.parent !== " undefined" &&
      this.CurrentUrl.parent !== ""
    ) {
      if (menu.length >= 3) {
        console.log(menu)
        var child = "";
        for (let i = 0; i < menu.length; i++) {
          child += menu[i] + " ";
        }

        // this.breadCrumb =
        //   parent[0] +
        //   " " +
        //   parent[1] +

        //   this.CurrentUrl.parent + " > " + child;

         this.parentCrumb = this.CurrentUrl.parent
         this.childCrumb = child
        //  this.sChildCrumb = this.parentCrumb + this.childCrumb
        // menu[0] +
        // " " +
        // menu[1] +
        // " " +
        // menu[2];
      } else {
        // this.breadCrumb =
        //   parent[0] + " " + (parent[1] || '') + " > " + menu[0] + " " + (menu[1] || '');
        this.parentCrumb = parent[0] + " " + (parent[1] || '') 
        this.childCrumb = menu[0] + " " + (menu[1] || '')
        if(this.CurrentUrl.schild !== " undefined" && this.CurrentUrl.schild !== "" ) {
          this.sChildCrumb = smenu[0] + " " + smenu[1] + " " + (smenu[2] || '')
        }
      }
    } else {
      if(menu[2]) {
        this.childCrumb = menu[0] + " " + menu[1] + " " + menu[2];
      } else {
        this.childCrumb = menu[0] + " " + menu[1];
      }
      if(this.CurrentUrl.schild !== " undefined" && this.CurrentUrl.schild !== "" ) {
        this.sChildCrumb = smenu[0] + " " + smenu[1] + " " + smenu[2]
      }
    }
  }
}
