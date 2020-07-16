
class Traveler {
    constructor (name) {
        this.name = name
        food = 1
//food needs an initial value of 1        
        isHealthy = Boolean(true)
    }
    hunt() {
// increases the traveler's food by 2
        food = food + 2
    }
    eat() {
        if (food > 0) {
            food - 1
        } else {
            isHealthy = false
        }
// Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    }

}
