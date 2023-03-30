#!/usr/bin/python3


def canUnlockAll(boxes):
    """
    Determines if all the boxes can be opened.
    """
    n = len(boxes)
    unlocked = [False] * n  # Keep track of unlocked boxes
    unlocked[0] = True  # The first box is always unlocked
    stack = [0]  # Start with the first box
    while stack:
        box = stack.pop()
        for key in boxes[box]:
            if key >= 0 and key < n and not unlocked[key]:
                unlocked[key] = True
                stack.append(key)
                # If all boxes are unlocked, we can stop exploring
                if len(stack) == n:
                    return True
    return all(unlocked)  # If all boxes are unlocked, return True

# Example usage:
# canUnlockAll([[1], [2], [3], []])  # True
