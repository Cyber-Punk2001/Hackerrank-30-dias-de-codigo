using System;

class Program
{
    static void Main(string[] args)
    {
        string S = Console.ReadLine();

        try
        {
            int numero = int.Parse(S);
            Console.WriteLine(numero);
        }
        catch (FormatException)
        {
            Console.WriteLine("Bad String");
        }
    }
}