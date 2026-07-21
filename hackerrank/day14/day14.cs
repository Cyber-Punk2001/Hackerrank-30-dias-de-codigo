class Difference
{
    private int[] elements;
    public int maximumDifference;

    public Difference(int[] a)
    {
        elements = a;
    }

    public void computeDifference()
    {
        maximumDifference = elements.Max() - elements.Min();
    }
}