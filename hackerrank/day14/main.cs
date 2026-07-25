using System;

class Difference
{
    private int[] elements;
    public int maximumDifference;

    public Difference(int[] a)
    {
        elements = a;
        maximumDifference = 0;
    }

    public void computeDifference()
    {
        int maximo = elements[0];
        int minimo = elements[0];

        foreach (int numero in elements)
        {
            if (numero > maximo)
            {
                maximo = numero;
            }

            if (numero < minimo)
            {
                minimo = numero;
            }
        }

        maximumDifference = maximo - minimo;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.Write("¿Cuántos números desea ingresar? ");
        int n = int.Parse(Console.ReadLine());

        int[] numeros = new int[n];

        for (int i = 0; i < n; i++)
        {
            Console.Write($"Número #{i + 1}: ");
            numeros[i] = int.Parse(Console.ReadLine());
        }

        Difference d = new Difference(numeros);

        d.computeDifference();

        Console.WriteLine("\nDiferencia máxima: " + d.maximumDifference);
    }
}
