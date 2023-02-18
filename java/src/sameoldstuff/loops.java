package sameoldstuff;

import javax.swing.*;

public class loops {
    public static void main(String[] args) {
        int index=0, i=0;
        String word = JOptionPane.showInputDialog("enter your word");
        //WHILE
        while (index<word.length()){
            System.out.println(word.charAt(index));
            index++;
        }
        //DO-WHILE
        do {
            System.out.println(word.charAt(i));
            i++;
        }while (i<word.length());
        //FOR
        for (int k = 0; k<word.length(); k++)
        {
            System.out.println(word.charAt(k));
        }
    }
}
