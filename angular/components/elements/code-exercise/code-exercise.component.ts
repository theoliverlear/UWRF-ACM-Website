// code-exercise.component.ts 
import {Component, Input} from "@angular/core";
import {EditableCode} from "../../../models/meetings/code/EditableCode";

@Component({
    selector: 'code-exercise',
    templateUrl: './code-exercise.component.html',
    styleUrls: ['./code-exercise.component.css']
})
export class CodeExerciseComponent {
    @Input() protected codeExercises: EditableCode[];
    constructor() {
        
    }
    protected getPossibleTitle(editableCode: EditableCode): string | undefined {
        return editableCode.title ? editableCode.title : undefined;
    }
}
