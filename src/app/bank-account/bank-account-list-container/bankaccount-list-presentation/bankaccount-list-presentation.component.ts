import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BankDetails } from '../../bank-details.model';
import { BankaccountListPresenterService } from '../bankaccount-list-presenter/bankaccount-list-presenter.service';

@Component({
  selector: 'app-bankaccount-list-presentation',
  templateUrl: './bankaccount-list-presentation.component.html',
  styleUrls: ['./bankaccount-list-presentation.component.scss'],
   viewProviders: [BankaccountListPresenterService],  
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BankaccountListPresentationComponent implements OnInit {
   
  private _BankDetails: BankDetails[] = [];
   
  //  search filter 
  searchvalue!:string

      // input data 
  @Input() public set BankDetails(value: BankDetails[]) {
    if(value) {
      this._BankDetails = value
    }
  }

  public get BankDetails(): BankDetails[] {
    return this._BankDetails
  }
    //  output data
  @Output() deleteId: EventEmitter<any> = new EventEmitter();


  constructor( private bankaccountListpresenterservice:BankaccountListPresenterService) { }
                        
  // subscribe bankaccount id
  ngOnInit(): void { this.bankaccountListpresenterservice.BankaccountId$.subscribe((BankaccountId) => {
    this.deleteId.emit(BankaccountId);
  });
  }

    //delete id
  public deleteaccount(id: number) {
  return  this.bankaccountListpresenterservice.deleteaccount(id)
  }
}
