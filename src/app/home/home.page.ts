import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, private navCtrl: NavController, private  dataLocal: DataLocalService,
    private nvCtrl: NavController) {}

  datocodificado: any;
  dato: {};
  objecto: any;

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
    // this.qr();
  }

  qr(){

    this.barcodeScanner.scan().then(barcodeData => {
      // console.log('Barcode data', barcodeData);

      if( !barcodeData.cancelled){

        this.objecto = JSON.parse(barcodeData.text);

        console.log("objeto ", this.objecto);
        this.dataLocal.guardarRegistro(barcodeData.format, this.objecto.type);
      }

      this.dato = barcodeData;
     }).catch(err => {
         console.log('Error', err);


         this.dataLocal.guardarRegistro('QRCode', 'https://www.facebook.com/christian.mocha.7/'); 

        //  let texto = '{\"restarant\":\"My Buffet\",\"address\":\"Cuenca\",\"email\":\"example@abc.com\",\"phone\":\"3051224\",\"table\":3}';

        //  this.dataLocal.guardarRegistro('QRCode', '{\"restarant\":\"My Buffet\",\"address\":\"Cuenca\",\"email\":\"example@abc.com\",\"phone\":\"3051224\",\"table\":3}')

        //  let objecto = JSON.parse(texto);

        //  console.log("objeto ", objecto.table);
     });
    
  }

  ir(){
    this.nvCtrl.navigateRoot('storage')
  }
  
}
