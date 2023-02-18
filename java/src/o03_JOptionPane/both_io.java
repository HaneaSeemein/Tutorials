package o03_JOptionPane;

import javax.swing.*;

public class both_io
{
    public static void main(String[] args) {
        String name;
        name = JOptionPane.showInputDialog("whats your name");
        JOptionPane.showMessageDialog(null,name);
        System.exit(0);//good practice to end the running imported package
    }
}