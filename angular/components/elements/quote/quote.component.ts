// quote.component.ts 
import {Component, Input} from "@angular/core";

@Component({
    selector: 'quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote-style.component.css']
})
export class QuoteComponent {
    @Input() protected quotee: string;
    @Input() protected quoteText: string;
    constructor() {
        
    }
}
