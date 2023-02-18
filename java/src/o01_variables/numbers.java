package o01_variables;

public class numbers
{
    public static void main(String[] args)
    {
        int a=1,b=2;
        double avg= (a+b)/2;
        System.out.println(avg);//1.0; if all the values given are integers java implicitly throws off the extra after point value
        // 1.0 because integers divided by integer
        double avgf= (a+b)/2.0;
        System.out.println(avgf);//1.5; because 2.0 is a float
    }
}
