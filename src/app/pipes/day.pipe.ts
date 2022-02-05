import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'day',
})
export class DayPipe implements PipeTransform {
  transform(value: number) {
    let date = new Date(value*1000).toLocaleDateString("ru").slice(0, -5);
    let dayNumber = new Date(value*1000).getDay();
    let days = [
      'Вс',
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб'
    ];
    let day = days[dayNumber] + ', ' + date;
    return day;
  }
}