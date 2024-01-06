# The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
# The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
# If the score < 0, return 0.

# For example:
# checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
# checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
# checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
# checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


# my answer
def check_exam(key, answers):
    # initialize the score to 0
    score = 0

    # iterate through corresponding elements in 'key' and 'answers' array
    for k, a in zip(key, answers):
        # if no answer is provided, don't increment the score
        if a == "":
            score += 0
        # if the answer is correct, increment 4 to the score
        elif a == k:
            score += 4
        # if the answer is incorrect, decrement the score by 1
        else:
            score -= 1

    # if the score is negative return 0, else return the score
    return max(0, score)
