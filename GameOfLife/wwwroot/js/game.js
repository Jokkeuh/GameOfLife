//patterns
var empty = [0];
var dot = [
    [1]
];
var glider = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
];
var block = [
    [1, 1],
    [1, 1]
];
var beehive = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
];
var loaf = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
];


var lwss = [
    [0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0]
];
var boat = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

var tub = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];

var blinker = [
    [1, 1, 1]
];

var toad = [
    [0, 1, 1, 1],
    [1, 1, 1, 0]
];

var beacon = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
];

var pulsar = [
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]
];

var penta = [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0]
];

var mwss = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0]
];


var gosperGliderGun = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];





var updateClientGrid;
var updateGrid
var gridData;
var addPattern;
var chosenPattern = dot;
var state = true;
var pauseGame;
var stepTime = 60; //don't forget to add slider for this
var addPatternHighlight;
var RemovePatternHighlight;
async function makeCellAlive(row, col, pattern) {
   await $.ajax({

        type: 'POST',
        url: "/Game/MakeCellAlive",
        data: { row: row, col: col, pattern: pattern},
        success: function () {
            var cellId = 'cell-' + row + '-' + col;
            var cell = document.getElementById(cellId);
            if (cell){
                cell.classList.add("alive");
               
            }



        },
        error: function (error)
        {
            console.log(error);
        }
    });
}

function handleCellHover(row, col) {
    $(`#cell-${row}-${col}`).addClass('hovered');
    addPatternHighlight(chosenPattern, row, col)
}

// Function to handle mouse hover out of a cell
function handleCellHoverOut(row, col) {
    // Remove the class to revert the cell to its original state
    $(`#cell-${row}-${col}`).removeClass('hovered');
    RemovePatternHighlight();
}

// Bind mouseover and mouseout events to grid cells
$('.cell').mouseover(function () {
    const row = $(this).data('row');
    const col = $(this).data('col');
    handleCellHover(row, col);
}).mouseout(function () {
    const row = $(this).data('row');
    const col = $(this).data('col');
    handleCellHoverOut(row, col);
});

var flag = false;
addPattern = async function (patternName, row, col) {
    /*pauseGame(true);*/
    var pattern = patternName;
    
    //for (var i = 0; i < pattern.length; i++)
    //{
    //    for (var j = 0; j < pattern[i].length; j++) {
    //        var newRow = row + i;
    //        var newCol = col + j;
    //        if (pattern[i][j] === 1) {
    //            await makeCellAlive(newRow, newCol, pattern);
    //        }
    //    }
    //}
    await makeCellAlive(row, col, pattern);
    
    $("#unPauseButton").show();
}



addPatternHighlight = function (patternName, row, col) {
    var pattern = patternName;
    for (var i = 0; i < pattern.length; i++) {
        for (var j = 0; j < pattern[i].length; j++) {
            var newRow = row + i;
            var newCol = col + j;
            var cellId = 'cell-' + newRow + '-' + newCol;
            var cell = document.getElementById(cellId);
            if (pattern[i][j] === 1 && cell) {
                cell.classList.add("highlighted");
            }
        }
    }
}

RemovePatternHighlight = function () {
   $('.cell').removeClass("highlighted")
}


//pattern buttons header could be shortened
document.getElementById('pattern-dot').addEventListener('click', function () {
    console.log("dot");

    chosenPattern = dot;
});

document.getElementById('pattern-glider').addEventListener('click', function () {
    console.log("glider");

    chosenPattern = glider;
});

document.getElementById('pattern-block').addEventListener('click', function () {
    console.log("block");

    chosenPattern = block;
});

document.getElementById('pattern-beehive').addEventListener('click', function () {
    console.log("beehive");

    chosenPattern = beehive;
});
document.getElementById('pattern-loaf').addEventListener('click', function () {
    console.log("loaf");

    chosenPattern = loaf;
});
document.getElementById('pattern-lwss').addEventListener('click', function () {
    console.log("lwss");

    chosenPattern = lwss;
});
document.getElementById('pattern-boat').addEventListener('click', function () {
    console.log("boat");

    chosenPattern = boat;
});
document.getElementById('pattern-tub').addEventListener('click', function () {
    console.log("tub");

    chosenPattern = tub;
});
document.getElementById('pattern-blinker').addEventListener('click', function () {
    console.log("blinker");

    chosenPattern = blinker;
});
document.getElementById('pattern-toad').addEventListener('click', function () {
    console.log("toad");

    chosenPattern = toad;
});
document.getElementById('pattern-beacon').addEventListener('click', function () {
    console.log("beacon");

    chosenPattern = beacon;
});
document.getElementById('pattern-pulsar').addEventListener('click', function () {
    console.log("pulsar");

    chosenPattern = pulsar;
});
document.getElementById('pattern-mwss').addEventListener('click', function () {
    console.log("mwss");

    chosenPattern = mwss;
});
document.getElementById('pattern-gosperGliderGun').addEventListener('click', function () {
    console.log("gosperGliderGun");

    chosenPattern = gosperGliderGun;
});






$(document).ready(function () {
    $("#loading-overlay").hide();
    
    var connection = new signalR.HubConnectionBuilder().withUrl("/gamehub").build();
    
    $("#pauseButton").click(function () {
        if (!state) {
            pauseGame(true);
            $("#pauseButton").hide();
            $("#unPauseButton").show();
        } else {
            console.log("too fast");
        }
        
        
    });

    $("#unPauseButton").click(function () {
        if (state) {
            pauseGame(false);
            $("#unPauseButton").hide();
            $("#pauseButton").show();
        } else {
            console.log("too fast");
        }
    });



    

    // Function to pause/unpause the game
   pauseGame = function(newState) {
        state = newState;

       if (state) {
           
            clearInterval(intervalId);
            console.log("Game paused");
        } else {
            intervalId = setInterval(updateGrid, stepTime);
            console.log("Game resumed");
        }
    }
   

    // Initial game start
    intervalId = setInterval(updateGrid, stepTime);

    //not used atm 
    connection.on("updateGrid", function (data) {
        
        updateClientGrid(data);
    });

    connection.start().then(function () {
        console.log("SignalR connected");
    }).catch(function (err) {
        console.error("SignalR connection error: " + err.toString());
    });



    updateGrid = function() {
        $.ajax({
            url: '/Game/GetUpdatedGrid',
            type: 'GET',
            success: function (data) {



                // Update the client-side grid based on the received data
                if (state) {
                   
                    updateClientGrid(data);
                }
            },
            error: function (error) {
                console.error('Error updating grid:', error);
            }
        });
    }

    updateClientGrid = function(data) {
        if (data && data.cellStates) {
            gridData = data;
        }
        
        for (let row = 0; row < data.cellStates.length; row++) {
            for (let col = 0; col < data.cellStates[row].length; col++) {
                var cellId = 'cell-'+row+'-'+col;
                var cell = document.getElementById(cellId);

                var cellState = data.cellStates[row][col]

                if (cellState.isAlive) {
                    cell.classList.add('alive');
                    cell.style.border = `1px solid ${cellState.color}`;
                } else {
                    cell.classList.remove('alive');
                    cell.style.backgroundColor = `${cellState.color}`;
                    cell.style.border = `1px solid ${cellState.color}`;
                }
                // Update the class to reflect the new state
                
            }
        }
    }

    
 
});



