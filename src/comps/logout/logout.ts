///<reference path="../../../typings/app.d.ts" />

import  {Component} from "angular2/core";
import  {Consts} from "../../../src/conts";
import  {CommBroker} from "../../services/commbroker";

@Component({
    selector: 'Logout',
    template: `
        <h1><Center>Goodbye</Center></h1>
        <small>I am Logout component</small>
        `
})

export class Logout {
    constructor(private commBroker:CommBroker) {
        this.commBroker.getService(Consts.Services().Properties).setPropView('Logout');
        jQuery('body').fadeOut(3000, function () {
            window.location.replace("https://github.com/born2net/ng2Boilerplate");
        });
    }
}
