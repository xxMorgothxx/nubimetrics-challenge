import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'condition'
})
export class ConditionPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value == 'used') {
            return 'USADO'
        }
        else if (value == 'new') {
            return 'NUEVO'
        }
        else {
            return value;
        }
    }

}
