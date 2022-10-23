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

	route := rt.Group("/products")
	{
		adminRoute := route.Group("").Use(middleware.CheckAuthor())
		{
			adminRoute.POST("", middleware.Cloudinary(), ctrl.AddProduct)
			adminRoute.PUT("/:id", middleware.Cloudinary(), ctrl.UpdateProduct)
			adminRoute.DELETE("/:id", ctrl.DeleteProduct)
		}

		route.GET("/:id", ctrl.GetById)
		route.GET("", ctrl.GetAllProduct)
		route.GET("/types/:type", ctrl.GetByType)

	}

}
