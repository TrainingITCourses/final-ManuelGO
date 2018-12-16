import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Status } from '../store/models/status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  @Input() public statusList: Status[];
  constructor() {}

  ngOnInit() {
  }

}
