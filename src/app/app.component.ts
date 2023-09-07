import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { EnrollementService } from './Services/enrollement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularForms';


  Topics = ['react', 'vue', 'angular']
  ngOnInit() {

  }
  topichasError = true
  validatetopic(value: any) {
    if (value == true) {
      this.topichasError = true
    } else {
      this.topichasError = false

    }

  }
  constructor(private enrollementservices: EnrollementService) { }

  userModel = new User('wajdi', 'wajdi@gmail.com', 20967397, 'default', 'morning', true)
  onSubmit() {


    this.enrollementservices.enrollement(this.userModel)
      .subscribe(
        data => console.log("data received ", data),
        error => console.log("an erreur has been received ")
      )



    console.log(this.userModel)
  }


}
