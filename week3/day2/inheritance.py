# class Parent:
#     def speak(self):
#         print('Parent speaking')

# class Child(Parent):
#     def speak(self):
#         print('Child is speaking load')

# class Grandchild(Child):
#     pass

# person = Parent()
# person.speak()
# person2 = Child()
# person2.speak()
# person3 = Grandchild()
# person3.speak()
# #Si el 3 no tiene atributos agarra los del 2 y si el dos no tiene agarra los del 1 y asi susecivamente.

# class Animal:
#     def __init__(self, name, family, legs) -> None:
#         self.name = name
#         self.family = family
#         self.legs = legs

#     def make_sound(self):
#         print(f'{self.name} is making sound')

# class Dog(Animal):
#     def __init__(self, name, family = 'Canidae', legs = 4, trained = False):
#         super().__init__(name, family, legs)
#         # Animal().__init__(name, family, legs) Esto Y el Super es lo mismo
#         self.trained = trained

# class Poodle(Dog):
#     def __init__(self, name, legs, trained, cuteness, family = 'Canidae'):
#         super().__init__(name, family, legs, trained)
#         self.cuteness = cuteness


# animal1 = Animal('Toto', 'Canidae', 4)
# animal1.make_sound()

# dog = Dog('Puppy', 'Canidae', 4)
# dog.make_sound()

# Dog = Poodle('Rex', 4, True, 100)

# class Door:
#     def __init__(self, is_opened=False):
#         self.is_opened = is_opened

#     def open_door(self):
#         self.is_opened = True
#         print("Door is now open.")

#     def close_door(self):
#         self.is_opened = False
#         print("Door is now closed.")

# class BlockedDoor(Door):
#     def open_door(self):
#         raise Exception("Blocked door cannot be opened.")

#     def close_door(self):
#         raise Exception("Blocked door cannot be closed.")
    
# door = Door()
# print(door.is_opened) # False
# door.open_door() # Door is now open.
# print(door.is_opened) # True
# door.close_door() # Door is now closed.
# print(door.is_opened) # False

# blocked_door = BlockedDoor()
# print(blocked_door.is_opened) # False
# blocked_door.open_door() # Blocked door cannot be opened.
# blocked_door.close_door() # Blocked door cannot be closed.

class Alien():
    def __init__(self, name, planet):
        self.name = name
        self.planet = planet

    def fly(self):
        print(self.name, 'is flying!')

    def sleep(self):
        print("Aliens don't sleep")

class Animal():
    def __init__(self, name):
        self.name = name

    def sleep(self):
        print("zzzZZZZZ")

class Dog(Animal):
    def bark(self):
        print("{} barked, WAF !".format(self.name))

class AlienDog(Dog, Alien):
    pass
    # def bark(self):
    #     print("{} barked, 0ul10ul0u (that's how aliens dogs bark..) !".format(self.name))

alien_dog = AlienDog('Rex')
print(alien_dog.name)
alien_dog.sleep()

