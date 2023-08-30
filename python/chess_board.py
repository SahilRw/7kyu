# Your task is to find the maximum number of queens that can be put on the board so that there would be one single unbeaten square (ie. threatened by no queen on the board).
# The Queen can move any distance vertically, horizontally and diagonally.

# Input
# The queens(n) function takes the size of the chessboard.

# Output
# The maximum number of queens to leave one single unbeaten square
# Return 0 if n is negative.


# my solution
def queens(n):
    if n <= 2:
        return 0
    elif n == 3:
        return 2
    else:
        return (n - 1) * (n - 2)
