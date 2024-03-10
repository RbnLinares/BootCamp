# creando una clase

class Dog:

    def __init__(self,name, color, age=0):
        self.name = name
        self.color = color
        self.age = age 

    def bark(self):
        print(f' {self.name} goes Wof!!')

    def walk(self, meters):
        print(f'{self.name} walked {meters}')
    
    def rename(self, new_name):
        self.name = new_name

# creando objetos or (instances)
    
shelter_dog = Dog("Rex","Brown")
pitbull = Dog('Fera','Grey')
chowchow = Dog('Luigui', 'Gingi')
chowchow.favorite_toy = 'ball'

# print(shelter_dog.name, shelter_dog.color, shelter_dog.age)
# print(shelter_dog.__dict__)# el objeto es un diccionario. 

pitbull.bark()
shelter_dog.bark()
chowchow.bark()

pitbull.walk(500)
shelter_dog.walk(700)
chowchow.walk(200)

pitbull.rename("Flufy")
shelter_dog.bark()
chowchow.bark()

print(pitbull.name)

# Exercise 2
class Person():
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def show_details(self):
    print("Hello my name is " + self.name)

  def rename(self, new_name):
     self.name = new_name

first_person = Person("John", 36)
first_person.show_details()
first_person.rename('Elias')
print(first_person.name)