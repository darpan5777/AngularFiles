import { Pipe, PipeTransform } from '@angular/core';
import { BankDetails } from './bank-details.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
    
  transform(AccountDetails:BankDetails[], searchvalue:string): BankDetails[]
  {
 
    if(!AccountDetails ||  !searchvalue){
    return AccountDetails;
}
return  BankDetails.filter(BankDetails=>
  BankDetails.Name.toLocalelowercase().includes(searchvalue.toLocaleUpperCase()) ||
  BankDetails.Address.toLocalelowercase().includes(searchvalue.toLocaleUpperCase()) );
  }

}
