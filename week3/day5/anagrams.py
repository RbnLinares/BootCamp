import random
from anagram_checker import AnagramChecker

def main():
    checker = AnagramChecker('anagram.txt') 
    while True:
        print("\n1. Input a word")
        print("2. Exit")
        choice = input("Choose an option: ")

        if choice == '1':
            word = input("Enter a word: ").strip().lower()
            if ' ' in word:
                print("Error: Only a single word is allowed.")
                continue
            if not word.isalpha():
                print("Error: Only alphabetic characters are allowed.")
                continue

            if checker.is_valid_word(word):
                anagrams = checker.get_anagrams(word)
                print(f"\nYOUR WORD: \"{word.upper()}\"")
                print("This is a valid English word.")
                print(f"Anagrams for your word: {', '.join(anagrams)}")
            else:
                print("Error: The word is not valid.")
        elif choice == '2':
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
