using System;

class Calculator
{
    public int Power(int n, int p)
    {
        if (n < 0 || p < 0)
        {
            throw new Exception("n and p should be non-negative");
        }

        int resultado = 1;

        for (int i = 0; i < p; i++)
        {
            resultado *= n;
        }

        return resultado;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Calculator calculator = new Calculator();

        Console.Write("¿Cuántos casos desea probar? ");
        int cantidad = int.Parse(Console.ReadLine());

        for (int i = 0; i < cantidad; i++)
        {
            Console.Write($"Caso #{i + 1}: ");

            string[] datos = Console.ReadLine().Split(' ');

            int n = int.Parse(datos[0]);
            int p = int.Parse(datos[1]);

            try
            {
                int resultado = calculator.Power(n, p);
                Console.WriteLine("Resultado: " + resultado);
            }
            catch (Exception error)
            {
                Console.WriteLine(error.Message);
            }
        }
    }
}