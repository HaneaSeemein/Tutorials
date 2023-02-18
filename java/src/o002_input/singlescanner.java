package o002_input;

import java.util.Scanner;

public class singlescanner
{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        //INTEGERS
        int number;
        System.out.println("enter number");
        number = input.nextInt();
        System.out.println(number);

        //STRINGS
        String name, sname;
        System.out.println("enter name");
        //while switching from nextInt to nextLine the nextline cant take an input and skips to the next command
        input.nextLine(); //hence we call it here for it to consume the skip
        name = input.nextLine();
        System.out.println("enter surname");
        sname = input.nextLine();
        System.out.println(name+" "+sname);
        //input.nextLine();//takes one line
        input.close(); 
    }
}