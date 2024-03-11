# print ('Hello')) Syntax Error = Especificos y claros

VALID_MOVES = [ i for i in range(1,10)]

while True:
    try: 
        move = int(input('input the move'))
        if move not in VALID_MOVES:
            print()
            raise ValueError
        break
    except ValueError:
        print()
        print('chose a number frpm 1-9')
        continue
    finally:
        print('Thank you for the ')

