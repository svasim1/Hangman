<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hangman | Guess!</title>
    <link rel="stylesheet" href="hangman.css">
    <script>let correctWord = <?php echo json_encode($_POST["word"] ?? null); ?></script>
    <script src="hangman.js"></script>
</head>
<body>

    <h1>Hangman</h1>
    <h2>P2 guess!</h2>
    <p id="partialWord"></p>
    
    <div id="inputContainer">
    <input class="hoverEffect" id="guessInput" maxlength="1" type="text" placeholder="Enter a letter">
    <input class="hoverEffect" onclick="guess()" id="guess_button" type="button" value="Guess">
    </div>

</body>
</html>