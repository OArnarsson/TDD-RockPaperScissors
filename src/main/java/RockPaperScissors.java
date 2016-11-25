package oarnarsson;

import spark.*;
import static spark.Spark.*;
import spark.servlet.SparkApplication;


public class RockPaperScissors implements SparkApplication {
    API api = new API();

    public static void main(String[] args) {
        staticFileLocation("/public");
        SparkApplication rps  = new RockPaperScissors();

        String port = System.getenv("PORT");
        if (port != null) {
            port(Integer.valueOf(port));
        }


        rps.init();
    }

    @Override
    public void init() {
        put("/newGame", (req, res) -> {
            api.newGame();
            return api.getJSON();
        });

        put("/action", (req, res) -> {
          Integer actionID = Integer.parseInt(req.queryParams("actionID"));
          api.lockAction(actionID);
          return api.getJSON();
        });
    }
}
