package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	// Seed the random number generator
	rand.Seed(time.Now().UnixNano())

	// Simulate a coin flip
	flip := rand.Intn(2) // Generates 0 or 1

	if flip == 0 {
		fmt.Println("Heads")
	} else {
		fmt.Println("Tails")
	}
}
