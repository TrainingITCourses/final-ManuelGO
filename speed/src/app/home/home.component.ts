import { Launch } from './../store/models/launch';
import { CommonService } from './../common.service';
import { Status } from './../store/models/status';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers/index';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadAgencies } from '../store/reducers/agency/agency.actions';
import { LoadLaunches } from '../store/reducers/launch/launch.actions';
import { LoadTypes } from '../store/reducers/type/type.actions';
import { LoadStatuses } from '../store/reducers/status/status.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statusList$: Observable<Status[]>;
  launches$: Observable<Launch[]>;
  constructor(private store: Store<State>, public cs: CommonService) {
    this.getData();
   }

  ngOnInit() {
    this.statusList$ = this.store.select('status').pipe(
      map(statuses =>  statuses.statuses)
    );
    this.launches$ = this.store.select('launch').pipe(
      map((res: any) => res.launches)
    );
  }

  getData = () => {
    this.store.dispatch(new LoadAgencies());
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadTypes());
    this.store.dispatch(new LoadStatuses());
   }

}
