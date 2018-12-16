import { Launch } from './../store/models/launch';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  @Input() public launches: Launch[];
  public order = 'launch.westamp';
  public reverse = false;

  constructor() {}

  ngOnInit() {
  }
}
