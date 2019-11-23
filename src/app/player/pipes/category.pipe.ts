import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  pure: true,
})
export class CategoryPipe implements PipeTransform {
  transform (items: any[], categoryId: string): any {
    if (!items || !categoryId) {
      return items;
    }

    return items.filter(item => String(item.id) === categoryId);
  }
}
