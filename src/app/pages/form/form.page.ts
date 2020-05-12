import { Component, OnInit } from "@angular/core";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-form",
  templateUrl: "./form.page.html",
  styleUrls: ["./form.page.scss"],
})
export class FormPage implements OnInit {
  public name = "Seb";

  public fruits = ["Pommes", "Poires", "Oranges"];

  public buttonColor = "danger";

  public visible = true;

  public user = {
    name: "Joe",
    role: "Admin",
  };

  public newFruit = "";

  constructor() {}

  ngOnInit() {}

  toggleForm() {
    this.visible = !this.visible;
    this.buttonColor = this.visible ? "primary" : "danger";
  }

  addFruit() {
    if (this.newFruit.trim()) {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    }
  }
}
