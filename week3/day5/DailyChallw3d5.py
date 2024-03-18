# Part 1: Quiz Answers
# What is a class? A class is a blueprint for creating objects 
# (a particular data structure), providing initial values for state 
# (member variables or attributes), and implementations of behavior 
# (member functions or methods). The user-defined objects are created 
# using the class keyword.
# # What is an instance? An instance is a single occurrence of an object.
# When a class is defined, no memory is allocated but when it is 
# instantiated (i.e., an object is created) memory is allocated.
# What is encapsulation? Encapsulation is the mechanism of bundling 
# the data (variables) and methods that operate on the data into a 
# single unit, a class. It is a way to ensure that the data is not 
# accessed by the code outside this unit.
# # What is abstraction? Abstraction is a process of hiding the 
# implementation details and showing only the functionality to the user.
# In other words, it deals with the outside view of an object (interface).
# # What is inheritance? Inheritance is a mechanism in which one class 
# acquires the properties (methods and fields) of another class. With the use of inheritance, information is made manageable in a hierarchical order.
# # What is multiple inheritance? Multiple inheritance is a feature of 
# some object-oriented programming languages in which a class can inherit from more than one superclass.
# # What is polymorphism? Polymorphism allows methods to do different 
# things based on the object that it is acting upon. It is a way to 
# use a class exactly like its parent so there is no need to redefine 
# what is already defined in the parent class.
# # What is method resolution order or MRO? Method Resolution Order (MRO) 
# is the order in which the base classes are searched when executing
# a method. It is used to determine the precedence of classes in 
# case of multiple inheritance.

import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.cards = []
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.create_deck()

    def create_deck(self):
        for suit in self.suits:
            for value in self.values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if not self.cards:
            raise ValueError("The deck is empty.")
        return self.cards.pop()

deck = Deck()
deck.shuffle()
print(deck.deal())
