import csv

selection = input("Enter a hollander to search for!\nOr quit to quit the program.\n")
while selection.lower() != "quit":
    output = ""
    with open(r"C:\Users\danny\Work\C2C\C2C.csv", newline = '') as csvfile:
        reader = csv.reader(csvfile, delimiter=',', quotechar='|', quoting=csv.QUOTE_MINIMAL)
        count = 1
        for row in reader:
            if selection in row[1]:
                output += str(count) + ":\t" + row[1] + "\t" + row[4] + "\n"
                count += 1
        if output == "":
            print("\nNo results!\n")
        else:
            print(output)
    selection = input("Enter a hollander to search for!\nOr quit to quit the program.\n\n")