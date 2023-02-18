package o002_input;

import java.util.Scanner;

public class multiplescanners
{
    public static void main(String[] args)
    {
        
//INTEGERS
        int first, second;
        System.out.println("enter number");
        //create a scanner object for variable input
        Scanner inputForNumbers = new Scanner(System.in);
        //call the scanner variable and store next value provided in the assigned variable
        first = inputForNumbers.nextInt();
        System.out.println("enter number");
        Scanner input2 = new Scanner(System.in);
        //you dont have to create many instances for the input of the same datatype
        second = input2.nextInt();//nextInt method creates a new line by default
        System.out.println(first+second);
        inputForNumbers.close();
        input2.close();

//STRINGS
        String name, sname;
        Scanner inputStrings = new Scanner(System.in);
        Scanner input4 = new Scanner(System.in);
        System.out.print("enter name: ");
        name = inputStrings.nextLine();//nextLine method DOESN'T create a new line by default
        System.out.print("enter surname: ");
        sname = input4.nextLine();
        // sname = inputStrings.nextLine();
        System.out.println(name+" "+sname);
        inputStrings.close();
        input4.close();
    }
}