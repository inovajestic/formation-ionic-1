import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PERSONNES } from '../../data-model';
import { PersonneDetailPage } from '../../pages/personne-detail/personne-detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personnes: any;
  constructor(public navCtrl: NavController) {
    this.personnes = PERSONNES;
  }

  rechercherPersonne(event) {

  }

  afficherDetail(event, personne) {
    this.navCtrl.push(PersonneDetailPage, {
      personne: personne
    });
  }

}
