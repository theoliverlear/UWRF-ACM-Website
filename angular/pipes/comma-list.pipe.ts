import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'commaList'
})
export class CommaListPipe implements PipeTransform {
    transform(value: string[]): string {
        return value.join(', ');
    }
}