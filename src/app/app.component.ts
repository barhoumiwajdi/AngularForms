import { Component, OnInit } from '@angular/core';
import { User } from './user';

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
    if (value === true) {
      this.topichasError = true
    } else {
      this.topichasError = false

    }

  }
  userModel = new User('wajdi', 'wajdi@gmail.com', 20967397, 'default', 'morning', true)
}
