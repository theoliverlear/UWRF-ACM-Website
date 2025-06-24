// code-editor.component.ts 
import {Component, Input, OnInit} from "@angular/core";
import {EditableCode} from "../../../models/meetings/code/EditableCode";
import {TagType} from "../../../models/html/TagType";

@Component({
    selector: 'code-editor',
    templateUrl: './code-editor.component.html',
    styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
    protected editorOptions: any;
    static readonly EDITOR_THEME: string = 'vs-dark';
    @Input() editableCode: EditableCode;
    @Input() exerciseTitle?: string;
    constructor() {
        
    }
    ngOnInit(): void {
        this.editorOptions = {
            theme: CodeEditorComponent.EDITOR_THEME,
            language: this.editableCode.language,
            automaticLayout: true,
            lineHeight: 35,
        };
    }
    protected readonly TagType = TagType;
}