package sameoldstuff;
//letter = string.charAt(index);
import javax.swing.*;

public class switchstatement {
    public static void main(String[] args) {
       String  name = JOptionPane.showInputDialog("Enter a name beginning with H");
       char firstletter = name.charAt(0);
       switch (firstletter){
           case 'H':
               JOptionPane.showMessageDialog(null,"Good");
               break;
           case 'h':
               JOptionPane.showMessageDialog(null,"Name begins with a capital letter");
               break;
           default:
               JOptionPane.showMessageDialog(null,"AYE");
       }
       System.exit(0);
    }
}
