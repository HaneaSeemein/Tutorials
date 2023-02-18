package o07_arrays;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class filesarrays {
    public static void main(String[] args) throws IOException
    {
        int [] values = new int[10];
        int i = 0;
        File file = new File("output.txt");
        if (file.exists()){
            Scanner input = new Scanner(file);
            while (input.hasNext() && i<values.length){
                values[i]= input.nextInt();
                System.out.println(values[i]);
            }
        }
    }
}
