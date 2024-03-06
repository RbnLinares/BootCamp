# functions

# def say_hello():
#     print('Hello there!')

# say_hello()

# def say_hello(username):
#     '''prints a message to the username'''
#     print(f' {username},Hello there!')
# username1 = 'Ruben'
# say_hello(username1)

# def say_hello_lenguage(username:str, language:str):
#     '''prints a message to the username in the specified lenguage'''
#     if language == 'EN':
#         print(f'{username}, hello there!')
#     elif language == 'PT':
#         print(f'Oi, {username}')
#     elif language == 'HE':
#         print(f' שלום, {username}')
#     elif language == 'CH':
#         print(f'Nihao, {username}')
#     elif language == 'RU':
#         print(f'Priviet, {username}')
# username = 'Ruben'
# say_hello_lenguage(username, 'HE')

# say_hello_lenguage ('Ruben', 'HE') # py lo toma por la posicion 

# def sum(a, b=5):
#     print(a+b)
# sum(10,25)

# count = 100
# def calculation(a,b):
#    global count # global se usa para ingresar un elemento de afuera a la nueva funcion
#    result = a + b 
#    count += result
#    return count
# print(calculation(5,12))

# def sum_total(a,b,count):
#    calc = calculation(a,b)
#    calc += count
#    return calc

# print(sum_total(2,4,20))

# def country_info(country):
#     capital = ''
#     population = 0
#     if country == 'Israel':
#         capital = "Jerusalem"
#         population = 9364000
#     elif country == 'Brazil':
#         capital = 'brazilia'
#         population = 214000000
#     return(country, capital, population)
# print(country_info('Israel'))
# country, capital, pop = country_info('Israel')
# print(f'{country}\'s population is {pop}, and the capital is {capital}')

# passing list as argument


def selector_heat(names:list):
    for name in names:
       if name == 'Luna':
           print(f' Welcome to Revenclaw, {name}')
    else:
           print(f' Welcome to Hogwarts, {name}')

students = ['Harry', 'Hermaione', 'Ron', 'Luna']
(selector_heat(students))


















