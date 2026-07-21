using System;

class Solution
{
    static void Main(String[] args)
    {
        int t = int.Parse(Console.ReadLine());

        for (int i = 0; i < t; i++)
        {
            string s = Console.ReadLine();

            string pares = "";
            string impares = "";

            for (int j = 0; j < s.Length; j++)
            {
                if (j % 2 == 0)
                    pares += s[j];
                else
                    impares += s[j];
            }

            Console.WriteLine($"{pares} {impares}");
        }
    }
}
