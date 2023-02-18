package o05_files;

import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class reading {
    public static void main(String[] args) throws IOException
    {
        File file = new File("output.txt");
        if (file.exists())
        {
            Scanner inputFile = new Scanner(file);
            while (inputFile.hasNext())
            {
                System.out.println(inputFile.nextLine());
                //inputFile.nextInt() for the next line
            }
            inputFile.close();
        }
        else
        {
            JOptionPane.showMessageDialog(null,"wrong wrong wrong");
        }

    }
}
