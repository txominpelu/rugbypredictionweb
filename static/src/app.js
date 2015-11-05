
import {HttpClient} from 'aurelia-http-client';

export class App {

  static inject = [HttpClient];

  match = null;
  last10 = null;

  constructor(http){
      this.http = http;
  }

  activate(){
      var m = this.http.get('http://localhost:5000/api/match/24849');
      var l10 = this.http.post('http://localhost:5000/api/last10/1/',{});
      return Promise.all([m,l10]).then(v => {
          this.last10 = v[1].content.results;
          this.match = v[0].content;
      });
  }

}
