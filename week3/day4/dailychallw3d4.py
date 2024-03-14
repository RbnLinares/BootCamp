import os
dir_path = os.path.dirname(os.path.realpath(__file__))

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        return words.count(word)

    def most_common_word(self):
        from collections import Counter
        words = self.text.split()
        word_counts = Counter(words)
        return word_counts.most_common(1)[0][0]

    def unique_words(self):
        return list(set(self.text.split()))
    
    @classmethod
    def from_file(cls, file_path):
        with open(f'{dir_path}\{file_path}', 'r') as file:
            text = file.read()
        return cls(text)

# text_instance = Text.from_file('the_stranger.txt')

# print(text_instance.word_frequency("good"))
# print(text_instance.most_common_word())
# print(text_instance.unique_words())

###### Bonus ########
import string
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords

class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)

    def remove_punctuation(self):
        return self.text.translate(str.maketrans('', '', string.punctuation))

    def remove_stopwords(self):
        stop_words = set(stopwords.words('english'))
        words = self.text.split()
        return ' '.join([word for word in words if word not in stop_words])

    def remove_special_characters(self):
        return ''.join(e for e in self.text if e.isalnum() or e.isspace())
    

text_mod = TextModification("A good book would sometimes cost as much as a good house.")
print(text_mod.remove_punctuation())
print(text_mod.remove_stopwords())
print(text_mod.remove_special_characters())