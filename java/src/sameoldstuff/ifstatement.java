package sameoldstuff;

import javax.swing.*;

public class ifstatement
{
    public static void main(String[] args) {
        int b = Integer.parseInt(JOptionPane.showInputDialog("enter a non-zero number"));
        if (b!=0){
            JOptionPane.showMessageDialog(null,"good your input is not 0");
        }
        else {
            JOptionPane.showMessageDialog(null,"bad kitty");
        }
        System.exit(0);
    }
}
