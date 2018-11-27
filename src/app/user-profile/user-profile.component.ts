import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../services/purchase.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public array = [];
  public arrayOfPurchases = [];

  constructor(private purchaseService: PurchaseService) { }

  deletePurchase(id) {
    if (confirm('Desea eliminar la compra?')){
      this.purchaseService.deletePurchase(id).subscribe(data => {
        this.fetch();
      });
    }
  }

  fetch() {
    this.purchaseService.getPurchases()
    .subscribe(res => {
      this.arrayOfPurchases = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.fetch();
  }

}
