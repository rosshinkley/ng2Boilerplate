///<reference path="../../../typings/jquery/jquery.d.ts" />

import  {Component} from 'angular2/core';
import  {Http} from 'angular2/http';
import  {ROUTER_DIRECTIVES} from 'angular2/router';
import  {RouterLink, RouteParams} from 'angular2/router';
import  {MenuItem} from "../sidemenu/menuitem";
import  {Menu} from "../sidemenu/menu";
import  {CommBroker} from "../../services/commbroker";
import  {Consts} from "../../../src/conts";
import  {IMessage} from "../../services/commbroker";
import  {Sliderpanel} from "../sliderpanel/sliderpanel";
import  {Notes} from "./notes/notes";
import  {Notes1} from "./notes/notes1";
import  {Notes2} from "./notes/notes2";
import  {Notes3} from "./notes/notes3";
import  {Notes4} from "./notes/notes4";
import  {Notes5} from "./notes/notes5";
import  {Digg} from "../digg/digg";
import  {HTTP_PROVIDERS} from "angular2/http";
import  {Logout} from "../logout/logout";
import  {Contact} from "./contact/contact";
import  {DividerPanel} from "../dividerpanel/dividerpanel";
import  {ModalDialog} from "../modaldialog/modaldialog";
import  {Properties} from "./properties/properties";
import  {Weather} from "./weather/weather";

/**
 Application 2 lazy loaded
 **/
@Component({
    templateUrl: '/src/comps/app2/App2.html',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, RouterLink, DividerPanel, Menu, MenuItem, Sliderpanel, Digg, Properties,
        Notes, Notes1, Notes2, Notes3, Notes4, Notes5, Weather, Logout, Contact, ModalDialog]
})
export class App2 {
    private screens:any;
    private commBroker:CommBroker;

    constructor(params:RouteParams, commBroker:CommBroker, Consts:Consts) {
        var self = this;
        jQuery(".navbar-header .navbar-toggle").trigger("click");
        jQuery('.navbar-nav').css({
            display: 'block'
        });

        self.commBroker = commBroker;
        self.screens = {
            notes: true,
            weather: false,
            digg: false,
            contact: false,
            logout: false
        };
        self.listenMenuChanges();
    }

    private listenMenuChanges() {
        var self = this;
        self.commBroker.onEvent(Consts.Events().MENU_SELECTION).subscribe((e:IMessage)=> {
            var screen = (e.message).toLowerCase();
            if (!self.screens.hasOwnProperty(screen))
                return;
            for (let screen in self.screens)
                self.screens[screen] = false;
            self.screens[screen] = true;
        });
    }
}