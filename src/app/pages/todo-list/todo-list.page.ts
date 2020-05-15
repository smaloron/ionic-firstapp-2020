import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

const TODO_KEY = "taskList";

export interface TodoInterface {
  createdAt: Date;
  taskName: string;
  done: boolean;
  dueDate: Date;
}

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.page.html",
  styleUrls: ["./todo-list.page.scss"],
})
export class TodoListPage implements OnInit {
  public taskList: Array<TodoInterface> = [];

  public filter = "all";

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let now: Date = new Date();

    this.setDataFromStorage();

    console.log(this.taskList);

    this.activatedRoute.queryParams.subscribe((data) => {
      if (data.taskName) {
        const task: TodoInterface = {
          taskName: data.taskName,
          done: data.done == "true",
          dueDate: new Date(data.dueDate),
          createdAt: new Date(data.createdAt),
        };

        this.taskList.push(task);
        this.persist();
      }
    });
  }

  private async persist() {
    await Storage.set({
      key: TODO_KEY,
      value: JSON.stringify(this.taskList),
    });
  }

  async setDataFromStorage() {
    const data: any = await Storage.get({ key: TODO_KEY });
    console.log(data);
    this.taskList = JSON.parse(data.value);

    this.taskList = this.taskList.filter((item) => {
      if (this.filter == "done") {
        return item.done == true;
      } else if (this.filter == "pending") {
        return item.done == false;
      } else {
        return true;
      }
    });
  }

  filterTasks() {
    this.setDataFromStorage();
  }

  deleteTask(pos) {
    this.taskList.splice(pos, 1);
    this.persist();
  }
}
