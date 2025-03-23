body {
    text-align: center;
    font-family: Arial, sans-serif;
}

.game {
    width: 600px;
    height: 200px;
    border: 2px solid black;
    margin: auto;
    position: relative;
    overflow: hidden;
    background-color: lightgray;
}

#dino {
    width: 50px;
    height: 50px;
    background-color: blue;
    position: absolute;
    bottom: 0;
}

#obstacle {
    width: 30px;
    height: 30px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 100%;
}

#restart-btn {
    display: none;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #ff4444;
    color: white;
    border: none;
    cursor: pointer;
}
