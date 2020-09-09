import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  text1: string;
  text2: string;
  result: string = "足し算しましょう";

  addAndShow(): void {
    let forResult: string="正しい値を入力してください";
    // それぞれを数値に変換する
    let int1: number;
    let int2: number;

    int1 = Number(this.text1);
    int2 = Number(this.text2);

    // 両方とも正しく数値に変換できたときだけ、足し算する
    if(!Number.isNaN(int1) && !Number.isNaN(int2)) {
      forResult = `${int1}+${int2}=${int1+int2}`;
    }

    this.result=forResult;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
