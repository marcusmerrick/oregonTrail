
class Wagon {
    constructor (capacity) {
        this.passengers = []
        this.capacity = capacity
        // a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
        // a passengers list, which is initially an empty array
    }
    getAvailableSeatCount() {
        for (let index = this.passengers.length; index < this.passengers.length; index = index - 1)
       // Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    }

    join(traveler) {
        // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

    }

    shouldQuarantine() {
        // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    }

    totalFood() {
        // Returns the total amount of food among all passengers in the wagon.
    }

}