matrix_string = """
['7','i','i']
['T','s','x']
['h','%','?']
['i',' ','#']
['s','M',' ']
['$','a',' '] 
['#','t','%']
['^','r','!']
"""
# Convert the matrix string into a 2D list
matrix = [eval(line.strip()) for line in matrix_string.strip().split('\n')]

# Initialize an empty list to store the decoded message
decoded_message = []

# Iterate through each column
for col in range(len(matrix[0])):
    # Initialize an empty string to store the characters in the current column
    column_chars = ""
    # Iterate through each row in the current column
    for row in matrix:
        # If the character is alphabetic, add it to the column_chars string
        if row[col].isalpha():
            column_chars += row[col]
        # If the character is not alphabetic and column_chars is not empty, add a space to the decoded message
        elif column_chars:
            decoded_message.append(column_chars)
            column_chars = ""
    # If there are any alphabetic characters left in column_chars after the loop, add them to the decoded message
    if column_chars:
        decoded_message.append(column_chars)

# Join the decoded message parts with spaces to form the final message
final_message = ' '.join(decoded_message)

print(final_message)