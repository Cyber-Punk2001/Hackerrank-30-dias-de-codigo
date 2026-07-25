using System;

class Program
{
    static void Solve(double comida, int propina, int impuestos)
    {
        double total = comida + (comida * propina / 100.0) + (comida * impuestos / 100.0);

        Console.WriteLine(Math.Round(total));
        Console.WriteLine($"El total de la comida es: {Math.Round(total)}");
    }

    static void Main(string[] args)
    {
        Console.Write("Digite el monto de la comida (Decimal): ");
        double mealCost = Convert.ToDouble(Console.ReadLine());

        Console.Write("Digite el porcentaje de propina (Entero): ");
        int tipPercent = Convert.ToInt32(Console.ReadLine());

        Console.Write("Digite el porcentaje de impuestos (Entero): ");
        int taxPercent = Convert.ToInt32(Console.ReadLine());

        Solve(mealCost, tipPercent, taxPercent);
    }
}