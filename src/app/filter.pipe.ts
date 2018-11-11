import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

return items.filter( it => {
  //if(it.username_canonical!='ami')
      return it.name.toLowerCase().includes(searchText);
    });
   }
}
