import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'hour',
})
export class HourPipe implements PipeTransform {
  transform(value: number) {
    let hour = new Date(value*1000).toLocaleTimeString("ru").slice(0, -6);
    return hour;
  }
}