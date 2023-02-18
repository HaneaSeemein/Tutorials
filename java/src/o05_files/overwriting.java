package o05_files;

import java.io.IOException;
import java.io.PrintWriter;

public class overwriting {
    public static void main(String[] args) throws IOException //might/is able to throw an input output exception
    {
        PrintWriter ofile = new PrintWriter("output.txt");
        ofile.println("trial trial");//overwrites
        ofile.println("other lin");
        ofile.close();
    }
}