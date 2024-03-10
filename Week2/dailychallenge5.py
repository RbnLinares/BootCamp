# Challenge 1 : Sorting

# input_sequence = input("Enter a comma-separated sequence of words: ")
# words_list = input_sequence.split(',')
# sorted_words_list = sorted(words_list)
# sorted_sequence = ','.join(sorted_words_list)
# print(sorted_sequence)

# Challenge 2 : Longest Word

# import re

# def longest_word(sentence):
#     words = re.split(r'\s+', sentence)
#     longest_word = ''
#     for word in words:
#         if len(word) > len(longest_word):
#             longest_word = word
#     return longest_word

# print(longest_word("Margaret's toy is a pretty doll."))
# print(longest_word("A thing of beauty is a joy forever."))
# print(longest_word("Forgetfulness is by all means powerless!"))


import random
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728


number_counts = {}
for number in list_of_numbers:
    if number in number_counts:
        number_counts[number] += 1
    else:
        number_counts[number] = 1

couple_count = 0
for number in list_of_numbers:
    if target_number - number in number_counts:
        couple_count += 1
    if number_counts[number] > 1:
        couple_count += 1

couple_count = couple_count // 2

print(f"The number of couples summing to {target_number} is {couple_count}.")
