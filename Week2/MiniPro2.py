import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

display = ['*' for _ in word]

def play_hangman():
    guessed_letters = set()
    attempts = 6

    while attempts > 0:
        print("\n" + " ".join(display))
        print(f"Attempts left: {attempts}")
        guess = input("Guess a letter: ").lower()

        if guess in guessed_letters:
            print("You've already guessed that letter.")
            continue

        guessed_letters.add(guess)

        if guess in word:
            for i, letter in enumerate(word):
                if letter == guess:
                    display[i] = letter
        else:
            attempts -= 1
            print(f"{guess} is not in the word.")

        if '*' not in display:
            print("\nCongratulations! You've guessed the word.")
            break

    if attempts == 0:
        print("\nSorry, you've been hanged.")

if __name__ == "__main__":
    play_hangman()