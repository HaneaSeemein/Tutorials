package o03_JOptionPane;

import javax.swing.*;

public class input
{
    public static void main(String[] args) {
        String name;
        name = JOptionPane.showInputDialog("whats your name");//returns a string
        System.out.println(name);
    }
}