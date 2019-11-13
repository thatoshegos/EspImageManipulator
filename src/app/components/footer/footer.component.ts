import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { WPAPIService } from "../../../services/wpapi.service";
import { ToastrManager } from "ng6-toastr-notifications";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  type = null;
  model: any = {};
  closeResult: string;
  response;
  
  constructor(private modalService: NgbModal, private wpservice: WPAPIService, public toastr: ToastrManager) { }

  ngOnInit() {
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
}
