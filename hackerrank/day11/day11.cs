using System;

class Solution
{
    static void Main(string[] args)
    {
        int[,] arr = new int[6, 6];

        for (int i = 0; i < 6; i++)
        {
            string[] entrada = Console.ReadLine().Split();

            for (int j = 0; j < 6; j++)
            {
                arr[i, j] = int.Parse(entrada[j]);
            }
        }

        int maximo = -63;

        for (int i = 0; i < 4; i++)
        {
            for (int j = 0; j < 4; j++)
            {
                int suma =
                    arr[i, j] +
                    arr[i, j + 1] +
                    arr[i, j + 2] +
                    arr[i + 1, j + 1] +
                    arr[i + 2, j] +
                    arr[i + 2, j + 1] +
                    arr[i + 2, j + 2];

                if (suma > maximo)
                    maximo = suma;
            }
        }

        Console.WriteLine(maximo);
    }
}
