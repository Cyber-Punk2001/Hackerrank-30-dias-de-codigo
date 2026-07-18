using System;
using System.Globalization;

class Program
{
    static void Main(string[] args)
    {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";

        // Leer datos del usuario
        int secondInt = Convert.ToInt32(Console.ReadLine());
        double secondDouble = Convert.ToDouble(Console.ReadLine(), CultureInfo.InvariantCulture);
        string secondString = Console.ReadLine();

        // Mostrar resultados
        Console.WriteLine(i + secondInt);
        Console.WriteLine((d + secondDouble).ToString("F1", CultureInfo.InvariantCulture));
        Console.WriteLine(s + secondString);
    }
}
