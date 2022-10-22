package models

import "time"

type Checkout struct {
	CheckoutId   uint      `gorm:"primaryKey" json:"id,omitempty"`
	CheckoutName string    `json:"order_name"`
	UserId       string    `gorm:"type:uuid;" json:"user_id"`
	User         User      `json:"user"`
	ProductId    int       `json:"product_id"`
	Product      []Product `json:"product"`
	DelivAddress string    `json:"image"`
	Notes        string    `json:"stock"`
	Discount     int       `json:"telphone"`
	Total        int       `json:"amount"`
	CreatedAt    time.Time `gorm:"default:now(); not null" json:"created_at"`
	UpdatedAt    time.Time `gorm:"default:now(); not null" json:"updated_at"`
}

type Checkouts []Checkout
