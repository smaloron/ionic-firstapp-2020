import { Component, OnInit } from "@angular/core";

interface UserInterface {
  name: string;
  role: string;
}

@Component({
  selector: "app-typage",
  templateUrl: "./typage.page.html",
  styleUrls: ["./typage.page.scss"],
})
export class TypagePage implements OnInit {
  public age: number;
  public name: string;
  public admin: boolean;

  public users: Array<UserInterface>;

  public user: UserInterface;

  constructor() {}

  ngOnInit() {
    let newUser: UserInterface = {
      name: "Hack",
      role: "admin",
    };
    this.users.push(newUser);
  }
}
