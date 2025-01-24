import {EditableCode} from "../models/meetings/code/EditableCode";
import {
    ProgrammingLanguage
} from "../models/meetings/code/ProgrammingLanguage";

const codeQualityExerciseOneStartingCode: string = `public class CompanySurvey {
    // Gets user input.
    public static String a() {
        String b = new Scanner(System.in).nextLine();
        return b;
    }
    // Asks user a question.
    public static String c() {
        String d = "Are you happy with your service?";
        System.out.println(d);
        String e = a();
        return e;
    }

    public static void main(String[] args) {
        c();
    }
}`;
export const codeQualityExerciseOne = new EditableCode(
    ProgrammingLanguage.JAVA,
    codeQualityExerciseOneStartingCode,
    "Code Quality Exercise One"
);
export const codeQualityExercises: EditableCode[] = [
    codeQualityExerciseOne
];