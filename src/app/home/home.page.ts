import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
//Need to make sure we're importing from @ionic/angular/standalone or else the button wont work
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLinkWithHref],
})
export class HomePage {
  //Updating the constructor and adding a string to store our variable being retrieved
  myStatus:String = "";
  constructor(private storage:Storage) {}

  //Retrieving the value from storage
  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }
}
