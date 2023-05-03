import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miCustom'
})
export class MiCustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (args[0]=== '?') return value + '?';
    return value;
  }

}
