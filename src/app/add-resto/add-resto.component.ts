import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RestoService} from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
  
})

export class AddRestoComponent implements OnInit {
  alert:boolean=false
  ngOptions = ["West Bengal","Orisha","UP","Kerala","Maharastra","Panjab"];
  ngDropdown = "";

  ngDistrict = ["Paschim Medinipur","Purba Medinipur","Howrah","Kochbihar","Dargiling","Siliguri"];
  ngDropdowns = "";
  addResto=new FormGroup({

name:new FormControl(''),
email:new FormControl(''),
address:new FormControl(''),
mobile:new FormControl(''),
state:new FormControl(''),
district: new FormControl(''),
date:new FormControl(''),

  })
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  collectResto()
  {
   // console.warn(this.addResto.value)

   
   this.resto.saveResto(this.addResto.value).subscribe((result)=>{
   // console.warn("result is here",result)
    this.alert=true
    this.addResto.reset()
  
 
   })
  
  }
  closeAlert()
  {
    this.alert=false
  }


  
}
