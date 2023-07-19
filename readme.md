# SUDOKU SOLVER

Please [Click here](https://sudokuspider.000webhostapp.com/) to use the App or use this link => https://sudokuspider.000webhostapp.com/

### HOW TO USE -
On visiting the website you will see a grid
 - You can manually fill out the values and click on solve
 - If it has a solution, the App will fill out the Sudoku
 - Any sort of Error is pointed out by the App

### Algorithm used -
The Sudoku Solver uses Backtracking to solve the Sudoku Grid
- First it checks for empty cells
- On finding an empty cell it will try values from 1 to 9
- If the value is safe to put, it repeats this process until either the sudoku is completed
  or it faces a dead end
- If it reaches a dead end, It backtracks until the cell that caused a wrong solution is corrected

Using Backtracking allows us to check all possible combinations until we the find the correct solution.

### Problems faced -
Implementing Backtracking was not the only challenge, since I was making a web app

##### Things to consider -
- **How will a user give input?**
So I first created a 9x9 grid, so that Users can fill in the values and get their solution
I used JavaScript to dynamically create cells and assigned unique IDs to each cell so that
during the stage of implementation of backtracking, I face no problem retrieving the values
into a data structure and refilling the correct values into the grid.

- **Filling out the solution**
After retrieving the values filled in the grid into a Data Structure (A 2D array in this case),
the Backtracking algorithm solves the 2D array and the values of the 2D array are to be filled
back into the grid.
The values filled by the user are displayed in bold red, and the values filled out by the
algorithm are displayed in black, so that it is **convinient** for the user.

### Improvements / Future updates
I am planning to provide a feature so that users can upload the link to an Image of a Sudoku
or upload a screenshot and get the Sudoku Solved.

Thanks for showing interest and taking the time to explore my project.
If you have any questions, feedback or suggestions please don't hesitate to reach out to me
Contact - deependraraliya15@gmail.com
