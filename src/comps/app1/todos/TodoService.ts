import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {Lib} from "../../../Lib";
import 'rxjs/add/operator/share';
import TodoStatsModel from "./TodoStatsModel";
import {TodoModel} from "./TodoModel";
import {AppStore} from "angular2-redux-util/dist/index";
import {TodoAction} from "./actions/TodoAction";

// debug server
//const url:string = 'http://secure.digitalsignage.com:8080';
const url:string = 'http://secure.digitalsignage.com';

export class TodoItemModel {
    private task:String;
    private id:string;

    constructor(text:String, id?:string) {
        this.task = text;
        this.id = id || Lib.guid();
    }

    get text() {
        console.log('getting value for task', this.task);
        return this.task;
    }

    set text(value) {
        this.task = value;
    }

    getTask() {
        return this.task;
    }
}

export interface IDataStore {
    todos: Array<TodoItemModel>
}

@Injectable()
export class TodoService {
    private m_dataStore:IDataStore;
    private m_addTodoDispatch:Function;
    private m_clearTodoDispatch:Function;

    // example of how to inject a dependency (TodoAction) using a Token instead of a Type (in our case token and type names are the same)
    constructor(@Inject(TodoAction) private m_todoAction:TodoAction, private _http:Http, private todoStatsModel:TodoStatsModel, private appStore:AppStore) {
        this.m_dataStore = {todos: []};
        this.m_addTodoDispatch = this.m_todoAction.createDispatcher(this.m_todoAction.addTodoDispatch, this.appStore);
        this.m_clearTodoDispatch = this.m_todoAction.createDispatcher(this.m_todoAction.clearTodoDispatch, this.appStore);
    }

    public saveTodoRemote(todo:TodoModel, cb:(status:number)=>void) {
        this.todoStatsModel.creates++;
        let sendData = JSON.stringify(todo);
        this._http.post(`${url}/todos`, sendData)
            .map(response => response.json()).subscribe(
            sendData => {
                cb(1);
            },
            error => {
                console.log('Could not create todo.');
                cb(-1);
            });
    }

    public loadTodosRemote(cb:(status:number)=>void) {
        this.m_clearTodoDispatch();
        this.todoStatsModel.reads++;
        console.log(`${url}/todos`);
        this._http.get(`${url}/todos`).map(response => response.json()).subscribe(data => {
            try {
                data = JSON.parse(data);
                cb(1);
            } catch (e) {
                cb(-1);
                return;
            }
            for (var i in data) {
                var todoModel:TodoModel = new TodoModel({task: data[i]._data.task, modelId: data[i]._data.modelId});
                this.m_addTodoDispatch(todoModel);
            }
        }, error => console.log(`Could not load todos ${error}`));
    }

    public removeTodoRemote(todoModel:TodoModel, cb:(status:number)=>void) {
        this.todoStatsModel.deletes++;
        var modelId = todoModel.getKey('modelId');
        this._http.delete(`${url}/todos/${modelId}`).subscribe(response => {
            if (response.status == 200) {
                cb(1)
            } else {
                cb(-1);
            }
        }, error => console.log('Could not delete todo.'));
    }

    public editTodoRemote(todoModel:TodoModel, cb:(status:number)=>void) {
        this.todoStatsModel.updates++;
        var modelId = todoModel.getKey('modelId');
        var data = JSON.stringify(todoModel);
        this._http.put(`${url}/todos/${modelId}`, data).subscribe(response => {
            if (response.status == 200) {
                cb(1)
            } else {
                cb(-1);
            }
        }, error => console.log('Could not update todo.'));
    }
}
