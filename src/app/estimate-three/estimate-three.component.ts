import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { EstimateSubmitService } from '../estimate-submit.service';


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
  pass_forward = [];

  constructor(private router: Router, private route: ActivatedRoute, private _submit: EstimateSubmitService) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.array_of_selected_accounts = new Array<string>();
    } else {
      this.array_of_selected_accounts = JSON.parse(myArray);
    }

    console.log(this.array_of_selected_accounts)
  }

  getValue1(event: any) {
    this.insurance = event.target.value;
    console.log(this.insurance)

  }
  getValue2(event: any) {
    this.member_ID = event.target.value
    console.log(this.member_ID)

  }

  getValue3(event: any) {
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

  onSelect() {

    console.log('this has been clicked ')

    for (let i = 0; i < this.array_of_selected_accounts.length; i++) {

      this.pass_forward.push(this.array_of_selected_accounts[i])
    }

    this.pass_forward.push(this.x)
    this.pass_forward.push(this.insurance)
    this.pass_forward.push(this.member_ID)
    this.pass_forward.push(this.group_num)
    this.pass_forward.push(this.y)

    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.pass_forward);

    const navigationExtras: NavigationExtras = {
      queryParams
    };
    console.log("Should send to backend")
    //this.router.navigate(['three'], navigationExtras)
    this._submit.postTransaction(this.pass_forward.toString());
    
  }


}
