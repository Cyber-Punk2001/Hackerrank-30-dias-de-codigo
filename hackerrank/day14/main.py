class Difference:
    def __init__(self, a):
        self.elements = a
        self.maximumDifference = 0

    def computeDifference(self):
        maximo = max(self.elements)
        minimo = min(self.elements)

        self.maximumDifference = maximo - minimo


# Código de HackerRank
_ = int(input())
a = list(map(int, input().split()))

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)