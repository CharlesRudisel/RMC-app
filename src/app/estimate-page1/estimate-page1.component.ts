import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
//import {NgbModal} from '@angular-devkit/build-angular'
@Component({
  selector: 'app-estimate-page1',
  templateUrl: './estimate-page1.component.html',
  styleUrls: ['./estimate-page1.component.scss']
})
export class EstimatePage1Component implements OnInit {
  closeResult = '';

  x =[];


  constructor(private modalService: NgbModal) { }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleEditable(event: any) {

    if(event.target.checked == true){
      this.x.push(event.target.value)
    }
    console.log(event.target.name, event.target.value, event.target.checked);
    console.log(this.x);
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

