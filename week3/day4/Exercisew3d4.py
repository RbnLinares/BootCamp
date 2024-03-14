################## Exercise 1 ################

# import os
# dir_path = os.path.dirname(os.path.realpath(__file__))

# def get_words_from_file(file_path):
#     with open(f'{dir_path}\{file_path}', 'r') as file:
#         words = file.read().splitlines()
#     return words

# import random

# def get_random_sentence(words, length):
#     if length < 2 or length > 20:
#         raise ValueError("Length must be between 2 and 20.")
#     sentence = ' '.join(random.choices(words, k=length))
#     return sentence.lower()

# def main():
#     print("This program generates a random sentence of a specified length.")
    
#     while True:
#         try:
#             length = int(input("How long do you want the sentence to be? (2-20): "))
#             if length < 2 or length > 20:
#                 print("Error: Length must be between 2 and 20.")
#                 continue
#             break
#         except ValueError:
#             print("Error: Please enter an integer.")
    
#     words = get_words_from_file('words.txt')
#     sentence = get_random_sentence(words, length)
#     print(sentence)

# if __name__ == "__main__":
#     main()

################## Exercise 2 ##################
    
import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(f"Salary: {salary}")

data["company"]["employee"]["birth_date"] = "1986-03-17"

with open('updated_sample.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

import json

with open('updated_sample.json', 'r') as json_file:
    data = json.load(json_file)

print(data)