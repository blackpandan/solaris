

module.exports = class DistanceService {

    DISTANCES = {
        LIGHT_YEAR: 30,
        MIN_DISTANCE_BETWEEN_STARS: 30,
        MAX_DISTANCE_BETWEEN_STARS: 300,
        BASE_SHIP_SPEED: 3  // 0.1 ly per tick
    }
    
    getDistanceBetweenLocations(loc1, loc2) {
        let xs = loc2.x - loc1.x,
            ys = loc2.y - loc1.y;

        xs *= xs;
        ys *= ys;

        return Math.sqrt(xs + ys);
    }

    getClosestLocations(loc, locs, amount) {
        let sorted = locs
            .filter(a => a.x !== loc.x && a.y !== loc.y) // Ignore the location passed in if it exists in the array.
            .sort((a, b) => {
                return this.getDistanceBetweenLocations(loc, a)
                    - this.getDistanceBetweenLocations(loc, b);
            });
        
        return sorted.slice(0, amount);
    }

    getClosestLocation(loc, locs) {
        return this.getClosestLocations(loc, locs, 1)[0];
    }

    getFurthestLocations(loc, locs, amount) {
        return this.getClosestLocations(loc, locs, locs.length).reverse().slice(0, amount);
    }

    getFurthestLocation(loc, locs) {
        return this.getFurthestLocations(loc, locs, 1)[0];
    }

    getScanningDistance(scanning) {
        return ((scanning || 1) + 2) * this.DISTANCES.LIGHT_YEAR;
    }
    
    getHyperspaceDistance(hyperspace) {
        return ((hyperspace || 1) + 3) * this.DISTANCES.LIGHT_YEAR;
    }

    getCarrierTickDistance() {
        return this.DISTANCES.LIGHT_YEAR / this.DISTANCES.BASE_SHIP_SPEED;
    }

    getAngleTowardsLocation(source, destination) {
        let deltaX = destination.x - source.x;
        let deltaY = destination.y - source.y;

        return Math.atan2(deltaY, deltaX);
    }

    getNextLocationTowardsLocation(source, destination, distance) {
        let angle = this.getAngleTowardsLocation(source, destination);

        return {
            x: source.x + (distance * Math.cos(angle)),
            y: source.y + (distance * Math.sin(angle)),
        };
    }

};
