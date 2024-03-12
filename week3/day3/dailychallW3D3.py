class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be specified.")

    def area(self):
        return 3.14159 * (self.radius ** 2)

    def __str__(self):
        return f"Circle with radius {self.radius} and diameter {self.diameter}"

    def __add__(self, other):
        if isinstance(other, Circle):
            new_radius = (self.radius + other.radius) / 2
            return Circle(radius=new_radius)
        else:
            raise TypeError("Can only add two Circle instances.")

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            raise TypeError("Can only compare Circle instances.")

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            raise TypeError("Can only compare Circle instances.")

# Example usage
c1 = Circle(radius=50)
c2 = Circle(radius=100)
c3 = Circle(diameter=200)

print(c1) # Prints the circle's attributes
print(c1.area()) # Prints the circle's area

c4 = c1 + c2 # Adds two circles together
print(c4) # Prints the new circle's attributes

circles = [c1, c2, c3]
circles.sort() # Sorts the circles by radius

for circle in circles:
    print(circle) # Prints each circle's attributes

import turtle

def make_circle(circle, turtle_instance):
    turtle_instance.circle(circle.radius)

screen = turtle.Screen()
t= turtle.Turtle()

for circle in circles:
    make_circle(circle, t)

# turtle.done