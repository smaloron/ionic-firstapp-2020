import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

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
  public taskList: Array<TodoInterface>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let now: Date = new Date();

    this.taskList = [
      {
        taskName: "Acheter un masque",
        done: true,
        createdAt: now,
        dueDate: new Date(new Date().setDate(now.getDate() + 5)),
      },
      {
        taskName: "Repeindre le salon",
        done: false,
        createdAt: new Date(),
        dueDate: new Date(new Date().setDate(now.getDate() + 15)),
      },
      {
        taskName: "Lire Guerre et Paix",
        done: false,
        createdAt: new Date(),
        dueDate: new Date(new Date().setDate(now.getDate() + 30)),
      },
    ];

    this.activatedRoute.queryParams.subscribe((data) => {
      const task: TodoInterface = {
        taskName: data.taskName,
        done: data.done == "true",
        dueDate: new Date(data.dueDate),
        createdAt: new Date(data.createdAt),
      };

      this.taskList.push(task);
    });
  }
}
