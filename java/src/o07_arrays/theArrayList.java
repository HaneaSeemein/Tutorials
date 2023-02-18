package o07_arrays;

import java.util.ArrayList;

public class theArrayList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("hanea");//0
        names.add("haa");//1

        names.add("hane");//3
        names.add(2,"h");//2

        names.set(2,"han");//sets 2nd element ah han
        for (int i =0; i<names.size();i++)//NAMES.SIZE()
        {
            System.out.println(names.get(i));//.GET(INDEX)
        }
        System.out.println("*after remove*");
        names.remove(1);
        for (int i =0; i<names.size();i++)//NAMES.SIZE()
        {
            System.out.println(names.get(i));//.GET(INDEX)
        }
    }
}
