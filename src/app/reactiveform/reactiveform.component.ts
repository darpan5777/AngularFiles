import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
 
 
  profileForm = this.Formbuldier.group({
    Name: ['', Validators.required],
    Rollnumber: [''],
    address: this.Formbuldier.group([{city:['', Validators.required]
                                     ,street:['', Validators.required]
                                        ,state:['', Validators.required]}]),
    skill: this.Formbuldier.array([
      this.Formbuldier.control('')
    ])
  });


  get skill() {
    return this.profileForm.get('skill') as FormArray;
  }

  constructor(
    private Formbuldier: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  
  addskill() {
    this.skill.push(this.Formbuldier.control(''));
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
