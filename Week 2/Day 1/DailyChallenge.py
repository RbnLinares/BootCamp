import random

user_string = input("Enter a string: ")

if len(user_string) < 10:
    print("String not long enough")
elif len(user_string) > 10:
    print("String too long")
else:
    print("Perfect string")

print(f"First character: {user_string[0]}, Last character: {user_string[-1]}")

for i in range(len(user_string)):
    print(user_string[:i+1])

shuffled_string = list(user_string)
random.shuffle(shuffled_string)
shuffled_string = ''.join(shuffled_string)

print(shuffled_string)
