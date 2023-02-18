package o06_methods;

public class returntypes {
    public static void main(String[] args) {
        printavg(4,5);
        double avg = getavg(4,6);
        //int avg = getavg(4,6); //throws error java cannot implicitly convert the data type to int
        System.out.println(avg);
        System.out.println(name("hanea ","seemein"));
    }
    public static void printavg(int a, int b){
        System.out.println((a+b)/2);
    }
    public static double getavg(int a, int b){
        return (a+b)/2;
    }
    public static String name(String first,String second){
        return first+second;
    }
}
