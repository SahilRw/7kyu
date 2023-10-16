# Modify the kebabize function so that it converts a camel case string into a kebab case.
# "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
# "camelsHave3Humps"  -->  "camels-have-humps"
# "CAMEL"  -->  "c-a-m-e-l"

# Notes:
# the returned string should only contain lowercase letters

# my solution
import re


def kebabize(st):
    parts = re.findall(r"[A-Za-z][a-z]*", st)
    kebabize = "-".join(part.lower() for part in parts)

    return kebabize
