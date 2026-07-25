#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'solve' function below.
#
# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent
#

def solve(comida, propina, impuestos):
    # Write your code here
    total = comida + (comida * propina / 100) + (comida * impuestos / 100)
    print(round(total)) 
    print(f"El total de la comida es: {round(total)}")

if __name__ == '__main__':
    meal_cost = float(input("Digite el monto de la comida (Decimal): ").strip())

    tip_percent = int(input("Digite el porcentaje de propina (Entero): ").strip())

    tax_percent = int(input("Digite el porcentaje de impuestos (Entero): ").strip())

    solve(meal_cost, tip_percent, tax_percent)
