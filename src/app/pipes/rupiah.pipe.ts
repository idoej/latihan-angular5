import { Pipe, PipeTransform } from '@angular/core';
import {formatCurrency} from '@angular/common';

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  transform(value: number, ...args: number[]): string {
    return formatCurrency(value, 'id', 'Rp ');
  }

}
