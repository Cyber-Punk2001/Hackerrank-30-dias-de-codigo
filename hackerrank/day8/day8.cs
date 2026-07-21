using System;
using System.Collections.Generic;

class Solution
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());

        Dictionary<string, string> phoneBook = new Dictionary<string, string>();

        for (int i = 0; i < n; i++)
        {
            string[] data = Console.ReadLine().Split();
            phoneBook[data[0]] = data[1];
        }

        string query;

        while ((query = Console.ReadLine()) != null)
        {
            if (phoneBook.ContainsKey(query))
            {
                Console.WriteLine($"{query}={phoneBook[query]}");
            }
            else
            {
                Console.WriteLine("Not found");
            }
        }
    }
}
