# RockPaperScissors [![Build Status](https://travis-ci.com/OArnarsson/TDD-RockPaperScissors.svg?token=cXTkx6Qw1Hk5t2yqmrmW&branch=master)](https://travis-ci.com/OArnarsson/TDD-RockPaperScissors)
### About the project
This small RockPaperScissors game was made to get some practice on both front-end back-end development.
The game is constructed like so:
The computer is rolling between all possible actions.  
When the player locks in his action, the computer slows down the roll, eventually locking in an action.
Player action vs Computer action is compared and corresponding result is displayed.
<br><br>

### Development manual
You can download the game from [**this repository**](https://github.com/OArnarsson/TDD-RockPaperScissors) or fork it to you own, after downloading, unzip the game to a folder of your choosing. 
In order to run the application it´s required to have **Java jdk 1.8** or greater. If you do not have **java 1.8** or greater installed you will need to download and install it to you computer. Java can be downloaded from the [**Oracle website**](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). 
The game comes packed with a Gradle wrapper(gradlew 3.1) to set up the game follow the administration direction here below.  
When making visual changes, you can navigate to [<code>'/src/main/resources/public'</code>](https://github.com/OArnarsson/TDD-RockPaperScissors/tree/master/src/main/resources/public) and run the <code>grunt</code> command.  
Grunt is configured to compile the .scss files into the .css file linked in the html. Grunt also runs 'browserSync' to help you see what you're doing.
<br><br>

### Useful gradle commands
This project comes packed with a Gradle wrapper (gradlew 3.1), so there is no need for local gradle setup.
Simply run these simple commands in the project root directory <code>~/RockPaperScissors</code>
~~~~
./gradlew assemble - Assembles the outputs of the project.
./gradlew build - Builds the project and runs test in /src/test folder.
./gradlew stage - Builds creates a 'Build/' folder containing a deployable web application 
./gradlew tasks - Displays list of tasks.
gradlew assemble - For cmd/powershell users.
gradlew build - For cmd/powershell users.
gradlew stage - For cmd/powershell users.
gradlew tasks - For cmd/powershell users.
~~~~
