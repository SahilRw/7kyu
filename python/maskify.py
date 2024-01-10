# Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
# Your task is to write a function maskify, which changes all but the last four characters into '#'.

# Examples (input --> output):
# "4556364607935616" --> "############5616"
#  "64607935616" -->      "#######5616"
#    "1" -->                "1"
# "" -->                 ""

# // "What was the name of your first pet?"
# "Skippy" --> "##ippy"
# "Nananananananananananananananana Batman!" --> "####################################man!"


# my solution
# return masked string
def maskify(cc):
    """
    cc = 'Skippy'
    (len(cc) - 4) prints 2 => prints the characters to be masked
    cc[-4:] prints 'ippy' => prints the characters not to be masked
    "#" * (len(cc) - 4) + cc[-4:] => masks the character{(len(cc)- 4)} except cc[-4:]
    """

    masked_str = "#" * (len(cc) - 4) + cc[-4:]

    return masked_str
