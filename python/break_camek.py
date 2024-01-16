# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""

# my solution


def solution(s):
    # initialize empty string to return result
    result = ""

    # iterate through each character in string
    for char in s:
        # check if char is uppercase
        if char.isupper():
            # if uppercase, add a space before the character
            result += " " + char
        else:
            # else append the character as is
            result += char

    # return final result
    return result
