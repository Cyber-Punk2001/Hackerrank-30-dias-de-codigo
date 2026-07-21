class Student : Person
{
    private int[] testScores;

    public Student(string firstName, string lastName, int id, int[] scores)
        : base(firstName, lastName, id)
    {
        testScores = scores;
    }

    public char Calculate()
    {
        int suma = 0;

        foreach (int score in testScores)
        {
            suma += score;
        }

        int promedio = suma / testScores.Length;

        if (promedio >= 90) return 'O';
        if (promedio >= 80) return 'E';
        if (promedio >= 70) return 'A';
        if (promedio >= 55) return 'P';
        if (promedio >= 40) return 'D';

        return 'T';
    }
}