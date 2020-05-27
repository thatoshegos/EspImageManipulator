import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-email-disclaimer',
  templateUrl: './email-disclaimer.component.html',
  styleUrls: ['./email-disclaimer.component.css']
})
export class EmailDisclaimerComponent implements OnInit {
  @Input() shariaContent;
  constructor() { }

  ngOnInit() {
  }

}
