import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent} from '@angular/service-worker/src/low_level';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'speed';
  public developerVersion = '6';
  constructor(swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = `Current ${event.current.hash}. Load new: ${event.available.hash} ?`;
          if (confirm(msg)) { window.location.reload(); }
        }
      );

    }
  }
}
