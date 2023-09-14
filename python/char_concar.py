# Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.
# If the string's length is odd drop the central element.
# For example:
# char_concat("abcdef")    == 'af1be2cd3'
# char_concat("abc!def")   == 'af1be2cd3' # same result


# my solution
def char_concat(s):
    n = len(s)
    if n % 2 == 1:
        n -= 1

    result = ""
    for i in range(n // 2):
        result += s[i] + s[-(i + 1)] + str(i + 1)

    return result
