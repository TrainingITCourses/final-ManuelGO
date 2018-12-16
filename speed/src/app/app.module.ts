import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StatusEffects } from './store/reducers/status/status.effects';
import { LaunchEffects } from './store/reducers/launch/launch.effects';
import { AgencyEffects } from './store/reducers/agency/agency.effects';
import { TypeEffects } from './store/reducers/type/type.effects';
import { HomeComponent } from './home/home.component';
import { StatusListComponent } from './status-list/status-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StatusDetailsComponent } from './status-details/status-details.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { MatRadioModule,  MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatusListComponent,
    StatusDetailsComponent,
    LaunchesListComponent,
    LaunchDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    OrderModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AgencyEffects, StatusEffects, TypeEffects, LaunchEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
