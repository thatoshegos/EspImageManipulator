import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-meet-our-leader",
  templateUrl: "./meet-our-leader.component.html",
  styleUrls: ["./meet-our-leader.component.css"]
})
export class MeetOurLeaderComponent implements OnInit {
  @Input() meetOurLeaders;
  constructor() {}

  ngOnInit() {
    console.log(this.meetOurLeaders);
  }
}