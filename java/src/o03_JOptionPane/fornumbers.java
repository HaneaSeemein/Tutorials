package o03_JOptionPane;

import javax.swing.*;

public class fornumbers
{
    public static void main(String[] args) {
        int num;
        String numname;
        numname = JOptionPane.showInputDialog("whats your number");
        //since the return type is a string we use parsing
        num = Integer.parseInt(numname);
        //Double.parseDouble(numname); for double
        JOptionPane.showMessageDialog(null,num);
    }
}
