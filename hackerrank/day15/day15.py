class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def insert(self, head, data):
        new_node = Node(data)

        # Si la lista está vacía
        if head is None:
            return new_node

        # Recorrer hasta el último nodo
        current = head
        while current.next is not None:
            current = current.next

        # Insertar el nuevo nodo al final
        current.next = new_node

        return head

    def display(self, head):
        current = head

        while current is not None:
            print(current.data, end=" ")
            current = current.next

        print()


def main():
    mylist = Solution()
    head = None

    cantidad = int(input("¿Cuántos números desea insertar? "))

    for i in range(cantidad):
        dato = int(input(f"Número #{i + 1}: "))
        head = mylist.insert(head, dato)

    print("\nLista enlazada:")
    mylist.display(head)


if __name__ == "__main__":
    main()