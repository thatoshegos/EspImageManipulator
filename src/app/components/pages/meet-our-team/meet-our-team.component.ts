import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-meet-our-team",
  templateUrl: "./meet-our-team.component.html",
  styleUrls: ["./meet-our-team.component.css"]
})
export class MeetOurTeamComponent implements OnInit {
  @Input() meetOurTeam;
  constructor() {}

  ngOnInit() {}
}
