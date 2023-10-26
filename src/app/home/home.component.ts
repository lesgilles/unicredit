import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  subscription:any[] =[]
  amount:number = 0
  busname:string = ''
  bustype:string = ''
  name:string = ''
  workadd:string = ''
  homeadd:string = ''
  email:string = ''
  phone:string = ''
  dob:any
  bvn:number = 0
  nin:number = 0
  acctno:number = 0
  gender:string = ''
  marital:string = ''
  state:string = ''
  lga:string = ''
  bank:string = ''
  nok:string = ''
  nokphone:string = ''
  mmn:string = ''
  nokadd:string = ''
  who:string = ''







  constructor(public dataService: DataService, public router: Router ) {}

  ngOnInit() { 

  }

  submitForm() {
    console.log({
      subscription: this.subscription,
      amount:this.amount,
      busname:this.busname,
      bustype:this.bustype,
      name:this.name,
      workadd:this.workadd,
      homeadd:this.homeadd,
      email:this.email,
      phone:this.phone,
      dob:this.dob,
      bvn:this.bvn,
      nin:this.nin,
      acctno:this.acctno,
      gender:this.gender,
      marital:this.marital,
      state:this.state,
      lga:this.lga,
      bank:this.bank,
      nok:this.nok,
      nokphone:this.nokphone,
      mmn:this.mmn,
      nokadd:this.nokadd,
      who:this.who,
      date: new Date().getTime(),
      picture: "assets/images/placeholder.jpg"
        });
    
    // this.alertService.presentLoading('please hold while we register you...')
    const data = {
  subscription: this.subscription,
  amount:this.amount,
  busname:this.busname,
  bustype:this.bustype,
  name:this.name,
  workadd:this.workadd,
  homeadd:this.homeadd,
  email:this.email,
  phone:this.phone,
  dob:this.dob,
  bvn:this.bvn,
  nin:this.nin,
  acctno:this.acctno,
  gender:this.gender,
  marital:this.marital,
  state:this.state,
  lga:this.lga,
  bank:this.bank,
  nok:this.nok,
  nokphone:this.nokphone,
  mmn:this.mmn,
  nokadd:this.nokadd,
  who:this.who,
  date: new Date().getTime(),
  picture: "assets/images/placeholder.jpg",
  to: 'membership@unicreditcoop.com',
  message: {
    subject: 'Application from Website!',
    html: "subscription:" + this.subscription  + "<br>" +  "Amount:" + this.amount  + "<br>" +  "Business Name:" + this.busname  + "<br>" +  "Business Type:" + this.bustype  + "<br>" +  "Name:" + this.name  + "<br>" +  "Work Add:" + this.workadd  + "<br>" +  "Home Address:" + this.homeadd  + "<br>" +  "email:" + this.email  + "<br>" +  "Phone:" + this.phone  + "<br>" +  "Date of Birth:" + this.dob  + "<br>" +  "BVN:" + this.bvn  + "<br>" +  "NIN:" + this.nin  + "<br>" +  "Account No:" + this.acctno  + "<br>" +  "Gender:" + this.gender  + "<br>" +  "Marital Status:" + this.marital  + "<br>" +  "State:" + this.state  + "<br>" +  "LGA:" + this.lga  + "<br>" +  "Bank:" + this.bank  + "<br>" +  "Next of Kin:" + this.nok  + "<br>" +  "Next of Kin Phone:" + this.nokphone  + "<br>" +  "Mother's Maiden Name:" + this.mmn  + "<br>" +  "Next of Kin Address:" + this.nokadd  + "<br>" +  "Introduced by:" + this.who
  }
    }
    this.dataService.writeData(data).then(() => {
 this.subscription = [],
  this.amount = 0,
   this.busname = ''
   this.bustype = ''
 this.name = ''
 this.workadd = ''
 this.homeadd = ''
 this.email = ''
 this.phone = ''
 this.dob = ''
 this.bvn = 0
 this.nin = 0
 this.acctno = 0
 this.gender = ''
 this.marital = ''
 this.state = ''
 this.lga = ''
 this.bank = ''
 this.nok = ''
  this.nokphone = ''   
  this.mmn = ''
 this.nokadd = ''
this.who = ''
      // this.alertService.dismissLoading()
    }).then(() => {
      this.router.navigate(['thanks'])
    })
  }

  subscribedTo(e:any) {
    console.log(e.target.checked);
    if(e.target.checked) {
      this.subscription.push(e.target.value)
    } else {
      let index = this.subscription.indexOf(e.target.value);

if (index !== -1) {
  this.subscription.splice(index, 1);
}
    }
    
    console.log(this.subscription);
    
  }
  doMaritalStatus(e:any) {
    // console.log(e.target.value);
    this.marital = e.target.value
  }

  doGender(e:any) {
    // console.log(e.target.value);
    this.gender = e.target.value
    
  }

  gotoThankyou() {
    this.router.navigate(['thanks'])
  }
}
