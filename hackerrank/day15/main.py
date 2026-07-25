class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Solution:
    def display(self, head):
        current = head

        while current:
            print(current.data, end=' ')
            current = current.next

    def insert(self, head, data):
        new_node = Node(data)

        # Si la lista está vacía
        if head is None:
            return new_node

        # Buscar el último nodo
        current = head

        while current.next is not None:
            current = current.next

        # Insertar el nuevo nodo
        current.next = new_node

        return head


mylist = Solution()

T = int(input())
head = None

for i in range(T):
    data = int(input())
    head = mylist.insert(head, data)

mylist.display(head)