package database

import (
	"log"

	"github.com/Lectron-Fazztrack/Final-Project/server/src/database/models"
	"github.com/Lectron-Fazztrack/Final-Project/server/src/libs"
	"github.com/spf13/cobra"
)

var SeedCmd = &cobra.Command{
	Use:   "seed",
	Short: "start seeding",
	RunE:  seeder,
}

func seeder(cmd *cobra.Command, args []string) error {
	db, err := New()
	if err != nil {
		return err
	}
	admin, _ := libs.HashPassword("admin12345678")
	user, _ := libs.HashPassword("user12345678")

	var data1 = []models.User{
		{Email: "admin@gmail.com", Password: admin, Role: "admin"},
		{Email: "user@gmail.com", Password: user, Role: "user"},
	}
	var data2 = []models.Product{
		{Name: "admin@gmail.com"},
	}
	var data3 = []models.Review{
		{Comment: "admin@gmail.com"},
	}
	var data4 = []models.Checkout{
		{CheckoutName: "admin@gmail.com"},
	}

	if res := db.Create(&data1); res.Error != nil {
		return res.Error
	}
	if res := db.Create(&data2); res.Error != nil {
		return res.Error
	}
	if res := db.Create(&data3); res.Error != nil {
		return res.Error
	}
	if res := db.Create(&data4); res.Error != nil {
		return res.Error
	}
	log.Println("Seeding successful")
	return nil
}
