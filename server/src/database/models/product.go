package models

import "time"

type Product struct {
	ProductId   uint      `gorm:"primaryKey" json:"id,omitempty"`
	ReviewId    uint      `gorm:"type:uint" json:"review_id"`
	Review      []Review  `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"review"`
	Name        string    `json:"name"`
	Image       string    `json:"image"`
	Stock       string    `json:"stock"`
	Telphone    int       `json:"telphone"`
	Amount      int       `json:"amount"`
	Price       int       `json:"price"`
	Type        string    `json:"type"`
	Sold        string    `json:"sold"`
	Description string    `json:"description"`
	CreatedAt   time.Time `gorm:"default:now(); not null" json:"created_at"`
	UpdatedAt   time.Time `gorm:"default:now(); not null" json:"updated_at"`
}

type Review struct {
	ReviewId   uint       `gorm:"primaryKey" json:"id,omitempty"`
	UserId     string     `gorm:"type:uuid;" json:"user_id"`
	User       User       `json:"user"`
	CheckoutId uint       `gorm:"type:uint" json:"Checkout_id"`
	Checkout   []Checkout `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;" json:"checkout"`
	Rate       float32    `json:"rate"`
	Comment    string     `json:"comment"`
}

type Reviews []Review
type Products []Product
