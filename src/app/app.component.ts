import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Platform } from '@ionic/angular';

import { BranchInitEvent } from 'capacitor-branch-deep-links';

const { BranchDeepLinks } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(
    private platform: Platform
  ) {
  	this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      BranchDeepLinks.addListener('init', (event: BranchInitEvent) => {
       	// Retrieve deeplink keys from 'referringParams' and evaluate the values to determine where to route the user
       	// Check '+clicked_branch_link' before deciding whether to use your Branch routing logic
       	console.log(event.referringParams);
     	});

     	BranchDeepLinks.addListener('initError', (error: any) => {
       	console.error(error);
     	});
    });
   }
}
