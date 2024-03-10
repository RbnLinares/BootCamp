def initialize_board():
    return [['' for _ in range(3)] for _ in range(3)]

def display_board(board):
    for row in board:
        print(' | '.join(row))
        print('-' * 9)

def player_input(player):
    while True:
        move = input(f"Player {player}, enter your move (row and column separated by a space): ")
        try:
            row, col = map(int, move.split())
            if 0 <= row < 3 and 0 <= col < 3:
                return row, col
            else:
                print("Invalid move. Please enter a valid row and column.")
        except ValueError:
            print("Invalid input. Please enter a number.")

def check_win(board):
    # Check rows
    for row in board:
        if row.count(row[0]) == len(row) and row[0] != '':
            return True
    # Check columns
    for col in range(3):
        if [row[col] for row in board].count(board[0][col]) == len(board) and board[0][col] != '':
            return True
    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] != '' or board[0][2] == board[1][1] == board[2][0] != '':
        return True
    return False

def play():
    board = initialize_board()
    current_player = 'X'
    
    while True:
        display_board(board)
        row, col = player_input(current_player)
        board[row][col] = current_player
        
        if check_win(board):
            display_board(board)
            print(f"Player {current_player} wins!")
            break
        
        # Check for a tie
        if all(cell != '' for row in board for cell in row):
            display_board(board)
            print("It's a tie!")
            break
        
        # Switch players
        current_player = 'O' if current_player == 'X' else 'X'

if __name__ == "__main__":
    play()