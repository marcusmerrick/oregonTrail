
class Wagon {
    constructor (capacity) {
        this.passengers = []
        this.capacity = capacity
        // a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
        // a passengers list, which is initially an empty array
    }
    

    getAvailableSeatCount() {
        let seats = this.capacity - this.passengers.length
        return seats
        
       // Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    }

    join(traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler)
        }

        // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

    }

    shouldQuarantine() {
        if (this.isHealthy = true) {
            return true
        } else {
            return false
        }

        // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    }

    totalFood() {
      let total = this.passengers.reduce((this.food, this.food) => a + b)
      return total
        // Returns the total amount of food among all passengers in the wagon.
    }

}