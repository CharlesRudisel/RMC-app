import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-estimate-two',
  templateUrl: './estimate-two.component.html',
  styleUrls: ['./estimate-two.component.scss']
})
export class EstimateTwoComponent implements OnInit {

  array_of_selected_accounts: Array<string>;

  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.array_of_selected_accounts = new Array<string>();
    } else {
      this.array_of_selected_accounts = JSON.parse(myArray);
    }
  }

}
