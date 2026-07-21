using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Coloque un numero entero por favor: ");
        int n = int.Parse(Console.ReadLine());

        for (int i = 1; i <= 10; i++)
        {
            Console.WriteLine($"{n} x {i} = {n * i}");
        }
    }
}
