import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { WPAPIService } from "../../../services/wpapi.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ToastrManager } from "ng6-toastr-notifications";
import { Observable } from "rxjs";
@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"]
})
export class PagesComponent implements OnInit {
  closeResult: string;
  page = null;
  contactUs = false;
  faq;
  annualReportUrl;
  selectedYear;
  balaceFundStatus;
  fundRangeTestStatus;
  getHowToInvestSlider;
  getHomeSlider;
  model: any = {};
  response;
  type = null;
  slider:  any;
  url: any;
  platformPdf= 'cms/wp-content/uploads/LISP platforms/LISP_Summary_sheet.pdf';
  fundperformance = '/cms/wp-content/uploads/performance/fundperformance.pdf';

  activeClickedTab;
  getCurrentTab;

  //textFreeInvesting = false;
  taxFreeInvestment;

  constructor(
    private wpservice: WPAPIService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private santiser: DomSanitizer,
    public toastr: ToastrManager,

  ) {
    // console.log('this', this)
    this.platformPdf = encodeURI(this.platformPdf);
    this.fundperformance = this.fundperformance;
    route.params.subscribe(val => {
      // console.log(val);
      //console.log(this.router.url);
      var urlArr = this.router.url.split("/");
      this.url = urlArr;
      var currentUrl = {
        parent: urlArr.length > 2 ? urlArr[1] : "",
        child: urlArr.length > 2 ? urlArr[2] : urlArr[1],
        schild: urlArr.length > 3 ? urlArr[3] : ""
      };
      // console.log(currentUrl);
      if (val.ID || currentUrl.child) {
        var slug = val.ID
          ? val.ID
          : currentUrl.schild != ""
          ? currentUrl.schild
          : currentUrl.child;

        // console.log(slug);
        this.wpservice.pages(`?slug=${slug}`).subscribe(page => {
          this.page = page[0];

          // if (slug == "meet-our-leaders") {
          //   this.page.ourteamStatus = true;
          //   this.page.acf.meet_our_leaders.forEach(leader => {
          //     leader.video_url = this.santiser.bypassSecurityTrustHtml(
          //       leader.video_url
          //     );
          //   });
          // }
          if (slug == "faq") {
            this.page.faqStatus = true;
          }
          if (slug == "insights") {
            this.page.insightStatus = true;
          }
          if (slug == "unit-trusts-annual-report") {
            this.page.annualReport = true;
            this.annualReportUrl = this.page.acf.annual_report[0].report_url;
          }
          if (slug == "up-quarterly") {
            this.page.quaterlyStatus = true;
          }
          if (slug == "our-sharia-board") {
            this.page.shariaBoardStatus = true;
          }
          if (slug == "up-quarterly-library") {
            this.page.quaterlyLibraryStatus = true;
          }
          if (slug == "podcast-archive") {
            this.page.podcastArchiveStatus = true;
          }
          if (slug == "glossary") {
            this.page.glossaryStatus = true;
          }
          if (slug == "fund-range-test") {
            this.fundRangeTestStatus = true;
          }
          if (slug == "meet-the-fund-manager") {
            this.page.meetFundManager = true;
            // this.wpservice.getPost("11267").subscribe(silder => {
            //   this.getHomeSlider = silder;
            // });
          }
          if (slug == "diverse-team") {
            this.page.isDiverseTeam  = true;
            // this.wpservice.getPost("11267").subscribe(silder => {
            //   this.getHomeSlider = silder;
            // });
          }
          if (slug == "meet-the-fund-manager-abdul") {
            this.page.meetFundManagerAbdul = true;
            // this.wpservice.getPost("11267").subscribe(silder => {
            //   this.getHomeSlider = silder;
            // });
          }

          if (slug == "meet-the-fund-manager-simon") {
            this.page.meetFundManagerSimon = true;
            // this.wpservice.getPost("11267").subscribe(silder => {
            //   this.getHomeSlider = silder;
            // });
          }

          if (slug == "meet-the-fund-manager-aslam") {
            this.page.meetFundManagerAslam= true;
            // this.wpservice.getPost("11267").subscribe(silder => {
            //   this.getHomeSlider = silder;
            // });
          }

          if (slug == "tax-free-investing") {
            this.page.textFreeInvesting = true;
            // this.wpservice.getPost("11272").subscribe(taxFrees => {
            //   this.taxFreeInvestment = taxFrees;
            //   console.log(this.taxFreeInvestment);
            // });
          }
          if (currentUrl.parent == "article") {
            // this.page.articleStatus = true;
            // console.log("++++++", slug);
            this.wpservice.getPostBySlug(slug).subscribe(post => {
              this.page = post;
              this.page.articleStatus = true;
              // console.log(this.page);
            });
          }
          if (slug == "new-to-investing") {
            this.page.newToInvestingStatus = true;
            this.activeClickedTab = "unitTrust";
            this.getHowToInvestSlider = this.page.acf.what_is_a_unit_trust;
          }
          if (slug == "how-to-invest") {
            this.page.howToInvestStatus = true;
            this.activeClickedTab = "doInvest";
            this.getHowToInvestSlider = this.page.acf.how_do_i_invest;
          }
          if (slug == "forms-documents") {
            this.page.formDocumentStatus = true;
          }
          if (slug == "legal") {
            this.page.legalStatus = true;
          }

          // if (slug == "balanced-fund") {
          //   this.page.balaceFundStatus = true;
          // }
          if (slug == "fact-sheets-archive") {
            this.page.factsheetStatus = true;
          }
          // if (slug == "equity-alpha-fund") {
          //   this.page.equityAlphaStatus = true;
          // }
          if (
            slug == "complete-fund-range" &&
            currentUrl.parent != "institutional-investor"
          ) {
            // this.page.id = 11828;

            this.page.completeFundRangeStatus = true;
            // this.wpservice.pages(`${this.page.id}`).subscribe(page => {
            //   this.page = page;
            //   this.page.completeFundRangeStatus = true;
            //   this.page.getParent = "individual-investor";
            // console.log(this.page);
            // });

            //console.log(this.page);
          }

          //console.log(currentUrl);
          this.getCurrentTab = currentUrl;
          if (this.page) {
            /*** Old About us page    */
            // if (this.page.id == 10) {
            //   this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
            //     this.page = page;
            //     this.page.aboutStatus = true;
            //     console.log(this.page);
            //   });
            // }
            /** finish old about up page  */
            if (this.page.id == 10) {
              this.page.id = 12927;
              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.aboutStatus = true;
                this.contactUs = true;
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "meet-our-leaders"
            ) {
              this.page.id = 12961;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsMeetLeaders = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "corporate-social-investment"
            ) {
              this.page.id = 12952;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsSocialInvestment = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "investment-approach"
            ) {
              this.page.id = 12958;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsInvestmentApproach = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "a-diverse-team-of-independent-thinkers-about-us"
            ) {
              this.page.id = 15552;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsIndependentThinkers = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            }
            else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "committed-to-transformation"
            ) {
              this.page.id = 12955;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsTransform = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "responsible-investing"
            ) {
              this.page.id = 12935;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsResponsibleInvesting = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "our-history"
            ) {
              this.page.id = 12943;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsOurHistroy = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "our-culture"
            ) {
              this.page.id = 12939;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsOurCulture = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "about-us" &&
              currentUrl.child == "ownership-structure"
            ) {
              this.page.id = 12946;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isAboutUsOwnership = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              this.page.slug == "our-funds"
            ) {
              this.page.id = 8;

              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.ourfunds = true;
                this.page.isInstitutionFundRange = false;
                this.faq = this.page.acf["qa-ans"];
                // console.log(this.page);
                // console.log(this.faq);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "islamic-equity-fund"
            ) {
              this.page.id = 11786;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.islamicEquityStatus = true;
                this.page.getParent = "sharia-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "islamic-balanced-fund"
            ) {
              this.page.id = 11788;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.islamicbalancedStatus = true;
                this.page.getParent = "sharia-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "islamic-high-yield-fund"
            ) {
              this.page.id = 11790;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.islamicHighYieldStatus = true;
                this.page.getParent = "sharia-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "islamic-global-equity-fund"
            ) {
              this.page.id = 11794;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.islamicGlobalEquityStatus = true;
                this.page.getParent = "sharia-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "islamic-global-equity-feeder-fund"
            ) {
              this.page.id = 11792;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.islamicGlobalEquityFeederStatus = true;
                this.page.getParent = "sharia-investor";
                this.page.isInstitutionFundRange = false;
                //console.log(this.page);
              });
            }  else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "global-equity-feeder-fund"
            ) {
              this.page.id = 12682;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.islamicGlobalEquityFeederStatus = true;
                this.page.getParent = "individual-investor";
                this.page.isInstitutionFundRange = false;
                //console.log(this.page);
              });
            }else if (
              currentUrl.parent == "individual-investor" &&
              this.page.slug == "our-funds"
            ) {
              this.page.id = 355;

              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.ourfunds = true;
                this.page.isInstitutionFundRange = false;
                this.faq = this.page.acf["qa-ans"];
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "equity-alpha-fund"
            ) {
              this.page.id = 11777;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.equityAlphaStatus = true;
                this.page.getParent = "individual-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "balanced-fund"
            ) {
              this.page.id = 544;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.balaceFundStatus = true;
                this.page.getParent = "individual-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "protector-fund"
            ) {
              this.page.id = 11779;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.protectorStatus = true;
                this.page.getParent = "individual-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "global-equity-fund"
            ) {
              this.page.id = 11781;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.globalEquityStatus = true;
                this.page.getParent = "individual-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "top-40-tracker-fund"
            ) {
              this.page.id = 12127;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.topFortyTrackerStatus = true;
                this.page.getParent = "individual-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "individual-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "stable-fund"
            ) {
              this.page.id = 11796;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.individualStableFundStatus = true;
                this.page.getParent = "individual-investor";
                //console.log(this.page);
              });
            }
            else if (
              currentUrl.parent == "institutional-investor" &&
              this.page.slug == "investment-approach"
            ) {
              this.page.id = 12678;
              //console.log("this institutional home page");
              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.investWithUs = true;
                this.faq = this.page.acf["qa-ans"];
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "diverse-team"
            ) {
              //console.log('ooo')
              this.page.id = 402;

              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                //console.log('diverse',page )
                this.page = page;
                this.page.isDiverseTeam = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            }
            else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild === "managed-equity-fund"
            ) {
              this.page.id = 12734;

              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isManagedEquityFund = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild === "core-equity-fund"
            ) {
              this.page.id = 12736;

              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.iscoredEquityFund = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild === "managed-equity-fund-capped-swix"
            ) {
              this.page.id = 12728;

              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isManagedEquityCappedFund = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild === "managed-equity-fund-swix-index"
            ) {
              this.page.id = 12725;

              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isManagedEquitySwixFund = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              this.page.slug == "our-funds"
            ) {
              this.page.id = 351;

              this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.ourfunds = true;
                this.page.isInstitutionFundRange = true;
                this.faq = this.page.acf["qa-ans"];
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "complete-fund-range"
            ) {
              this.page.id = 12738;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isInstitutionalCompleteFundRange = true;
                // this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "equity-alpha-fund"
            ) {
              this.page.id = 11800;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isInstitutionalEquityStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "bond-fund"
            ) {
              this.page.id = 12769;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isInstitutionalBondStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "money-market-fund"
            ) {
              this.page.id = 12764;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isInstitutionalMoneyStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "protector-fund"
            ) {
              this.page.id = 11798;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isInstitutionalProtectorStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "stable-fund"
            ) {
              this.page.id = 11796;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isInstitutionalStableStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "domestic-balanced-fund"
            ) {
              this.page.id = 12730; // 12134;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isdomesticFundStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "institutional-investor" &&
              currentUrl.child == "our-funds" &&
              currentUrl.schild == "global-balanced-fund"
            ) {
              this.page.id = 12732; //12136;
              this.wpservice.pages(`${this.page.id}`).subscribe(page => {
                this.page = page;
                this.page.isGlobalFundInstitutionalStatus = true;
                this.page.getParent = "institutional-investor";
                //console.log(this.page);
              });
            } else if (
              currentUrl.parent == "sharia-investor" &&
              slug == "invest-with-us"
            ) {
              this.wpservice.getPages("89").subscribe(page => {
                this.page = page;
                this.page.saria = true;
                //console.log(this.page);
              });
            }
          }

          // } else if (this.page.slug == "our-funds") {
          //   this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
          //     this.page = page;
          //     this.page.ourfunds = true;
          // console.log(this.page);
          //   });
          // }

          // console.log(typeof this.page.formStatus);
        });
      }
    });
  }

  getAnnualReport(year) {
    this.annualReportUrl = year.report_url;
    this.selectedYear = year;
    // console.log('++++', this.annualReportUrl, this.selectedYear)
  }

  open(content, type) {
    this.type = type
    //console.log('content', content)
    // console.log(this.getMessageStatus);
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          //console.log('+++', result)
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      // this.getMessageStatus = true;
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  submitForm(f, type) {
    //console.log('submit', f, this.model, type)
    if (type === "subscribe"){
      this.wpservice.subscribe(this.model).subscribe(data => {
        this.response = data;

        if (this.response.success) {
          //console.log(this.response);
          this.toastr.successToastr("Contact save successfully !", "success!");
          f.resetForm();
        }
      });
    } else if (type === 'unsubscribe') {
      this.wpservice.unsubscribe(this.model).subscribe(data => {
        this.response = data;

        if (this.response.success) {
          //console.log(this.response);
          this.toastr.successToastr("Contact save successfully !", "success!");
          f.resetForm();
        }
      });
    }

  }
  ngOnInit() {
    window.scrollTo(0,0);
  }

  ngAfterViewChecked(){
    if (this.page && this.page.acf && this.page.acf.home_slider){
      this.slider = this.page.acf.home_slider
    }
  }

  changeSliderData(data, clickedTab) {
    this.getHowToInvestSlider = data;
    this.activeClickedTab = clickedTab;
    //console.log(this.getHowToInvestSlider);
  }
}
