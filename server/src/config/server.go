package config

import (
	"os"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/routers"
	"github.com/spf13/cobra"
)

var ServeCmd = &cobra.Command{
	Use:   "serve",
	Short: "start apllication",
	RunE:  server,
}

func server(cmd *cobra.Command, args []string) error {
	if mainRoute, err := routers.New(); err == nil {
		var addrs string = ":8080"
		if port := os.Getenv("PORT"); port != "" {
			addrs = ":" + port
		}

		mainRoute.Run(addrs)
		return nil
	} else {
		return err
	}
}
