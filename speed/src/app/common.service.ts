import { Agency } from './store/models/agency';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Status } from './store/models/status';
import { Launch } from './store/models/launch';
import { Mission } from './store/models/mission';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  public getStatusTypes$ = (): Observable<Status[]> =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types))
  public getLaunches$ = (): Observable<Launch[]> =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map((res: any) => res.launches))
  public getAgencies$ = (): Observable<Agency[]> =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies))
  public getMissionTypes$ = (): Observable<any[]> =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))
}
