# # # list (una estructura para poner informacion)

# # user_name = 'john'
# # user_email = "jon@gmail.com"
# # user_age = 25

# # user_info = [user_name, user_email, user_age]
# # print(user_info)

# # user_name_list = [user_name]
# # print(user_name_list)

# # user_name_list2 = list(user_name)
# # print(user_name_list2)

# # user_name_list3 = user_name.split()
# # print(user_name_list3)

# # user_info2 = input("Give me your name, email and age separeted by,: ").split(',')
# # print(user_info2)
# # #adding elements
# # user_info2.append('betzalel')
# # print (user_info2)

# # print(user_info2[-2])
# # #print(user_info2(0:4))

# # #changing an element
# # fav_color_list = ['blue', 'red', 'yellow']
# # fav_color_list[1] = green
# # #cambia el red por green
# # print (fav_color_list)

# # #sort() and sorted()
# fav_color_list = ['blue', 'red', 'yellow', 'green', 'pink' , 'blue']
# # fav_color_list.sort()
# # print(fav_color_list)
# # #los coloca alfabeticamente
# # new_list = sorted(fav_color_list)
# # print(fav_color_list)
# # print(new_list)

# # #quitar un elemento
# # fav_color_list.remove('yellow')
# # print(fav_color_list)
# # # si tienes dos palabras iguales solo va a quitar la primera

# # #Pop
# # fav_color_list.pop()
# # print(fav_color_list)
# # #remueve el ultimo elemento de la lista

# # fav_color_list.pop(2)
# # print(fav_color_list)
# # #remueve el segundo elemento de la lista

# # #index es el lugar en el que esta el elemento
# # print(fav_color_list.index('pink'))


# #exersice
# list_1 = [5, 10, 15, 20, 25, 50, 20]
# # # print(list_1.index(20))
# # # list_1[3] = 200
# # # print(list_1)

# print(max(list_1))
# print(min(list_1))
# print(sum(list_1))


# #tuples secuencia que no se puede modificar
# # some_tuple = (1,2,3,4)
# # print(some_tuple[2])
# # #some_tuple[2] = 15

# # fav_color_tuple = (tuple(fav_color_list))
# # print(fav_color_tuple)

# # a,b,c,d = (10,20,30,40)
# # print(a)
# # print(b)
# # print(c)
# # print(d)

# # sets: coleccion qu es unordered and no duplicates
# clean_set = set(fav_color_list)
# print(clean_set)

# clean_set.add("purple")
# clean_set.add('grey')
# clean_set.add('purple')
# print(clean_set)

# # unir 2 sets
# set2 = {'Jhon', 'lise', 'daniel'}
# joined_sets = clean_set.union(set2)
# print(joined_sets)

# #quitar un elemento
# joined_sets.remove('yellow')
# print(joined_sets)

# joined_sets.pop()
# print(joined_sets)


#Loops Es repetir una accion varias veces, cada repeticion se llama interaccion
# en python tenemos For Loops y While Loops
# for i in range(10):
#     print('python')

# for i in range(len('juliana')):
#     print('python')
#imprime la cantidad de letras que tiene la palabra
    
# students = ['john', 'bob', 'anna', 'lise']
# for each_student in students:
#     if each_student is 'anna':
#         print('hello anna')
#     else:
#         print(each_student)

# cities = ('tel aviv', 'sao paulo', "moscow", 'amsterdam')
# for city in cities:
#     print(f' I have been in {city}')

user_num = int(input('Give me a number'))
for i in range(1,11):
    print(user_num * i)

# while loop

# counter = 0
# while counter <=8:
#     counter += 1
#     print ('hello')

# password = ''
# while password != '12345':
#     password = input('password?')
#     if password == 'Ruben':
#         break
# print ('you got the right password')
    
# current_num = 0
# while current_num <= 10:
#     current_num +=1
#     # print(current_num)
#     if current_num == 5: 
#         continue
#     else:
#         print(current_num)



# toppings.append(toppings)
# i = toppings.append(toppings)
# price = 10
# top = 2.5
# total = [price + i * top]
# print(f'Your pizza wil have the following toppins: {','.join(toppings)}')
# print(f'The total price for your pizaa is:${price}')
