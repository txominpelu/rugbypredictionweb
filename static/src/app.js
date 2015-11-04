
import {HttpClient} from 'aurelia-http-client';

export class App {

  static inject = [HttpClient];

  match = null;

  constructor(http){
      this.http = http;
  }

  activate(){
      return this.http.get('http://localhost:5000/api/match/24849').then(response => {
          this.match = response.content
      });
  }

}
