using System;

class Solution
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());

        // Convertir a binario
        string binario = Convert.ToString(n, 2);

        int maximo = 0;
        int contador = 0;

        foreach (char bit in binario)
        {
            if (bit == '1')
            {
                contador++;
                if (contador > maximo)
                    maximo = contador;
            }
            else
            {
                contador = 0;
            }
        }

        Console.WriteLine(maximo);
    }
}