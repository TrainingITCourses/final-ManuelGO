import { Launch } from './../store/models/launch';
import { State } from './../store/reducers/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  public launch$: Observable<Launch>;

  constructor(private route: ActivatedRoute, private store: Store<State>, private location: Location) { }

  ngOnInit() {
    this.getLaunch();
  }
  getLaunch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.launch$ = this.store.select('launch').pipe(
      map((res: any) => res.launches.filter(l => l.id === id)[0])
    );
  }
  goBack(): void {
    this.location.back();
  }

}
