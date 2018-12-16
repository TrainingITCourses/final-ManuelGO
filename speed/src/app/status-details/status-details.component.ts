import { Status } from './../store/models/status';
import { State } from './../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.css']
})
export class StatusDetailsComponent implements OnInit {
  public filtered$: Observable<any>;
  public status$: Observable<Status>;
  constructor(private route: ActivatedRoute, private store: Store<State>, private location: Location) {
  }

  ngOnInit() {
    this.getStatus();
  }
  getStatus(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filtered$ = this.store.select('launch').pipe(
      map((res: any) => res.launches.filter(l => l.status === id))
    );
    this.status$ = this.store.select('status').pipe(
      map((res: any) => res.statuses.filter(l => l.id === id)[0])
    );
  }
  goBack(): void {
    this.location.back();
  }

}
