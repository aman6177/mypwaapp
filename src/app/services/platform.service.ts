import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  public userAgent = window.navigator.userAgent;

  public isIOS(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  public isAndroid(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /android/.test(userAgent);
  }

  public isStandalone(): boolean {
    const nav = window.navigator as any;
    return ( this.isIOS() && nav.standalone );
  }
}
