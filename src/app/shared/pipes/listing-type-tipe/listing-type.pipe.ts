import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'listingType'
})
export class ListingTypePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value == 'gold_pro') {
            return 'Premium'
        }
        else if (value == 'gold_premium') {
            return 'Oro Premium'
        }
        else if (value == 'gold_special') {
            return 'Clásica'
        }
        else if (value == 'gold') {
            return 'Oro'
        }
        else if (value == 'silver') {
            return 'Plata'
        }
        else if (value == 'bronze') {
            return 'Bronce'
        }
        else if (value == 'free') {
            return 'Gratuita'
        }
        else {
            return value;
        }
    }

}
