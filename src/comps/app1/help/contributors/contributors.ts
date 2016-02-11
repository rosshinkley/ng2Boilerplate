import  {Component} from 'angular2/core';
import  {MyChart} from "./mychart";

@Component({
    selector: 'Contributors',
    directives: [MyChart],
    template: `
                <MyChart></MyChart>
                <small>I am Contributors component with HighCharts ng2 component</small>`
})
export class Contributors {
}


