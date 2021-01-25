import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-estimate-three',
  templateUrl: './estimate-three.component.html',
  styleUrls: ['./estimate-three.component.scss']
})
export class EstimateThreeComponent implements OnInit {

  array_of_selected_accounts: Array<string>;
  insurance;
  member_ID;
  group_num;
  x = [];
  y = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.array_of_selected_accounts = new Array<string>();
    } else {
      this.array_of_selected_accounts = JSON.parse(myArray);
    }

    console.log(this.array_of_selected_accounts)
  }

  getValue1(event: any){
    this.insurance = event.target.value;
    console.log(this.insurance)

  }
  getValue2(event: any){
    this.member_ID = event.target.value
    console.log(this.member_ID)

  }

  getValue3(event: any){
    this.group_num = event.target.value
    console.log(this.group_num)

  }

  toggleEditable(event: any) {

    this.x = event.target.value;
    
   
    console.log(this.x.toString())
  }

  toggleEditable2(event: any) {

    this.y = event.target.value;
    
   
    console.log(this.y.toString())
  }


}
