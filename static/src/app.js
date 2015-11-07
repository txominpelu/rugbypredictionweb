
import 'bootstrap';

export class App {

  configureRouter(config, router){
    this.router = router;

    config.title = 'Aurelia';
    config.map([
      { route: ['','teams'], name: 'teams', moduleId: 'teams', title: "Teams", nav: true, href: "#teams" },
      { route: ['match/:id/'], name: 'match', moduleId: 'match', title: 'Match'},
    ]);
  }

}
