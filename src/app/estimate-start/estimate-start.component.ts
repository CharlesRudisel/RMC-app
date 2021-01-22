import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-estimate-start',
  templateUrl: './estimate-start.component.html',
  styleUrls: ['./estimate-start.component.scss']
})
export class EstimateStartComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  newEstimate(){
    this._router.navigate(['one'])
  }

}
