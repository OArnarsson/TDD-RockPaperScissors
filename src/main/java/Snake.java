package snake;

import spark.*;
import static spark.Spark.*;
import spark.servlet.SparkApplication;


public class Snake implements SparkApplication {
    API api = new API();

    public static void main(String[] args) {
        staticFileLocation("/public");
        SparkApplication snake = new Snake();

        String port = System.getenv("PORT");
        if (port != null) {
            port(Integer.valueOf(port));
        }


        snake.init();
    }

    @Override
	public void init() {
            post("/resetBoard", (req, res) -> {
            api = new API();
            return "123";
        });
    }
}
