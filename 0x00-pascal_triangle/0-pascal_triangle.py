#!/usr/bin/python3
# def pascal_triangle(n):
#     if n <= 0:
#         return []

#     triangle = [[1]]

#     for i in range(1, n):
#         row = [1]
#         for j in range(1, i):
#             row.append(triangle[i-1][j-1] + triangle[i-1][j])
#         row.append(1)
#         triangle.append(row)

#     return triangle
""" Module for calculating Pascal Triangle """


def pascal_triangle(n):
    """ Function for creating a pascal triangle as a list of lists
    n: number of rows
    returns empty list if n <= 0
    """
    if n <= 0:
        return ([])

    pascal = [[1]]
    for i in range(1, n):
        row = [1]
        prev = pascal[i - 1]
        for j in range(len(prev)):
            new = prev[j] + prev[j + 1] if j != len(prev) - 1 else 1
            row.append(new)

        pascal.append(row)

    return pascal

