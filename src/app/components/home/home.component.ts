import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { WPAPIService } from "../../../services/wpapi.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  homePage = null;
  faqs;
  constructor(
    private wpservice: WPAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //console.log(this.router.url);
    var urlArr = this.router.url.split("/");
    console.log(urlArr);
    if (urlArr[1] == "individual-investor") {
      // console.log("individual-investor");
      this.wpservice.getPages("100").subscribe(data => {
        this.homePage = data;
        this.faqs = this.homePage.acf["qa-ans"];
        console.log(this.homePage);
      });
    }
    //  else if (urlArr[1] == "sharia-investor") {
    //   // console.log("sharia-investor");
    //   this.wpservice.getPages("89").subscribe(data => {
    //     this.homePage = data;
    //     this.faqs = this.homePage.acf["qa-ans"];
    //     console.log(this.homePage);
    //   });
    // }

    // route.params.subscribe(params => {
    //   console.log(params);

    //   if (params.parent == "sharia-investor") {
    //     this.wpservice.getPages("89").subscribe(data => {
    //       this.homePage = data;
    //       this.faqs = this.homePage.acf["qa-ans"];
    //       console.log(this.homePage);
    //     });
    //   } else {
    //     this.wpservice.getPages("100").subscribe(data => {
    //       this.homePage = data;
    //       this.faqs = this.homePage.acf["qa-ans"];
    //       console.log(this.homePage);
    //     });
    //   }
    // });
  }

  ngOnInit() {
    // this.wpservice.readCSVDataFromServer().subscribe(data => {
    //   console.log(data);
    // });
  }
}
