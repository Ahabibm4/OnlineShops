import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http';

import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	items: Array<{name: string, url: string, logo: string}>;

	

	options : InAppBrowserOptions = {
	    location : 'yes',//Or 'no' 
	    hidden : 'no', //Or  'yes'
	    clearcache : 'yes',
	    clearsessioncache : 'yes',
	    zoom : 'no',//Android only ,shows browser zoom controls 
	    hardwareback : 'yes',
	    mediaPlaybackRequiresUserAction : 'no',
	    shouldPauseOnSuspend : 'no', //Android only 
	    closebuttoncaption : 'Close', //iOS only
	    disallowoverscroll : 'no', //iOS only 
	    toolbar : 'yes', //iOS only 
	    enableViewportScale : 'no', //iOS only 
	    allowInlineMediaPlayback : 'no',//iOS only 
	    presentationstyle : 'pagesheet',//iOS only 
	    fullscreen : 'yes',//Windows only    
	};

  	constructor(public navCtrl: NavController, private theInAppBrowser: InAppBrowser, private http: HTTP) {

  	}
	public openWithCordovaBrowser(url : string){
	this.getRemoteData();
	    let target = "_self";
	    this.theInAppBrowser.create(url,target,this.options);
	}  

	getRemoteData(){
	alert()
        this.http.get('http://ionic.io', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
    }

}
