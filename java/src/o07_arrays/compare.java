package o07_arrays;

public class compare {
    public static void main(String[] args) {
        int [] n1 = {1,2,3,4};
        int [] n2 = {1,2,3,4};
        int i = 0;
        if (n1==n2)//checks the addresses hence the condition is rejected
        {
            System.out.println("same");
        }
        else {
            System.out.println("nu //this is anyway executed lol");
        }
        //no shortcut mf grind
        boolean equality= true;
        if (n1.length==n2.length){
            while (i<n1.length){
                if (n1[i]!=n2[i]){
                    System.out.println("not equal");
                    equality = false;
                    break;
                }
                i++;
            }
        }
        else {
            equality = false;
        }
        if (equality){
            System.out.println("equal equal");
        }
    }
}
