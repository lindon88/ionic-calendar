import {Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'monthName'
})
export class monthName {
  transform(value, args) {
    var lang = moment().locale(args);
    return lang.localeData().months(moment([2012, value - 1]));
  }
}
