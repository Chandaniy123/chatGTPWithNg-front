import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseList',
  pure: false
})
export class ReverseListPipe implements PipeTransform {

  transform (values : any) {
    if (values) {
      return values.reverse();
    }
  }

}
