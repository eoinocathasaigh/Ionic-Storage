import { Component, OnInit, ɵgetEnsureDirtyViewsAreAlwaysReachable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
            IonList, IonItem, IonLabel, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton]
})
export class StatusPage implements OnInit {

  constructor(private storage:Storage, private router:Router) { }
myStatus:string = "";
  ngOnInit() {
  }
  //Creating a space in storage for our emotion to go
  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  //Method to handle saving the status of our account
  async saveStatus(){
    await this.storage.set('status', this.myStatus)
    .then( //If method is successful then this is what is called - we'll navigate back to home page
      ()=>{
        this.router.navigate(['/home']);
      }
    )
    .catch( //Catch the errors
      (error)=>{
        console.log(error);
      }
    );
  }

}
