class Difference:
    def __init__(self, a):
        self.__elements = a

	# Add your code here
class Difference:
    def __init__(self, a):
        self.elements = a
        self.maximumDifference = 0

    def computeDifference(self):
        self.maximumDifference = max(self.elements) - min(self.elements)
# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
