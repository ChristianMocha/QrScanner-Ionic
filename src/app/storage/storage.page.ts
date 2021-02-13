import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor(private  dataLocal: DataLocalService, private NvCtrl: NavController) { }

  ngOnInit() {
  }
  atras(){
    this.NvCtrl.navigateRoot('home')
  }

}
