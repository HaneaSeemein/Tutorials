package o04_stringoperations;

import javax.swing.*;

public class equalities {
    //the == sign compares the addresses.
    public static void main(String[] args) {
        String c = "hanea";
        String d = "hanea";
        if(c==d){
            JOptionPane.showMessageDialog(null,"when the values were hardcoded are equal ==");
        }
        else {
            JOptionPane.showMessageDialog(null,"they're not equal at all");
        }
        //the input is stored is in different locations irrespective of the value
        String a= JOptionPane.showInputDialog("a");
        String b= JOptionPane.showInputDialog("b");
        if(a==b){
            JOptionPane.showMessageDialog(null,"a==b wont happen here");
        }
        else {//hence, even if the input string is same this is executed
            JOptionPane.showMessageDialog(null,"a==b || a!=b ");
        }
        //solution use: a.compareTo(b) or a.equals(b)
        if(a.equals(b)){
            JOptionPane.showMessageDialog(null,"a.equals(b)");
        }
        else {//hence, even if the input string is same this is executed
            JOptionPane.showMessageDialog(null,"not equal");
        }
        if(a.compareTo(b)<0){
            JOptionPane.showMessageDialog(null,"a.compareTo(b) a is first and b is second");
        }
        else if(a.compareTo(b)>0){
            JOptionPane.showMessageDialog(null,"a.compareTo(b) b is first and a is second");
        }
        else if(a.compareTo(b)==0){
            JOptionPane.showMessageDialog(null,"a.compareTo(b) a and b are equal");
        }
        System.exit(0);
    }
}
