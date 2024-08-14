package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	seed := time.Now().UnixNano() // Use current time as seed
	r := rand.New(rand.NewSource(seed))

	var playAgain string

	for {
		target := r.Intn(10) + 1 // Random number between 1 and 10
		var guess int

		fmt.Println("Guess the number between 1 and 10")

		for {
			fmt.Print("Enter your guess: ")
			fmt.Scanf("%d", &guess)

			if guess < target {
				fmt.Println("Too low! Try again.")
			} else if guess > target {
				fmt.Println("Too high! Try again.")
			} else {
				fmt.Println("Congratulations! You guessed the right number!")
				break
			}
		}

		fmt.Print("Do you want to play again? (yes/no): ")
		fmt.Scanf("%s", &playAgain)

		if playAgain != "yes" {
			fmt.Println("Thanks for playing!")
			break
		}
	}
}
