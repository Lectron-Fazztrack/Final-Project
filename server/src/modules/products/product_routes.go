package products

import (
	"github.com/Lectron-Fazztrack/Final-Project/server/src/middleware"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func New(rt *gin.Engine, db *gorm.DB) {
	repo := NewRepo(db)
	svc := NewService(repo)
	ctrl := NewCtrl(svc)

	route := rt.Group("/products").Use(middleware.CheckAuth())
	{

		route.POST("", middleware.CheckAuthor(), middleware.Cloudinary(), ctrl.AddProduct)
		route.PUT("/:id", middleware.CheckAuthor(), middleware.Cloudinary(), ctrl.UpdateProduct)
		route.DELETE("/:id", middleware.CheckAuthor(), ctrl.DeleteProduct)
		route.GET("/:id", ctrl.GetById)
		route.GET("", ctrl.GetAllProduct)
		route.GET("/types/:type", ctrl.GetByType)

	}

}
