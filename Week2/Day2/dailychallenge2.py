# Challenge 1
# number = int(input("Enter a number: "))
# length = int(input("Enter the length of the list: "))

# multiples = []
# while len(multiples) < length:
#     multiples.append(number * (len(multiples) + 1))
# print(multiples)

# Challenge 2
user_string = input("Enter a string: ")

result = ""
for i in range(len(user_string)):
    if i == 0 or user_string[i] != user_string[i-1]:
        result += user_string[i]
print(result)




