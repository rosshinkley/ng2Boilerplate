import {Component, Query, QueryList} from 'angular2/core';
import {NotesDetailsItems} from "./NotesDetailsItems";

@Component({
    selector: 'notes-details',
    template: `
                I see {{items.length}} items. <ng-content></ng-content>
                <small>I am NotesDetails (constructor based QueryList)</small>
                `
})
export class NotesDetails {
    items:QueryList<NotesDetailsItems>;

    constructor(@Query(NotesDetailsItems) items:QueryList<NotesDetailsItems>) {
        this.items = items;

    }

    ngAfterContentInit() {
        var self = this;
        self.items.changes.subscribe((e)=> {
            console.log(`I see ${self.items.length} items`)
        })
    }
}

