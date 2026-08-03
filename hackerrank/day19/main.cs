using System;

interface AdvancedArithmetic
{
    int divisorSum(int n);
}

class Calculator : AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        int sum = 0;

        for (int i = 1; i <= n; i++)
        {
            if (n % i == 0)
            {
                sum += i;
            }
        }

        return sum;
    }
}

class Program
{
    static void Main(string[] args)
    {
        int n = 6; // Cambia este valor para probar

        Calculator calculator = new Calculator();

        Console.WriteLine("I implemented: AdvancedArithmetic");
        Console.WriteLine(calculator.divisorSum(n));
    }
}