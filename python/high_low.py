def high_and_low(numbers):
    # split the input string into list of strings
    num_list = numbers.split()

    # convert strings to integers
    num_list = [int(num) for num in num_list]

    # check highest and lowest digit
    highest = max(num_list)
    lowest = min(num_list)

    # return the output in string
    return f"{highest} {lowest}"
