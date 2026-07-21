using System;

class Solution
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());

        string[] entrada = Console.ReadLine().Split(' ');
        int[] arr = Array.ConvertAll(entrada, int.Parse);

        for (int i = arr.Length - 1; i >= 0; i--)
        {
            Console.Write(arr[i]);

            if (i > 0)
                Console.Write(" ");
        }

        Console.WriteLine();
    }
}