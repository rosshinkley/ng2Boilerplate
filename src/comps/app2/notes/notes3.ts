import  {Component} from 'angular2/core';
import  {Sliderpanel} from "../../sliderpanel/sliderpanel";
import  {CommBroker} from "../../../services/commbroker";
import  {NotesBase} from "./notesbase";

@Component({
    selector: 'Notes3',
    template: ` <button type="button" (click)="onPrev($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-left"></span>
                </button>
                <button type="button" (click)="onNext($event)" class="btn btn-default btn-sm">
                    <span class="fa fa-arrow-right"></span>
                </button>
                <hr/>
                <small>I am notes3 component</small>
                <ng-content></ng-content>`
})

export class Notes3 extends NotesBase {
    constructor(protected sliderPanel:Sliderpanel, protected commBroker:CommBroker) {
        super(sliderPanel, commBroker);
        this.me = this;
        this.slideLeft = 'notes4';
        this.slideRight = 'notes2';
    }
}


