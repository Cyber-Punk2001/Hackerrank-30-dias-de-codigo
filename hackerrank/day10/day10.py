#!/bin/python3

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    n = int(input().strip())

    # Convertir a binario
    binario = bin(n)[2:]

    maximo = 0
    contador = 0

    for bit in binario:
        if bit == '1':
            contador += 1
            maximo = max(maximo, contador)
        else:
            contador = 0

    print(maximo)