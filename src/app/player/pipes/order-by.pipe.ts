import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'order', pure: false })
export class OrderBy implements PipeTransform {
  transform (input: any, [config = '+']): any {
    if (!Array.isArray(input)) {
      return input;
    }

    if (!Array.isArray(config) || (Array.isArray(config) && config.length === 1)) {
      const propertyToCheck: string = !Array.isArray(config) ? config : config[0];
      const desc                    = propertyToCheck.substr(0, 1) === '-';

      // Basic array
      if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
        return !desc ? input.sort() : input.sort().reverse();
      }

      const property: string = propertyToCheck.substr(0, 1) === '+' || propertyToCheck.substr(0, 1) === '-'
        ? propertyToCheck.substr(1)
        : propertyToCheck;

      return input.sort((a: any, b: any) => {
        return !desc
          ? OrderBy._orderByComparator(a[property], b[property])
          : -OrderBy._orderByComparator(a[property], b[property]);
      });

    }

    // Loop over property of the array in order and sort
    return input.sort((a: any, b: any) => {
      for (const c of config) {
        const desc     = c.substr(0, 1) === '-';
        const property = c.substr(0, 1) === '+' || c.substr(0, 1) === '-'
          ? c.substr(1)
          : c;

        const comparison = !desc
          ? OrderBy._orderByComparator(a[property], b[property])
          : -OrderBy._orderByComparator(a[property], b[property]);

        if (comparison !== 0) {
          return comparison;
        }
      }

      return 0;
    });
  }

  static _orderByComparator (a: any, b: any): number {
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }
    } else {
      // Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) {
        return -1;
      }

      if (parseFloat(a) > parseFloat(b)) {
        return 1;
      }
    }

    return 0; // equal each other
  }
}
