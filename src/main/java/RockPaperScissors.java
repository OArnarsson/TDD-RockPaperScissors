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
        });
    }
}
