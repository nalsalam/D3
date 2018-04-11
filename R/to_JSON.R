# Run the script and then copy and paste the output to the .js file

library(tidyverse)
library(jsonlite)

send_df_to_js <- function(df){
  cat(
    paste(
      '<script>
      var data = ',toJSON(df),';
      </script>'
      , sep="")
  )
}

# For d3_scatter.js
# -----------------
# n <- 300
# random_data <- data_frame(x = runif(n)*10) %>% 
#   mutate(y = 0.5*x^3 - 1.3*x^2 + rnorm(n, mean = 0, sd = 80),
#          group = paste("group", sample(c(1,2,3), n, replace = T)))
# send_df_to_js(random_data)

# For d3_line.js
# --------------
prices <- read.csv("D3_line/prices.csv")
send_df_to_js(prices)
