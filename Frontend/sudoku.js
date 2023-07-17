grid = document.getElementById('grid');


function drawGrid(){
    let bottomMargin = 0;
    for(let i=1;i<=9;i++){
        bottomMargin = 0
        if(i%3==0)
            bottomMargin = 1;
        for(let j=1;j<=9;j++){
            const node = document.createElement(`input`);
            node.style.width = '25px';
            node.style.height = '25px';
            node.style.margin = '2px';
            node.setAttribute('id', `c${i}${j}`);
            node.addEventListener('input',(e)=>{
                gridCells(e.target);
            })
            // node.value = 0;
            if(j%3==0){
                node.style.marginRight = '8px';
            }
            if(bottomMargin){
                node.style.marginBottom = '8px'
            }
            grid.appendChild(node)  
        }
        
    }
    
}

function gridCells(e){
    e.style.color = 'red';
    e.style.fontWeight = "800";
    warnMessage = document.getElementById('warnMessage')
    if((e.value >=1 && e.value <=9) || !e.value){
        warnMessage.style.visibility = 'hidden';
    }else{
        warnMessage.style.visibility = 'visible';
    }
}

drawGrid()

function checkEmpty(grid, empty){
    for(empty.row = 0;empty.row<9;empty.row++){
        for(empty.col = 0;empty.col<9;empty.col++){
            if(grid[empty.row][empty.col]==0)
                return false;
        }
    }
    return true;
}

function isSafe(grid, row, col, num){
    let i=0, j=0;

    for(i=0;i<9;i++){
        if(grid[row][i]==num)
            return false;
    }

    for(i=0;i<9;i++){
        if(grid[i][col]==num)
            return false;
    }

    for(i=Math.floor(row/3)*3;i<=Math.floor(row/3)*3+2;i++){
        for(j=Math.floor(col/3)*3;j<=Math.floor(col/3)*3+2;j++){
            if(grid[i][j]==num)
                return false;
        }
    }

    return true;
}

function isValidSudoku(grid){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            for(let x=0;x<9;x++){
                if(grid[i][j]==0)
                    break;
                if((grid[i][j] == grid[i][x]) && j!=x)
                    return false;
            }
            for(let x=0;x<9;x++){
                if(grid[i][j]==0)
                    break;
                if((grid[i][j] == grid[x][j]) && i!=x)
                    return false;
            }
            for(let x=Math.floor(i/3)*3;x<Math.floor(i/3)*3+3;x++){
                for(let y=Math.floor(j/3)*3;y<Math.floor(j/3)*3+3;y++){
                    if(grid[i][j]==0)
                        break;
                    if((grid[i][j]==grid[x][y]) && (i!=x && y!=j))
                        return false;
                }
            }
        }
    }
    return true;
}

function solveGrid(grid){
    let empty = {row: 0, col:0}
    
    if(checkEmpty(grid, empty)){
        return true;
    }

    for(let num=1;num<=9;num++){
        if(isSafe(grid, empty.row, empty.col, num)){
            grid[empty.row][empty.col] = num;

            if(solveGrid(grid))
                return true;

            grid[empty.row][empty.col] = 0;
        }
    }

    return false;
}

function solve(){
    let grid = []
    //READ ALL VALUES
    console.log(grid);
    for(let i=0;i<9;i++){
        grid[i] = [];
        for(let j=0;j<9;j++){
            if(!document.getElementById(`c${i+1}${j+1}`).value){
                grid[i][j] = 0;
            }
            else{
                grid[i][j] = document.getElementById(`c${i+1}${j+1}`).value;
            }
        }
    }

    if(!isValidSudoku(grid)){
        document.getElementById('invalidSudoku').style.visibility = 'visible';
        return false;
    }else{
        document.getElementById('invalidSudoku').style.visibility = 'hidden';
    }
    //SOLVE THE SUDOKU
    if(solveGrid(grid)){
        console.log("Solved");
        for(i=0;i<9;i++){
            for(j=0;j<9;j++){
                document.getElementById(`c${i+1}${j+1}`).value = grid[i][j];
            }
        }
        // for(i=0;i<9;i++){
        //     for(j=0;j<9;j++){
        //         console.log(grid[i][j]);
        //     }
        // }
    }else{
        console.log("No Solution");
    }
}

function clearGrid(){
    for(let i=1;i<=9;i++){
        for(let j=1;j<=9;j++){
            document.getElementById(`c${i}${j}`).value = "";
        }
    }
}

// let c11 = document.getElementById('c11');
// c11.addEventListener('input', ()=>{
//     console.log(c11.value);
// })