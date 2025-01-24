// code-editor.component.ts 
import {Component, Input, OnInit} from "@angular/core";
import {EditableCode} from "../../../models/meetings/code/EditableCode";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor-style.component.css']
})
export class CodeEditorComponent implements OnInit {
    protected editorOptions: any;
    static readonly EDITOR_THEME: string = 'vs-dark';
    @Input() protected editableCode: EditableCode;
    @Input() protected exerciseTitle?: string;
    constructor() {
        
    }
    ngOnInit() {
        this.editorOptions = {
            theme: CodeEditorComponent.EDITOR_THEME,
            language: this.editableCode.language,
            automaticLayout: true
        };
    }

    protected readonly TagType = TagType;
}
