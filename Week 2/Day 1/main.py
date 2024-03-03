print(3 + 5)


#value types
#si escribo type es solo para ver que tipo es lo que escribo
# str: strings = cadena de caracteres 2 o mas
print(type('33'))

print("Hello". capitalize())
print("Hello". upper())
print("Hello". lower())

print('hello world python'. replace ('python', 'javascript'))
print('hello world python' *10) 
# hace que se repita 10 veces consecutivas 

print('hello world python \n' * 10) 
#hace que se repita 10 veces en una linea

#numbers
#dos tipos: int y float
#integers
print(type(5))
print(type(5.3))
print(10%3)

#ejercicio 1
my_name = "Ruben"
my_age = 37
my_future_age = my_age + 123879
print(my_name)

print(my_future_age)
print(my_age + 123879)

# cambiar de tipo
years_in_israel = '5'
# el numero 5 no es un numero es un str y se debe cambiar con el int para que lo tome como numero
years_future = 10 + int(years_in_israel)
print(years_future)

my_number = 2024
print(type(str(my_number)))

# ejercicio 2
first_nama = 'Ruben'
last_name = 'Linares'
full_name = first_nama + last_name
print(full_name)
# con + se combinan
print (first_nama, last_name)
#con , se coloca con el espacio
print(f'My name is {first_nama}, and my last name is {last_name}')

#Booleans
# es verdadero o falso < >
print(type(True))
#True => 1
#False => 0

print (4 <= 4)
print (3 < 4)
print ('4' == '4')
# si coloco las '' en uno solo no funciona porque no es el mismo tipo de valor
# == es para decir es lo mismo
# != es para decir que no es lo mismo

some_number = 10
my_fav_number = 8
print( some_number is my_fav_number)
#Falso, 'is' es lo mismo que ==
print(some_number is not my_fav_number)
# True, por que 'is not' es igual a decir != 

print(bool(0))
# el numero 0 quiere decir falso
print(True + True)
# la palabra true es igual a 1
# la palabra false es 0

count = 0
count += 1
count += 1
count += 5
print(count)

# esta forma es vieja
name = "Frank"
#"Hello, {}. You are {}.".format(name, age)

#The output is : 'Hello, Frank. You are 65.'

#funtion
# print, type, format f', .capitalize, .upper, .lower, etc

#imput option
#fav_color = input('give me some color') # the value of an input will always an str
#print(f'My favorite color is {fav_color}') # colocar el color en el terminal para obtener el resultado

# age = int(input('waht is your age'))
# print(f'My favorite number is {age}')

# if age == 21:
#     print ('You can drink at the pub!')
# elif age > 18:    
#     print ('you can come to the pub')
# elif age <= 12:
#     print( 'You are a child')
# else:
#     print ('You can\'t come to the pub') 

# if age is 21:
#     print ('You can drink at the pub!')
# elif age >= 12 and age <= 18:    
#     print ('you  are not allowed to come to the pub')
# elif age > 18:
#     print( 'You can come. Yeah!!')
# else:
#     print ('You can\'t come to the pub') 

number = int(input('Gimme a number between 1 to 100'))

if number%3 == 0 and number%5 == 0:
    print('FizzBuzz')
elif number%3 == 0:
    print('Fizz')
elif number%5 == 0:
    print('Buzz')







