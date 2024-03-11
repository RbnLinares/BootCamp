####################### Exercise 3 ########################

import random
from ExercisesW3D2 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join(args)
        print(f"{dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet")

Lobo = PetDog('Lobo',5, 30)
Brenda = PetDog("Brenda", 8, 25)
Zorro = PetDog("Zorro", 4, 45)

Lobo.train()
Lobo.play("Lobo", 'Brenda', "Zorro")
Lobo.do_a_trick()

