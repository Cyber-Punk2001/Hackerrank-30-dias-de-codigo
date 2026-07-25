#!/bin/python3

arr = []

for _ in range(6):
    arr.append(list(map(int, input().split())))

maximo = -63

for i in range(4):
    for j in range(4):
        suma = (
            arr[i][j] +
            arr[i][j + 1] +
            arr[i][j + 2] +
            arr[i + 1][j + 1] +
            arr[i + 2][j] +
            arr[i + 2][j + 1] +
            arr[i + 2][j + 2]
        )

        if suma > maximo:
            maximo = suma

print(maximo)
