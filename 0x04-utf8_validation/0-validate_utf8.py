#!/usr/bin/python3
"""UTF-8 Validation
"""
def validUTF8(data):
    """Number of bytes in the current UTF-8 character
    """
    num_bytes = 0

    # Mask to check if the most significant bit is set
    mask1 = 1 << 7

    # Mask to check the value of the second most significant bit
    mask2 = 1 << 6

    for byte in data:
        # If we're not in the middle of a character
        if num_bytes == 0:
            # Count the number of bytes in this UTF-8 character
            while mask1 & byte:
                num_bytes += 1
                mask1 = mask1 >> 1

            # If the first bit is not set, it's a one-byte character
            if num_bytes == 0:
                continue

            # If there are too many bytes in this character, it's invalid
            if num_bytes > 4:
                return False

        # If we're in the middle of a character
        else:
            # Check that the current byte starts with the bit pattern 10xxxxxx
            if not (byte & mask1 and not (byte & mask2)):
                return False

        # Decrement the number of bytes left in the current character
        num_bytes -= 1

    # If we're still in the middle of a character, it's invalid
    if num_bytes > 0:
        return False

    # All checks passed, data is a valid UTF-8 encoding
    return True
