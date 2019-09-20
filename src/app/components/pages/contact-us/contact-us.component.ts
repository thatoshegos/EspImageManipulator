import { Component, OnInit } from "@angular/core";
import { WPAPIService } from "../../../../services/wpapi.service";

import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  model: any = {};
  response;
  constructor(private wpservice: WPAPIService, public toastr: ToastrManager) {}
  page = null;
  ngOnInit() {
    this.wpservice.pages("?slug=contact-us").subscribe(page => {
      this.page = page[0];
      this.wpservice.getPages(`${this.page.id}`).subscribe(page => {
        this.page = page;
        console.log(this.page);
      });
    });
  }
  submitForm() {
    // console.log(this.model);
    this.wpservice.saveContact(this.model).subscribe(data => {
      this.response = data;

      if (this.response.success) {
        console.log(this.response);
        this.toastr.successToastr("Contact save successfully !", "success!");
      }
    });
  }
}
