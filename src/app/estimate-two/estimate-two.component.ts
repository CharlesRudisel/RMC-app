import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-estimate-two',
  templateUrl: './estimate-two.component.html',
  styleUrls: ['./estimate-two.component.scss']
})
export class EstimateTwoComponent implements OnInit {

  first_name;
  last_name;
  DOB;
  pass_forward = [];
  
  public model:any = {};
  public selectedDate:Date;
  public dateWording:string = "yyyy-mm-dd";
  public currentDateObj:any = {};
  onSelect(evt:any){
    this.selectedDate = new Date(evt.year,evt.month-1,evt.day);
    console.log(this.selectedDate);
  }


  Date: String;

  array_of_selected_accounts: Array<string>;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.array_of_selected_accounts = new Array<string>();
    } else {
      this.array_of_selected_accounts = JSON.parse(myArray);
    }
  }


  select(model){  
    console.log(model);
  }

  keyboardEvent1(e:any){
    this.first_name = e.target.value
    console.log("first name is: " + this.first_name)
  }

  keyboardEvent2(e:any){
    this.last_name = e.target.value
    console.log("last name is: " + this.last_name)
  }

  keyboardEvent3(e:any){
    this.DOB = e.target.value
    console.log("Date of birth is: " + this.DOB)
  }


  
  onSelect2(){

    console.log('this has been clicked ')

    for(let i=0 ; i < this.array_of_selected_accounts.length; i++){
  
      this.pass_forward.push(this.array_of_selected_accounts[i])
    }
  
    this.pass_forward.push(this.first_name)
    this.pass_forward.push(this.last_name)
    this.pass_forward.push(this.selectedDate)
  
    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.pass_forward);
  
    const navigationExtras: NavigationExtras = {
      queryParams
    };
  
    this.router.navigate(['three'], navigationExtras)
   }
  

}
