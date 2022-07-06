import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert : boolean=false;
  ngOptions = ["West Bengal","Orisha","UP","Kerala","Maharastra","Panjab"];
  ngDropdown = "";
  ngDistrict = ["Paschim Medinipur","Purba Medinipur","Howrah","Kochbihar","Dargiling","Siliguri"];
  ngDropdowns = " ";
   editResto= new FormGroup({
    name :new FormControl(''),
    email :new FormControl(''),
    address :new FormControl(''),
    mobile :new FormControl(''),
    state :new FormControl(''),
    district :new FormControl(''),
    date: new FormControl(''),
  })

  constructor(private router:ActivatedRoute,private resto:RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.resto.getCurrentResto(this.router.snapshot.params['id']).
    subscribe((result :any)=>{
      //console.warn("result",result)
        this.editResto= new FormGroup({
        name :new FormControl(result['name']),
        email :new FormControl(result['email']),
        address :new FormControl(result['address']),
        mobile :new FormControl(result['mobile']),
        state :new FormControl(result['state']),
        district: new FormControl(result['district']),
        date: new FormControl(result['date']),
    })
    
  }
    )
}
collection(){
  this.alert=true
  console.warn(this.editResto.value);
  this.resto.updateResto(this.router.snapshot.params['id'],this.editResto.value).subscribe((result)=>
  {
    console.warn(result);
    this.editResto.reset()
   
  })
}
closeAlert()
{
  this.alert=false
}

}