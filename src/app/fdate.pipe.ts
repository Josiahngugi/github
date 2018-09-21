import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fdate'
})
export class FdatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
