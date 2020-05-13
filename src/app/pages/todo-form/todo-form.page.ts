import { Component, OnInit } from "@angular/core";
import { TodoInterface } from "../todo-list/todo-list.page";
import { ToastController } from "@ionic/angular";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.page.html",
  styleUrls: ["./todo-form.page.scss"],
})
export class TodoFormPage implements OnInit {
  public task: TodoInterface;

  constructor(private toastCtrl: ToastController, private router: Router) {}

  ngOnInit() {
    this.task = {
      taskName: "",
      createdAt: new Date(),
      dueDate: null,
      done: false,
    };
  }

  async showError() {
    const toast = await this.toastCtrl.create({
      message: "Votre saisie est invalide",
      duration: 1500,
      position: "bottom",
    });

    toast.present();
  }

  validate() {
    let isValid = this.task.taskName.trim() != "" && this.task.dueDate != null;
    if (isValid) {
      console.log(typeof this.task.dueDate);

      const extras: NavigationExtras = {
        queryParams: {
          taskName: this.task.taskName,
          done: this.task.done,
          dueDate: this.task.dueDate,
          createdAt: this.task.createdAt,
        },
      };

      this.router.navigate(["todo-list"], extras);
    } else {
      this.showError();
    }
  }
}
