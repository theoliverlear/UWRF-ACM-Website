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
const codeQualityExerciseTwoStartingCode: string = `public class GasPumpDirty {
    private double gasTankCapacity;
    private double gasTankLevel;
    private static final double gasPerSecond = 1;
    private static final double gasPrice = 2.50;
    // Ideas: (could these be methods?)
    // 1. See if you have enough space.
    // 2. Check if we will overflow.
    // 3. Fill up the tank.
    // 4. Announce the cost.
    public void getGas() {
        double cost = 0.0;
        if (this.gasTankLevel < this.gasTankCapacity) {
            while (this.gasTankLevel + gasPerSecond <= this.gasTankCapacity) {
                this.gasTankLevel += gasPerSecond;
                cost += gasPrice;
            }
        } else {
            System.out.println("Gas tank is full.");
        }
        System.out.println("Cost: $" + cost);
    }
}`;
const codeQualityExerciseThreeStartingCode: string = `public class CorporateIncome {
    static final double CORPORATE_TAX_RATE = 0.21;
    static final double SMALL_BUSINESS_CREDIT_PER_EMPLOYEE = 2400;

    public static double calculateNetIncome(int numEmployees,
                                            double averageSalary,
                                            double revenue,
                                            double expenses) {
        double employeeExpenses = numEmployees * averageSalary;
        System.out.println("Total Employee Expenses: " + employeeExpenses);
        double taxableIncome = revenue - employeeExpenses;
        if (numEmployees < 500) {
            double smallBusinessCredit = numEmployees *
                    SMALL_BUSINESS_CREDIT_PER_EMPLOYEE;
            System.out.println("You qualify for a small business credit of: "
                               + smallBusinessCredit);
            taxableIncome -= smallBusinessCredit;
        }
        double taxes = taxableIncome * CORPORATE_TAX_RATE;
        System.out.println("You owe $" + taxes + " in taxes.");
        double netIncome = revenue - expenses - taxes;
        System.out.println("Net Income: " + netIncome);
        return netIncome;
    }

    public boolean possibleMethod() {
        return false;
    }

    public void anotherPossibleMethod() {
        System.out.println("...");
    }
    
    public double possibleMathMethod() {
        return 0.0;
    }

    public double anotherPossibleMathMethod() {
        return 0.0;
    }
}`;
export const codeQualityExerciseFourStartingCode: string = `public class AcmJanitor {
    public static void checkRoom(String roomName,
                                 int numPeopleOccupying,
                                 boolean floorsVacuumed,
                                 boolean trashEmptied,
                                 boolean lightsOff,
                                 boolean windowsClosed,
                                 boolean doorLocked,
                                 int numComputersOn) {
        boolean nobodyInRoom = numPeopleOccupying == 0;
        boolean roomClean = floorsVacuumed && trashEmptied;
        boolean roomSecure = windowsClosed && doorLocked;
        boolean essentialComputersOn = numComputersOn == 3;
        if (nobodyInRoom && roomClean && lightsOff &&
                roomSecure && essentialComputersOn) {
            System.out.println("Room " + roomName + " is ready for the night.");
        } else {
            System.out.println("Room " + roomName + " is not ready for the night.");
        }
    }
}
class PossibleDataStructure {
    // Fields
    public String possibleField;
    // ...
    // Constructor
    public PossibleDataStructure() {

    }
    // Methods
    public boolean possibleMethod() {
        return true;
    }
}`;
export const codeQualityExerciseOne = new EditableCode(
    ProgrammingLanguage.JAVA,
    codeQualityExerciseOneStartingCode,
    "Code Quality Exercise One"
);
export const codeQualityExerciseTwo = new EditableCode(
    ProgrammingLanguage.JAVA,
    codeQualityExerciseTwoStartingCode,
    "Code Quality Exercise Two"
);
export const codeQualityExerciseThree = new EditableCode(
    ProgrammingLanguage.JAVA,
    codeQualityExerciseThreeStartingCode,
    "Code Quality Exercise Three"
);
export const codeQualityExerciseFour = new EditableCode(
    ProgrammingLanguage.JAVA,
    codeQualityExerciseFourStartingCode,
    "Code Quality Exercise Four"
);
export const codeQualityExercises: EditableCode[] = [
    codeQualityExerciseOne,
    codeQualityExerciseTwo,
    codeQualityExerciseThree,
    codeQualityExerciseFour
];