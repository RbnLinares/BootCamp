# import time

# class GameOfLife:
#     def __init__(self, initial_state):
#         self.state = initial_state
#         self.height = len(initial_state)
#         self.width = len(initial_state[0])

#     def count_neighbours(self, x, y):
#         count = 0
#         for i in range(-1, 2):
#             for j in range(-1, 2):
#                 if i == 0 and j == 0:
#                     continue
#                 ni = x + i
#                 nj = y + j
#                 if 0 <= ni < self.height and 0 <= nj < self.width:
#                     count += self.state[ni][nj]
#         return count

#     def next_generation(self):
#         new_state = [[0 for _ in range(self.width)] for _ in range(self.height)]
#         for i in range(self.height):
#             for j in range(self.width):
#                 neighbours = self.count_neighbours(i, j)
#                 if self.state[i][j] == 1:
#                     if neighbours < 2 or neighbours > 3:
#                         new_state[i][j] = 0
#                     else:
#                         new_state[i][j] = 1
#                 elif neighbours == 3:
#                     new_state[i][j] = 1
#         self.state = new_state

#     def display(self):
#         for row in self.state:
#             print(''.join('#' if cell else '.' for cell in row))

# # Example usage
# initial_state = [
#     [0, 0, 0, 0, 0],
#     [0, 1, 1, 0, 0],
#     [0, 1, 1, 0, 0],
#     [0, 0, 0, 0, 0]
# ]

# game = GameOfLife(initial_state)
# game.display()

# for _ in range(5): # Run for 5 generations
#     game.next_generation()
#     game.display()
#     time.sleep(1) # Wait for 1 second between generations


# import copy
# import pygame
# from random import randint
import copy
import pygame
from random import randint

class GameLife():
    def __init__(self):
        self.width_count = 240
        self.height_count = 150
        self.size = 5 
        self.resolution = self.width, self.height = self.width_count * self.size + 1, self.height_count * self.size + 1
        self.FPS = 144
        self.screen = pygame.display.set_mode(self.resolution)
        self.clock = pygame.time.Clock()
        self.next_blocks_stage = [[0 for l in range(self.width_count)] for j in range(self.height_count)]
        self.blocks = [[randint(0, 1) for l in range(self.width_count)] for j in range(self.height_count)]
        

    def paint_block(self, field, pos):
        x, y = pos
        neighbors = 0
        for yS in range(y-1, y+2):
            for xS in range(x-1, x+2):
                if field[yS][xS] == 1:
                    neighbors += 1

        if field[y][x]:
            neighbors -= 1
            if neighbors == 2 or neighbors == 3:
                return 1
            else:
                return 0
        else:
            if neighbors == 3:
                return 1
            else:
                return 0

    def play(self):
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    quit()

            self.screen.fill(pygame.Color('black'))

            [pygame.draw.line(self.screen, (78,78,78), (x,0), (x, self.height)) for x in range(0, self.width, self.size)]
            [pygame.draw.line(self.screen, (78,78,78), (0,y), (self.width, y)) for y in range(0, self.height, self.size)]

            for x_block in range(1, self.width_count-1):
                for y_block in range(1, self.height_count-1):
                    if self.blocks[y_block][x_block] == 1:
                        pygame.draw.rect(self.screen, (255,255,255), (x_block * self.size + 2, y_block * self.size + 2, self.size-2, self.size-2))
                    self.next_blocks_stage[y_block][x_block] = self.paint_block(self.blocks, (x_block, y_block))

            self.blocks = copy.deepcopy(self.next_blocks_stage)

            pygame.display.set_caption("FPS: " + str(int(self.clock.get_fps())))
            self.clock.tick(self.FPS)
            pygame.display.flip()

game = GameLife()
game.play()

class GameLife():
    def __init__(self):
        self.width_count = 240
        self.height_count = 150
        self.size = 5 
        self.resolution = self.width, self.height = self.width_count * self.size + 1, self.height_count * self.size + 1
        self.FPS = 144
        self.screen = pygame.display.set_mode(self.resolution)
        self.clock = pygame.time.Clock()
        self.next_blocks_stage = [[0 for l in range(self.width_count)] for j in range(self.height_count)]
        self.blocks = [[randint(0, 1) for l in range(self.width_count)] for j in range(self.height_count)]
        

    def paint_block(self, field, pos):
        x, y = pos
        neighbors = 0
        for yS in range(y-1, y+2):
            for xS in range(x-1, x+2):
                if field[yS][xS] == 1:
                    neighbors += 1

        if field[y][x]:
            neighbors -= 1
            if neighbors == 2 or neighbors == 3:
                return 1
            else:
                return 0
        else:
            if neighbors == 3:
                return 1
            else:
                return 0

    def play(self):
        while True:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    quit()

            self.screen.fill(pygame.Color('black'))

            [pygame.draw.line(self.screen, (78,78,78), (x,0), (x, self.height)) for x in range(0, self.width, self.size)]
            [pygame.draw.line(self.screen, (78,78,78), (0,y), (self.width, y)) for y in range(0, self.height, self.size)]

            for x_block in range(1, self.width_count-1):
                for y_block in range(1, self.height_count-1):
                    if self.blocks[y_block][x_block] == 1:
                        pygame.draw.rect(self.screen, (255,255,255), (x_block * self.size + 2, y_block * self.size + 2, self.size-2, self.size-2))
                    self.next_blocks_stage[y_block][x_block] = self.paint_block(self.blocks, (x_block, y_block))

            self.blocks = copy.deepcopy(self.next_blocks_stage)

            pygame.display.set_caption("FPS: " + str(int(self.clock.get_fps())))
            self.clock.tick(self.FPS)
            pygame.display.flip()

game = GameLife()
game.play()