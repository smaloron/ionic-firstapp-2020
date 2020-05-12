import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-imc",
  templateUrl: "./imc.page.html",
  styleUrls: ["./imc.page.scss"],
})
export class ImcPage implements OnInit {
  public weightInKg;

  public heightInCm;

  public imc;

  constructor() {}

  ngOnInit() {}

  calculateImc() {
    this.imc = this.weightInKg / Math.pow(this.heightInCm / 100, 2);
  }

  getColor() {
    if (!this.imc) {
      return "light";
    } else if (this.imc < 18.5) {
      return "waring";
    } else if (this.imc < 25) {
      return "success";
    } else {
      return "danger";
    }
  }
}
