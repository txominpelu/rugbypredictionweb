
import {HttpClient} from 'aurelia-http-client';

export class Teams {

  static inject = [HttpClient];

  teams = null;

  constructor(http){
      this.http = http;
  }

  activate(){
      var m = this.http.get(`http://localhost:5000/api/teams/`);
      return m.then(v => {
          this.teams = v.content.results;
      });
  }

}
