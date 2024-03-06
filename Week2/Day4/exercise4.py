# Exercise 1 : What Are You Learning ?

# def display_message():
#     """This function prints a sentence about what you are learning in this course."""
#     print("In this course, I am learning how to create and call functions in Python.")
# display_message()

# #Exercise 2: What’s Your Favorite Book ?

# def favorite_book(title):
#     """ This function prints a message about a favorite book, using the provided title."""
#     print(f"One of my favorite books is {title}")
# favorite_book("Harry Potter")

# #Exercise 3 : Some Geography

# def describe_city(city, country):
#     """ This function prints a sentence describing a city and its country, with a default country value."""
#     print(f"{city} is in {country}")
# describe_city("Caracas", "Venezuela")

# Exercise 4 : Random

# import random
# def compare_numbers(input_number):
#     random_number = random.randint(1, 100)
#     if input_number == random_number:
#         print("Success! The numbers are the same.")
#     else:
#         print(f"Fail! The numbers are different. Your number was {input_number} and the random number was {random_number}.")
# compare_numbers(74)

# Exercise 5 : Let’s Create Some Personalized Shirts!

# def make_shirt(size="large", text="I love Python"):
#     print(f"The size of the shirt is {size} and the text is '{text}'")
# make_shirt()

# make_shirt(size="medium")

# make_shirt(size="small", text="Python is fun!")

# make_shirt(text="Py is awesome!", size="extra large")

# Exercise 6 : Magicians…

# List of magician's names
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# def show_magicians(magicians):
#     for magician in magicians:
#         print(magician)

# def make_great(magicians):
#     for i in range(len(magicians)):
#         magicians[i] = "The Great" + magicians[i]

# make_great(magician_names)
# show_magicians(magician_names)

# Exercise 7 : Temperature Advice
                # 1.
# import random
# def get_random_temp():
#     '''This function returns a random temperature between -10 and 40 degrees Celsius.'''
#     return random.randint(-10, 40)

# for _ in range(1): # Testing with (x) random temperatures
#     temp = get_random_temp()
#     print(f"The random temperature is: {temp} degrees Celsius")
#                  # 2.
# def main():
#     temp = get_random_temp()
#     print(f"The temperature right now is {temp} degrees Celsius.")
#                 # 3.
#     if temp < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today.")
#     elif 0 <= temp < 16:
#         print("Quite chilly! Don’t forget your coat.")
#     elif 16 <= temp < 24:
#         print("It's a bit chilly. Don't forget your jacket.")
#     elif 24 <= temp < 32:
#         print("It's a nice day. You can wear a light jacket.")
#     elif 32 <= temp <= 40:
#         print("It's warm today. You can wear a t-shirt.")
# main()
                # 4

# import random

# def get_random_temp(season):
#     """This function returns a random temperature based on the season."""
#     if season == 'winter':
#         lower_limit = -10
#         upper_limit = 16
#     elif season == 'spring':
#         lower_limit = 16
#         upper_limit = 23
#     elif season == 'summer':
#         lower_limit = 24
#         upper_limit = 32
#     elif season == 'autumn' or season == 'fall':
#         lower_limit = 16
#         upper_limit = 23
#     else:
#         print("Invalid season. Please enter a valid season.")
#         return None

#     return random.randint(lower_limit, upper_limit)

# def main():
#     season = input("Enter the season (winter, spring, summer, autumn/fall): ") 
#     temp = get_random_temp(season)  
#     if temp is not None:
#         print(f"The temperature right now is {temp} degrees Celsius.")    
# main()
              
                     # 5. BONUS
# import random

# def get_random_temp(season):
#     """ This function returns a random floating-point temperature based on the season."""
#     if season == 'winter':
#         lower_limit = -10
#         upper_limit = 16
#     elif season == 'spring':
#         lower_limit = 16
#         upper_limit = 23
#     elif season == 'summer':
#         lower_limit = 24
#         upper_limit = 32
#     elif season == 'autumn' or season == 'fall':
#         lower_limit = 16
#         upper_limit = 23
#     else:
#         print("Invalid season. Please enter a valid season.")
#         return None
#     return round(random.uniform(lower_limit, upper_limit), 1) 
# def main():
#     season = input("Enter the season (winter, spring, summer, autumn/fall): ") 
#     temp = get_random_temp(season)
#     if temp is not None:
#         print(f"The temperature right now is {temp} degrees Celsius.")
# main ()

                # 6. BONUS

# def main():
#     month = int(input("Enter the month number (1 = January, 12 = December): "))
    
#     if 1 <= month <= 2 or 12 <= month <= 11:
#         season = 'winter'
#     elif 3 <= month <= 5:
#         season = 'spring'
#     elif 6 <= month <= 8:
#         season = 'summer'
#     else:
#         season = 'autumn'
    
#     print(f"The season right now is {season}.")
# main()

# Exercise 8 : Star Wars Quiz
data = [
     {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]
def take_star_wars_quiz(questions):
    correct_count = 0
    incorrect_count = 0
    wrong_answers = []

    for question in questions:
        user_answer = input(question["question"] + " ")
        if user_answer.lower() == question["answer"].lower():
            correct_count += 1
            print("Correct!")
        else:
            incorrect_count += 1
            wrong_answers.append((question["question"], user_answer, question["answer"]))
            print(f"Incorrect. The correct answer is {question['answer']}.")

    print(f"\nYou answered {correct_count} questions correctly and {incorrect_count} questions incorrectly.")
    print(f"Your total score is {correct_count}/{len(questions)} with a {correct_count/len(questions)*100:.2f}% accuracy.")

    if wrong_answers:
        print("\nHere are the questions you got wrong:")
        for q, ua, ca in wrong_answers:
            print(f"{q}: You answered '{ua}', but the correct answer is '{ca}'.")

    if incorrect_count >= 3:
        play_again = input("You had more than 3 wrong answers. Would you like to play again? (yes/no) ")
        if play_again.lower() == "yes":
            take_star_wars_quiz(data)

take_star_wars_quiz(data)
