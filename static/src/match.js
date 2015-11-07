
import {HttpClient} from 'aurelia-http-client';

export class Match {

  static inject = [HttpClient];

  match = null;
  last10 = null;
  conditions = { };

  constructor(http){
      this.http = http;
  }

  updateCondition(l){
      console.log(l);
      //conditions.
  }

  activate(params){
      var m = this.http.get(`http://localhost:5000/api/match/${params.id}`);
      return m.then(v => {
          this.match = v.content;
          this.http.post(`http://localhost:5000/api/last10/${this.match.team_id}/`,{}).then(x => {
              this.last10 = x.content.results;
          });
      });
  }

}
