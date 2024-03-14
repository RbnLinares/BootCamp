import os
dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    def __init__(self, words_list_file):
        with open(f'{dir_path}\{words_list_file}', 'r') as file:
             self.words = [line.strip().lower() for line in file]

    def is_valid_word(self, word):
        return word in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2)

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w)]

# checker = AnagramChecker('anagram.txt')
# anagrams = checker.get_anagrams('meat')
# print(anagrams)           





