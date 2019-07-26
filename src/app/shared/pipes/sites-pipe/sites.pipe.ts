import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sites'
})
export class SitesPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value == "MLU") {

            return "Mercado Libre Uruguay";
        }
        else if (value == "MCU") {

            return "Mercado Libre Cuba";
        }
        else if (value == "MLM") {

            return "Mercado Libre Mexico";
        }
        else if (value == "MSV") {

            return "Mercado Libre El Salvador";
        }
        else if (value == "MLV") {

            return "Mercado Libre Venezuela";
        }
        else if (value == "MRD") {

            return "Mercado Libre Dominicana";
        }
        else if (value == "MNI") {

            return "Mercado Libre Nicaragua";
        }
        else if (value == "MLA") {

            return "Mercado Libre Argentina";
        }
        else if (value == "MPA") {

            return "Mercado Libre Panamá";
        }
        else if (value == "MEC") {

            return "Mercado Libre Ecuador";
        }
        else if (value == "MPY") {

            return "Mercado Libre Paraguay";
        }
        else if (value == "MCO") {

            return "Mercado Libre Colombia";
        }
        else if (value == "MHN") {

            return "Mercado Libre Honduras";
        }
        else if (value == "MLC") {

            return "Mercado Libre Chile";
        }
        else if (value == "MPE") {

            return "Mercado Libre Perú";
        }
        else if (value == "MCR") {

            return "Mercado Libre Costa Rica";
        }
        else if (value == "MGT") {

            return "Mercado Libre Guatemala";
        }
        else if (value == "MPT") {

            return "Mercado Libre Portugal";
        }
        else if (value == "MBO") {

            return "Mercado Libre Bolivia";
        }
        else if (value == "MLB") {

            return "Mercado Libre Brasil";
        }
        return value
    }

}
