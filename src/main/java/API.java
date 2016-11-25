package oarnarsson;

import java.util.Random;
import org.json.simple.JSONObject;

public class API {
    int totalWins, totalLosses, totalGames, totalDraws,
    playerAction, computerAction, gameStatus;
    JSONObject apiJSON;

    //Total reset of game
    API() {
      apiJSON = new JSONObject();
      totalWins = new Integer(0);
      totalLosses = new Integer(0);
      totalDraws = new Integer(0);
      totalGames = new Integer(0);
      playerAction = new Integer(0);
      computerAction = new Integer(0);
      gameStatus = new Integer(-1);
    }

    //Returns the JSON object the webApp requires
    public JSONObject getJSON() {
      apiJSON.put("totalWins", totalWins);
      apiJSON.put("totalLosses", totalLosses);
      apiJSON.put("totalDraws", totalDraws);
      apiJSON.put("totalGames", totalGames);
      apiJSON.put("playerAction", playerAction);
      apiJSON.put("computerAction", computerAction);
      apiJSON.put("gameStatus", gameStatus);
      return apiJSON;
    }

    //Sets the game status to netural
    public void newGame() {
      gameStatus = -1;
    }

    //Locks player choice, finishes the game accordingly
    public void lockAction(int action) {
      playerAction = action;
      getComputerAction();
      gameStatus = getWinner();
      updateScore();
    }

    //Picks the computerAction
    private void getComputerAction() {
      Random rand = new Random();
      computerAction = rand.nextInt(3);
    }

    //For testing purposes
    public void MockComputerAction(int action) {
      computerAction = action;
    }

    //Keeps track of games played and results
    private  void updateScore() {
      totalGames += 1;

      if(gameStatus == 1)
        totalWins += 1;
      else if(gameStatus == 2)
        totalLosses += 1;
      else
        totalDraws += 1;
    }

    //Determines the result of the game
    public int getWinner() {
      /*Rock     = 0 = Draw
      * Paper    = 1 = playerWin
      * Scissors = 2 = playLose*/

      //Player picked Rock
      if(playerAction == 0) {
        if(computerAction == 1)
          return 2;
        if(computerAction == 2)
          return 1;
      }
      //Player picked Paper
      if(playerAction == 1) {
        if(computerAction == 0)
          return 1;
        if(computerAction == 2)
          return 2;
      }
      //Player picked Scissors
      if(playerAction == 2) {
        if(computerAction == 0)
          return 2;
        if(computerAction == 1)
          return 1;
      }
      //Draw
      return 0;
    }
}
