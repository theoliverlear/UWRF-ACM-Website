import {ProgrammingLanguage} from "./ProgrammingLanguage";

export class EditableCode {
    public language: ProgrammingLanguage;
    public startingCode: string;
    public title?: string;
    public constructor(language: ProgrammingLanguage,
                       startingCode: string,
                       title?: string) {
        this.language = language;
        this.startingCode = startingCode;
        this.title = title;
    }
}