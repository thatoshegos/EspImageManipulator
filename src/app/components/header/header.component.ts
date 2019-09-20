import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RoutesRecognized } from "@angular/router";
import { WPAPIService } from "../../../services/wpapi.service";
import { CompileShallowModuleMetadata } from "@angular/compiler";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  menuItems = {
    primary: null,
    secondry: null
  };
  spacialClass = "";
  secondMenus = null;
  activeStatus = false;
  parentMenu = [
    {
      name: "Individual Investor",
      slug: "individual-investor",
      defulturl: "individual-investor/invest-with-us",
      activeClass: ""
    },
    {
      name: "Sharia Investor",
      slug: "sharia-investor",
      defulturl: "sharia-investor/invest-with-us",
      activeClass: ""
    },

      {
      name: "Institutional Investor",
      slug: "institutional-investor",
      defulturl: "institutional-investor/investment-approach",
      activeClass: ""
    }
    // {
    //   name: "Investor Login",
    //   slug: "investor-login",
    //   defulturl: "investor-login"
    // }
  ];
  childrenMenu = [
    {
      name: "INVEST WITH US",
      slug: "invest-with-us",
      parent: "individual-investor",
      id: 1,
      display: true
    },
    {
      name: "OUR FUNDS",
      slug: "our-funds",
      parent: "individual-investor",
      id: 2,
      display: true
    },
    {
      name: "ABOUT US",
      slug: "about-us",
      parent: "individual-investor",
      id: 3,
      display: true
    },
    {
      name: "INSIGHTS",
      slug: "insights",
      parent: "individual-investor",
      id: 4,
      display: true
    },
    {
      name: "CONTACT US",
      slug: "contact-us",
      parent: "individual-investor",
      id: 5,
      display: true
    }
  ];
  parentSlug;

  /**
   **
   **/
  headerMenuItems = [
    {
      name: "Individual Investor",
      slug: "individual-investor",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us",
          parent: "individual-investor",
          id: 1,
          display: true
        },
        {
          name: "OUR FUNDS",
          slug: "our-funds",
          parent: "individual-investor"
        },
        {
          name: "ABOUT US",
          slug: "about-us",
          parent: "individual-investor"
        },
        {
          name: "INSIGHTS",
          slug: "insights",
          parent: "individual-investor"
        },
        {
          name: "CONTACT US",
          slug: "contact-us"
        }
      ]
    },
    {
      name: "Sharia Investor",
      slug: "sharia-investor",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us",
          parent: "individual-investor",
          id: 1,
          display: true
        },
        {
          name: "OUR FUNDS",
          slug: "our-funds",
          parent: "individual-investor"
        },
        {
          name: "ABOUT US",
          slug: "about-us",
          parent: "individual-investor"
        },
        {
          name: "INSIGHTS",
          slug: "insights",
          parent: "individual-investor"
        },
        {
          name: "CONTACT US",
          slug: "contact-us"
        }
      ]
    },

    {
      name: "Institutional Investor",
      slug: "institutional-investor",
      childrens: [
 {
          name: "INVESTMENT APPROACH",
          slug: "investment-approach",
          parent: "individual-investor",
          id: 1,
          display: true
        },
        {
          name: "OUR FUNDS",
          slug: "our-funds",
          parent: "individual-investor"
        },
        {
          name: "ABOUT US",
          slug: "about-us",
          parent: "individual-investor"
        },
        {
          name: "INSIGHTS",
          slug: "insights",
          parent: "individual-investor"
        },
        {
          name: "CONTACT US",
          slug: "contact-us"
        }
      ]
    },
    {
      name: "Investor Login",
      slug: "investor-login",
      childrens: [
        {
          name: "INVEST WITH US",
          slug: "invest-with-us"
        },
        {
          name: "OUR FUNDS",
          slug: "our-funds"
        },
        {
          name: "ABOUT US",
          slug: "about-us"
        },
        {
          name: "INSIGHTS",
          slug: "insights"
        },
        {
          name: "CONTACT US",
          slug: "contact-us"
        }
      ]
    }
  ];
  constructor(private WPService: WPAPIService, private route: Router) {
    /************************************************************
     * this code is related to make relatetion between parent   *
     * component and child component if some on click any parent*
     * then parent slug us replace in child link                *
     * **********************************************************/

    this.route.events.subscribe(val => {
      //console.log(this.route.url);

      if (this.route.url.includes("institutional-investor")) {
        this.childrenMenu[0]["name"] = "INVESTMENT APPROACH";
        this.childrenMenu[0]["slug"] = "investment-approach";
        this.childrenMenu[0]["display"] = true;
        this.spacialClass = "is-institutional-menu";
      } else {
        this.spacialClass = "";
        this.childrenMenu[0]["name"] = "INVEST WITH US";
        this.childrenMenu[0]["slug"] = "invest-with-us";
        this.childrenMenu[0]["display"] = true;
      }
      if (val instanceof RoutesRecognized) {
        var strIdurl = val.state.root.firstChild.routeConfig.path;
        var strIdArr = strIdurl.split("/");
        var strId = val.state.root.firstChild.params;
        this.childrenMenu.forEach(child => {
          if (typeof strId.ID != "undefined") {
            child.parent = "individual-investor";
          } else {
            if (strIdArr[0] != "contact-us") {
              child.parent = strIdArr[0];
              this.activeStatus = true;
            } else {
              child.parent = "individual-investor";
            }
          }
        });

        // if (Object.keys(strId).length === 0) {
        //   console.log(strId);
        //   this.childrenMenu.forEach(child => {
        //     child.parent = "individual-investor";
        //   });
        //  } else {
        //   this.childrenMenu.forEach(child => {
        //     // console.log(strId.parent);
        //     // if (typeof strId.ID != "undefined") {
        //     //   console.log("iff" + strId);
        //     //   // removing parent for about us and contact us pages
        //     //   if (
        //     //     strId.ID != "about-us" &&
        //     //     strId.ID != "contact-us" &&
        //     //     strId.ID != "insights"
        //     //   ) {
        //     //     child.parent = strId.ID;
        //     //   }
        //     //   // for hiding menu
        //     //   if (strId.ID == "institutional-investor") {
        //     //     if (child.slug == "invest-with-us") {
        //     //       child.display = false;
        //     //       // console.log(child);
        //     //     }
        //     //   } else {
        //     //     child.display = true;
        //     //   }
        //     //   // end hiding memu
        //     // }
        //     //else {
        //     // console.log("iff" + strId.ID);
        //     // console.log("else");

        //     if (
        //       strId.parent != "about-us" &&
        //       strId.parent != "contact-us" &&
        //       strId.parent != "insights"
        //     ) {
        //       if (typeof strId.ID != "undefined") {
        //         child.parent = "individual-investor";
        //       } else {
        //         child.parent = strId.parent;
        //       }
        //     }
        //     if (strId.parent) {
        //       this.activeStatus = true;
        //     }

        //     // }
        //   });
        // }
      }
    });
  }

  ngOnInit() {
    this.WPService.getFirstMenu().subscribe(menus => {
      this.menuItems.primary = menus;
      this.menuItems.primary.items.forEach(item => {
        var urlArr = item.url.split("/");
        item.slug = urlArr[5];
        //console.log(item);
      });
    });

    this.WPService.getSecondMenu().subscribe(menus => {
      this.menuItems.secondry = menus;
      this.menuItems.secondry.items.forEach(item => {
        var urlArr = item.url.split("/");
        item.slug = urlArr[5];
      });
    });
  }
}
