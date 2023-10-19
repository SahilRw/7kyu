# Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
# Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
# If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


# my solution
def order(sentence):
    words = sentence.split()

    sorted_words = [""] * len(words)

    for word in words:
        for char in word:
            if char.isdigit():
                position = int(char)
                sorted_words[position - 1] = word

    result = " ".join(sorted_words)

    return result
