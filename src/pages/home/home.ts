import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

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

  	constructor(public navCtrl: NavController, private theInAppBrowser: InAppBrowser, private http: HttpClient) {
  		this.getRemoteData();
  	}
	public openWithCordovaBrowser(url : string){
	    let target = "_self";
	    this.theInAppBrowser.create(url,target,this.options);
	}  

	getRemoteData(){
	var apiUrl = '../assets/data/data.json';
        this.http.get(apiUrl).
		    subscribe((data)=>{
		      this.items = data["shops"];
		    });
    }

}
