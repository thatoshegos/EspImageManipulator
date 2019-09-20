import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousal",
  templateUrl: "./carousal.component.html",
  styleUrls: ["./carousal.component.css"]
})
export class CarousalComponent implements OnInit {
  items = [];

  constructor() {
    console.log("SDfsdfsfsdfsdf");
    this.items = [
      {
        content:
          "<div class='hsi-details-1'>As an owner-managed firm, we are independent of any large institution and are not driven by corporate imperatives that may run counter to our clients long-term interests.</div>"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2001.png'>",
        heading: "New beginnings",
        year:"2001",
        content:
          "Kagiso Asset Management was established as a joint venture between the Kagiso Group and Coronation Fund Managers"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2002.png'>",
        heading: "First funds",
        year:"2002",
        content:
          "Launched the Protector and Absolute Return Funds"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2004.png'>",
        heading: "Performance earns trust",
        year:"2004",
        content:
          "Launched our first equity unit trust fund, the Equity Alpha Fund, which goes on to become a top performer"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2005.png'>",
        heading: "Fully independent",
        year:"2005",
        content:
          "Coronation Fund Managers exits the business and Kagiso Asset Management and staff buy 30%"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2006.png'>",
        heading: "Building infrastructure",
        year:"2006",
        content:
          "Independent administration and infrastructure is installed and full operational independence from Coronation is established"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2007.png'>",
        heading: "Assets under management",
        year:"2007",
        content:
          "Reach R10 billion"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2008.png'>",
        heading: "Outperformance and excellence",
        year:"2008",
        content:
          "Awarded the prestigious Micropal Fund Award for the Best Smaller Group in South Africa over three years Equity Alpha Fund wins two Micropal awards for being the best in its sector over a one and three-year period"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2009.png'>",
        heading: "First Sharia-compliant fund",
        year:"2009",
        content:
          "Launched the Kagiso Islamic Equity Fund, which goes on to become a strong performer against its competitors"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2010.png'>",
        heading: "Our own Manco",
        year:"2010",
        content:
          "Register and launch our management company, Kagiso Collective Investments (RF) Limited"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2011.png'>",
        heading: "Extending our fund range",
        year:"2011",
        content:
          "Include three new asset allocation funds: Kagiso Balanced Fund, Kagiso Islamic Balanced Fund and Kagiso Stable Fund Senior staff and the Kagiso Asset Management Staff Trust increase their shareholding to 49.9%"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2012.png'>",
        heading: "10 years old",
        year:"2012",
        content:
          "Proudly cerebrating 10 years in business Open our Johannesburg offices"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2014.png'>",
        heading: "Proud of our alpha performance",
        year:"2014",
        content:
          "The Kagiso Equity Alpha Fund celebrates its 10-year anniversary"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2018.png'>",
        heading: "Global reach",
        year:"2018",
        content:
          "Launched two dollar denominated global funds domiciled in Ireland: Global Equity Fund and Islamic Global Equity Fund"
      },
      {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2019.png'>",
        heading: "Raging Bull Awards",
        year:"2019",
        content:
          "Prestigious awards for top fund performance awarded to the Protector Fund and the Stable Fund<br>Nominations in two further categories for the Islamic Equity Fund and the Stable Fund<br>Raging Bull Award for the Chairman’s Black Asset Manager of the Year"
      },
	   {
        icon:"<img src='http://dev.omangom.com/kagiso/wordpress/wp-content/uploads/2019/06/2019.png'>",
        heading: "Two new Islamic funds",
        year:"2019",
        content:
          "Launched the Islamic Equity Feeder Fund and the Islamic High Yield Fund"
      }
    ];
  }

  ngOnInit() {}
}
