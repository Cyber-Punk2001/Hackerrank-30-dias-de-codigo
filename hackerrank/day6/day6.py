def main():
    t = int(input())

    for _ in range(t):
        s = input()

        pares = s[::2]
        impares = s[1::2]

        print(pares, impares)

if __name__ == "__main__":
    main()
    