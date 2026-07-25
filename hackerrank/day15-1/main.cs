using System;

namespace LinkedListExample
{
    // Clase Nodo
    class Node
    {
        public int Data;
        public Node Next;

        public Node(int data)
        {
            Data = data;
            Next = null;
        }
    }

    // Clase Solution
    class Solution
    {
        // Inserta un nodo al final de la lista
        public Node Insert(Node head, int data)
        {
            Node newNode = new Node(data);

            // Si la lista está vacía
            if (head == null)
            {
                return newNode;
            }

            // Recorrer hasta el último nodo
            Node current = head;

            while (current.Next != null)
            {
                current = current.Next;
            }

            // Agregar el nuevo nodo al final
            current.Next = newNode;

            return head;
        }

        // Mostrar la lista
        public void Display(Node head)
        {
            Node current = head;

            while (current != null)
            {
                Console.Write(current.Data + " ");
                current = current.Next;
            }

            Console.WriteLine();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Solution myList = new Solution();
            Node head = null;

            Console.Write("¿Cuántos números desea insertar? ");
            int T = int.Parse(Console.ReadLine());

            for (int i = 0; i < T; i++)
            {
                Console.Write($"Número #{i + 1}: ");
                int data = int.Parse(Console.ReadLine());

                head = myList.Insert(head, data);
            }

            Console.WriteLine("\nLista enlazada:");
            myList.Display(head);

            Console.WriteLine("\nPresione cualquier tecla para salir...");
            Console.ReadKey();
        }
    }
}