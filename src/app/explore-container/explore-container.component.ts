import { Component, OnInit, Input } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { BranchDeepLinks } = Plugins;

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

  customEventTrack() {
  	var eventName = 'clicked_on_this'
		var metaData = { 'custom_dictionary': 123, 'anything': 'everything' }
		BranchDeepLinks.sendBranchEvent({ eventName, metaData })
		console.log("Track Event")
  }

}
