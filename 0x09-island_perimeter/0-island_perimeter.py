#!/usr/bin/python3
"""Island Perimeter"""


def island_perimeter(grid):
    """
    Calculate the perimeter of an island in a grid.

    Args:
        grid: A list of lists where 1 represents land and 0 represents water

    Returns:
        The perimeter of the island
    """
    if not grid or not grid[0]:
        return 0

    rows = len(grid)
    cols = len(grid[0])
    perimeter = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                # Start with 4 sides for each land cell
                perimeter += 4

                # Subtract 2 for each adjacent land cell (shared edge)
                # Check cell above
                if r > 0 and grid[r-1][c] == 1:
                    perimeter -= 2

                # Check cell to the left
                if c > 0 and grid[r][c-1] == 1:
                    perimeter -= 2

    return perimeter
