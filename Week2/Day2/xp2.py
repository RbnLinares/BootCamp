# Exercise 1: Set

# my_fav_numbers = {2,5,8,16,69}
# my_fav_numbers.add(33)
# my_fav_numbers.add(88)
# print(my_fav_numbers)
# my_fav_numbers.remove(88)
# print(my_fav_numbers)

# friend_fav_numbers = {3,6,9,15}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

#Exercise 2: Tuple
#No, tuples are immutable, which means once a tuple is created, you cannot add or remove elements from it.

# Exercise 3: list
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# apple_count = basket.count('apples')
# basket.clear()
# print(basket)

#Exercise 4: Float
# Is a number that can have a decimal point. 
# The difference between an Integer and a Float is: Integer is a whole number, without fractional
# component. It can be positive, negative or zero, and are represented by the int data type.
# on the contrary float is a number that can have a fractional component. It can be positive, 
# negative, or zero, and can include a decimal point. Floats are represented by 
# the float data type.

# start = 1.5
# plus = 0.5
# list = [start + i * plus for i in range(8)]
# print(list)

# there is another way to do it with something called "numpy" and "itertools" Library.

#Exercise 5: For Loop
# for i in range(1, 21):
#     print(i)

# for index, value in enumerate(range(1, 21), start=1):
#     if index % 2 == 0:
#         print(value)

# Exercise 6 : While Loop
# name = ''
# while name != 'Ruben':
#     name = input('name?')
#     if name == 'Ruben':
#         break

# Exercise 7: Favorite Fruits

# favorite_fruits = input("Please enter your favorite fruits, separeted by a single space: ")
# favorite_fruits_list = favorite_fruits.split()
# fruit = input("Enter the name of any fruit: ")
# if fruit in favorite_fruits_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print('You chose a new fruit. I hope you enjoy it.')

# Exercise 8: Who Ordered A Pizza ?
# toppings = []
# price = 10
# while True:
#     topping = input("Enter a pizza topping (or 'quit' to finish): ")
#     if topping.lower() == 'quit':
#         break
#     toppings.append(topping)
#     price += 2.5
#     total = [price]
#     print(f"You'll add {topping} to your pizza.")
# print(f"Your pizza will have the following toppings: {', '.join(toppings)}")
# print(f"The total price for your pizza is: ${total}")

# Exercise 9: Cinemax
# def calculate_family_ticket_cost():
#     total_cost = 0
#     while True:
#         age = int(input("Enter the age of the next family member (or -1 to finish): "))
#         if age == -1:
#             break
#         elif age < 3:
#             total_cost += 0
#         elif 3 <= age <= 12:
#             total_cost += 10
#         else:
#             total_cost += 15
#     return total_cost
# family_ticket_cost = calculate_family_ticket_cost()
# print(f"The total cost of all the family’s tickets is: ${family_ticket_cost}")

# def filter_teenagers():
#     teenagers = []
#     while True:
#         name = input("Enter the name of a teenager (or 'quit' to finish): ")
#         if name.lower() == 'quit':
#             break
#         age = int(input("Enter the age of the teenager: "))
#         if 16 <= age <= 21:
#             teenagers.append(name)
#     return teenagers
# allowed_teenagers = filter_teenagers()
# print("The final list of teenagers who are allowed to watch the movie:")
# for teenager in allowed_teenagers:
#     print(teenager)

# Exercise 10 : Sandwich Orders
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")

# finished_sandwiches = []
# while sandwich_orders:
#     sandwich = sandwich_orders.pop(0)
#     finished_sandwiches.append(sandwich)

# for sandwich in finished_sandwiches:
#     print(f"I made your {sandwich}")




