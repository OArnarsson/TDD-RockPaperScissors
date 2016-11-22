package oarnarsson;

import static org.junit.Assert.assertEquals;
import org.junit.Test;


public class testAPI
{
    API api = new API();

    @Test //0
    public void testInit() {
      assertEquals(0, api.totalWins);
      assertEquals(0, api.totalLosses);
      assertEquals(0, api.totalGames);
    }

    @Test //1
    public void testAction() {
      api.lockAction(2);
      assertEquals(2, api.playerAction);
    }

    @Test //2
    public void testDraw() {
      api.lockAction(0);
      api.MockComputerAction(0);
      assertEquals(0, api.getWinner());
    }

    @Test //3
    public void testWin() {
      api.lockAction(0);
      api.MockComputerAction(2);
      assertEquals(1, api.getWinner());
    }

    @Test //4
    public void testLose() {
      api.lockAction(0);
      api.MockComputerAction(1);
      assertEquals(2, api.getWinner());
    }

    @Test //5
    public void testUpdates() {
      api.lockAction(0);
      api.lockAction(0);
      assertEquals(2, api.totalGames);
    }

}
