import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  form: FormGroup;

  gender: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.gender = new FormControl('', [Validators.required]);

    this.form = new FormGroup({
      gender: this.gender
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
