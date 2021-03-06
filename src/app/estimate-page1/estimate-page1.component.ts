import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
//import {NgbModal} from '@angular-devkit/build-angular'
@Component({
  selector: 'app-estimate-page1',
  templateUrl: './estimate-page1.component.html',
  styleUrls: ['./estimate-page1.component.scss']
})
export class EstimatePage1Component implements OnInit {
  closeResult = '';

  x = [];
  set = new Set()
  y = [];
  z = []
  uniqueChars = []
  facility;
  visit_type;

  send_array = []


  Appendectomy = ['Open Appendectomy', 'Laparoscopic Appendectomy']
  Biopsies = ['Cardiac biopsy', 'Skin biopsy', 'Lymph node biopsy', 'Endoscopic biopsy', 'Punch biopsy', 'breast biopsy']
  Hysterectomy = ['Total Hysterectomy', 'Hysterectomy with Oophorectomy', 'Radical Hysterectomy', 'Supracervical Hysterectomy']
  Cataract_surgery = ['Phacoemulsification', 'Extracapsular surgery']
  Coronary_artery_bypass = ['Internal thoracic arteries ', 'The radial (arm) artery', 'Vein Grafts']
  Free_skin_graft = ["Free skin graft"]
  Tonsillectomy = ['Cold Scalpel', 'Harmonic Dissection', ' Electrocautery Tonsil Removal', 'Microdebrider Tonsillectomy']
  hernia_repair = ['Tension Repair', 'Tension-free Repair', 'Laparoscopic Repair']
  Back_surgery = ['Discectomy', 'Foraminotomy', 'Nucleoplasty', 'Spinal fusion']


  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {

    
   }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  getValue1(event: any){
    this.facility = event.target.value;
    console.log(this.facility)

  }
  getValue2(event: any){
    this.visit_type = event.target.value
    console.log(this.visit_type)

  }

  getCat(event: any) {
    //console.log(event.target.value)

    switch (event.target.value) {

      case '1':         
        this.copyArray(this.Appendectomy)
        break;
      case '2':
        this.copyArray(this.Biopsies)
        break;
      case '3':
        this.copyArray(this.Hysterectomy)
        break;
      case '4':
        this.copyArray(this.Cataract_surgery)
        break;
      case '5':
        this.copyArray(this.Coronary_artery_bypass)
        break;
      case '6':
        this.copyArray(this.Free_skin_graft)
        break;
      case '7':
        this.copyArray(this.Tonsillectomy)
        break;
      case '8':
        this.copyArray(this.hernia_repair)
        break;
      case '9':
        this.copyArray(this.Back_surgery)
        break;
    }

    //console.log(this.z)

  }

  copyArray(x: String[]) {
    this.z = [];
    for (let i = 0; i < x.length; i++) {

      this.z.push(x[i])
    }
    //console.log(this.z.length)
  }


  toggleEditable(event: any) {

    if (event.target.checked == true) {
      this.x.push(event.target.value)
    }

    if (event.target.checked == false) {
      const index = this.x.indexOf(event.target.value);
      if (index > -1) {
        this.x.splice(index, 1);
      }
    }
    //console.log(this.x.toString())
  }

  



  display() {
    for (let i = 0; i < this.x.length; i++) {
      this.y.push(this.x[i])
    }

    this.uniqueChars = [...new Set(this.y)];
    console.log(this.uniqueChars)
  }




  remove(x: String) {

    const index = this.uniqueChars.indexOf(x);
    if (index > -1) {
      this.uniqueChars.splice(index, 1);
    }
   /* if (index > -1) {
      this.z.splice(index, 1);
    }
    */
    if (index > -1) {
      this.x.splice(index, 1);
    }
    if (index > -1) {
      this.y.splice(index, 1);
    }

    this.uniqueChars = [...new Set(this.uniqueChars)];
    this.x = [...new Set(this.x)];
    this.y = [...new Set(this.y)];
    //this.z = [...new Set(this.z)];

    console.log(this.uniqueChars.toString())
    console.log(this.x.toString())
    console.log(this.y.toString())
   // console.log(this.z.toString())
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

 onSelect(){

  for(let i=0 ; i < this.uniqueChars.length; i++){

    this.send_array.push(this.uniqueChars[i])
  }

  let u = [this.visit_type, this.facility]
  //this.send_array.push(this.facility)
  //this.send_array.push(this.visit_type)
  this.send_array.push(u)

  const queryParams: any = {};
  queryParams.myArray = JSON.stringify(this.send_array);

  const navigationExtras: NavigationExtras = {
    queryParams
  };

  this.router.navigate(['/two'], navigationExtras)
 }

 
  


}

