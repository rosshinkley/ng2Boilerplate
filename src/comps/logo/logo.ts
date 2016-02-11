///<reference path="../../../typings/app.d.ts"/>

import  {Component, ElementRef} from 'angular2/core';
import  {Observable} from "rxjs/observable";
import  'rxjs/add/observable/fromevent';
import  'rxjs/add/observable/fromarray';
import  'rxjs/add/operator/do';
import  'rxjs/add/operator/merge';
import  'rxjs/add/operator/distinctuntilchanged';

/**
 * Logo component for Application header
 * activated via elementRef and listen to mouse events via angular
 * adapter interface
 **/
@Component({
    selector: 'Logo',
    template: `
            <div id="logoContainer" class="reshid flip">
              <div class="flipcard">
                <div class="face front">
                  <img class="img-responsive" src="assets/logo_s.png"/>
                </div>
                <div class="face back">
                  <img class="img-responsive" src="assets/logo_b.png"/>
                </div>
              </div>
            </div>
    `
})

export class Logo {
    constructor(private elementRef:ElementRef) {
        this.listenMouse();
    }

    listenMouse():void {
        var over:Observable<any> = Observable.fromEvent(this.elementRef.nativeElement, 'mouseover').map(e=> {
            return Observable.of(1)
        });
        var out:Observable<any> = Observable.fromEvent(this.elementRef.nativeElement, 'mouseout').map(e=> {
            return Observable.of(0)
        });
        over.merge(out).distinctUntilChanged().subscribe(events => {
            if (events.value) {
                jQuery(this.elementRef.nativeElement).find('.flipcard').addClass('flipped');
            } else {
                jQuery(this.elementRef.nativeElement).find('.flipcard').removeClass('flipped');
            }
        });
    }
}