# Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
# Consult the solution set-up for the exact data structure implementation depending on your language.

# Example:
# ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

# my solution


def ordered_count(str):
    # init a dictionary
    char_count = {}

    # iterate through each char in str
    for char in str:
        char_count[char] = char_count.get(char, 0) + 1

    # create list of tuples containing char and its count
    result = [(char, count) for char, count in char_count.items()]

    # return the result
    return result
