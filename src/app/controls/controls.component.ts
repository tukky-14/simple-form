import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  coffeeForm:FormGroup;
  hotcoldsel=["冷たい", "ぬるい", "熱い"];
  addssel=["Milk", "Sugar"];
  nutsel=["ピーナッツ", "アーモンド", "くるみ"];

  constructor(private fb: FormBuilder) {
    this.coffeeForm= this.fb.group({
      name: "ブレンド",
      taste: "バランスのよい口当たり",
      hotcold: this.hotcoldsel[0],
      adds: this.fb.array([]),
      nut:this.nutsel[0]
    });
  }

  ngOnInit(): void {
  }

  onCheckChanged(item:string, isChecked:boolean) {
    let formArray = <FormArray>this.coffeeForm.controls.adds;
    if(isChecked) {
      formArray.push(new FormControl(item));
    } else {
      let index = formArray.controls.findIndex(elm => elm.value == item)
      formArray.removeAt(index);
    }
  }

}
