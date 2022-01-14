import { Component, OnInit } from '@angular/core';
import { AreaForm } from 'src/app/models/area-form';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent implements OnInit {

   base?: number;
   height?: number;

   area?: any;

  // areaForm: AreaForm = new AreaForm();  //we have defined a variable of contact form that is = to new instance ContactForm
  //                                       //a modal is just a blueprint that we can instantiate multiple times

  //  area: AreaForm[] = []; 

  constructor() { }
  


  ngOnInit(): void {
    } 

    calculateArea() {

      if (
        this.base != null &&
        this.height != null &&
        ) {
          this.area = (( this.base * this.height)/2).toFixed(1)

    }

  }
}
