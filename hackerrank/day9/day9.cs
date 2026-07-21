using System;

class Solution
{
    static int factorial(int n)
    {
        if (n == 0 || n == 1)
            return 1;

        return n * factorial(n - 1);
    }

    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(factorial(n));
    }
}