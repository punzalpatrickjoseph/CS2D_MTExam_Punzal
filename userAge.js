age = int(input("Please enter your age: "))

# Age categorization using nested if-else statements
if age < 5:
    print("You are categorized as a Toddler (under 5 years).")
else:
    if age >= 5 and age <= 12:
        print("You are categorized as a Child (5-12 years).")
    else:
        if age >= 13 and age <= 19:
            print("You are categorized as a Teenager (13-19 years).")
        else:
            if age >= 20 and age <= 35:
                print("You are categorized as a Young Adult (20-35 years).")
            else:
                if age >= 36 and age <= 60:
                    print("You are categorized as Middle-Aged (36-60 years).")
                else:
                    print("You are categorized as a Senior (over 60 years).")
