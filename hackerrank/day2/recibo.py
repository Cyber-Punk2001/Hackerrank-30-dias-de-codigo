def calcular_total(precio):
    # Porcentajes fijos
    propina = 10
    impuesto = 18

    monto_propina = precio * propina / 100
    monto_impuesto = precio * impuesto / 100
    total = precio + monto_propina + monto_impuesto

    return monto_propina, monto_impuesto, total

contabilidad = []

cantidad = 5

print("===== SISTEMA DE FACTURACIÓN =====")

for i in range(cantidad):
    print(f"\nProducto #{i+1}")

    nombre = input("Nombre del producto: ")
    precio = float(input("Precio: "))

    # Se calculan automáticamente
    monto_propina, monto_impuesto, total = calcular_total(precio)

    # Se almacena en la contabilidad del sistema
    contabilidad.append({
        "nombre": nombre,
        "precio": precio,
        "propina": monto_propina,
        "impuesto": monto_impuesto,
        "total": total
    })

print("\n================ FACTURA ================")

subtotal = 0
total_propinas = 0
total_impuestos = 0
total_general = 0

for producto in contabilidad:
    print(f"""
Producto : {producto['nombre']}
Precio   : RD${producto['precio']:.2f}
Propina (10%)  : RD${producto['propina']:.2f}
ITBIS (18%)    : RD${producto['impuesto']:.2f}
Total    : RD${producto['total']:.2f}
-----------------------------------------
""")

    subtotal += producto["precio"]
    total_propinas += producto["propina"]
    total_impuestos += producto["impuesto"]
    total_general += producto["total"]

print("============== RESUMEN ==============")
print(f"Subtotal           : RD${subtotal:.2f}")
print(f"Total Propinas     : RD${total_propinas:.2f}")
print(f"Total ITBIS (18%)  : RD${total_impuestos:.2f}")
print(f"TOTAL A PAGAR      : RD${total_general:.2f}")

# Contabilidad interna del sistema
print("\n===== CONTABILIDAD DEL SISTEMA =====")
print(contabilidad)