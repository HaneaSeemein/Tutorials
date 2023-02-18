package trials;

// public class nextLine {
    
// }
import java.util.Scanner;

public class nextLine {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("What's your name? ");
        String name = scanner.nextLine();

        System.out.printf("So %s. How old are you? ", name);
        int age = scanner.nextInt();

        System.out.printf("Cool! %d is a good age to start programming. \nWhat language would you prefer? ", age);
        String language = scanner.nextLine();
        // language = scanner.nextLine();//solution
        // or keep a different instance of input for stinrgs alone
        

        System.out.printf("Ah! %s is a solid programming language.", language);

        scanner.close();

    }

}