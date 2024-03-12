#################### Exercise 1 ######################

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}s'

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f'{self.amount} {self.currency}s'

    def __add__(self, other):
        if isinstance(other, Currency) and self.currency != other.currency:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        if isinstance(other, int):
            return self.amount + other
        return self.amount + other.amount

    def __iadd__(self, other):
        if isinstance(other, Currency) and self.currency != other.currency:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        if isinstance(other, int):
            self.amount += other
        else:
            self.amount += other.amount
        return self

    def __radd__(self, other):
        if isinstance(other, int):
            return self.amount + other
        return self.amount + other.amount

#################### Exercise 2 #####################
    
# # func.py

# def add_numbers(num1, num2):
#     result = num1 + num2
#     print(f"The sum of {num1} and {num2} is {result}")

# # exercise_one.py

# import func

# func.add_numbers(5, 10)

####################### Exercise 3 #####################
    
import random
import string

def generate_random_string(length):
    letters = string.ascii_letters
    random_string = ''.join(random.choice(letters) for _ in range(length))
    return random_string

random_string = generate_random_string(5)
print(random_string)

###################### Exercise 4 #####################

import datetime

def display_current_date():
    current_datetime = datetime.datetime.now()
    current_date = current_datetime.strftime('%Y-%m-%d')
    print(f"The current date is: {current_date}")

display_current_date()

##################### Exercise 5 ######################

import datetime

def time_until_new_year():
    now = datetime.datetime.now()
    next_year = now.year + 1
    new_year = datetime.datetime(next_year, 1, 1)
    difference = new_year - now
    days = difference.days
    hours, remainder = divmod(difference.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)
    print(f"The 1st of January is in {days} days and {hours}:{minutes}:{seconds} hours.")

time_until_new_year()

###################### Exercise 6 ####################

import datetime

def minutes_lived(birthdate):
    birthdate_obj = datetime.datetime.strptime(birthdate, "%Y-%m-%d")
    now = datetime.datetime.now()
    difference = now - birthdate_obj
    minutes = difference.total_seconds() / 60
    print(f"You have lived for {minutes} minutes.")

# Example usage
birthdate = "1986-03-17" # Example birthdate
minutes_lived(birthdate)

##################### Exercise 7 ###################

from faker import Faker

fake = Faker()
users = []

def add_user():
    user = {
        "name": fake.name(),
        "address": fake.address(),
        "language_code": fake.language_code()
    }
    users.append(user)

# Example usage: Add 5 users to the list
for _ in range(5):
    add_user()

# Print the users list to verify the data
for user in users:
    print(user)