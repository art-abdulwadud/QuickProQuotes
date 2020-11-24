import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'timelapsePipe',
    pure: true
})
export class Timelapse implements PipeTransform {

    transform(value: any, args?: any): any {
        console.log(value.getDate());
        args = new Date(Date.now());
        const years = args.getFullYear() - value.getFullYear();
        if(years === 1){
            return years + ' year ago';
        }else if(years > 1){
            return years + ' years ago';
        }else{
            return 'Just now';
        }
    }

}