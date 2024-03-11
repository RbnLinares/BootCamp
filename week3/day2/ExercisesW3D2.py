##################### Exercise 1 #####################

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# # Creating the Siamese class that inherits from Cat
# class Siamese(Cat):
#     pass

# # Creating instances of Bengal, Chartreux, and Siamese
# all_cats = [
#     Bengal("Mishu", 3),
#     Chartreux("Peluza", 2),
#     Siamese("Albino", 4)
# ]
# # Creating an instance of Pets and passing all_cats to it
# sara_pets = Pets(all_cats)

# # Taking all the cats for a walk
# sara_pets.walk()

#################### Exercise 2 ###################

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight
        if self_score > other_score:
            return f"{self.name} won the fight"
        elif other_score > self_score:
            return f"{other_dog.name} won the fight"
        else:
            return "It's a tie!"

# Creating three Dog instances
dog1 = Dog("Lobo", 5, 30)
dog2 = Dog("Brenda", 8, 25)
dog3 = Dog("Zorro", 4, 45)

# Fighting the dogs
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog1.fight(dog3))

# Running the dogs through the class
print(dog1.bark())
print(dog2.bark())
print(dog3.bark())

############################ Exercise 4 ###############################

class Family:
    def __init__(self, last_name, members=[]):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations, {self.last_name} family! A new member has been added.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family {self.last_name} members:")
        for member in self.members:
            print(f"{member['name']}, {member['age']} years old, {member['gender']}, {'child' if member['is_child'] else 'adult'}")

# Creating an instance of the Family class
family = Family("Smith", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
])

# Adding a new member to the family
family.born(name='Samantha', age=1, gender='Female', is_child=True)

# Checking if a family member is over 18
print(family.is_18('Michael'))
print(family.is_18('Samantha'))

# Presenting the family
family.family_presentation()

############################# Exercise 5 ##############################

class Family:
    def __init__(self, last_name, members=[]):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations, {self.last_name} family! A new member has been added.")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family {self.last_name} members:")
        for member in self.members:
            print(f"{member['name']}, {member['age']} years old, {member['gender']}, {'child' if member['is_child'] else 'adult'}")

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if self.is_18(name):
                    print(f"{member['incredible_name']} uses {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 years old")

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()

incredibles = TheIncredibles("Incredibles", [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
])

incredibles.incredible_presentation()

incredibles.born(name='Jack', age=1, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

incredibles.incredible_presentation()




