

module.exports = class NameService {

    constructor(gameNames, starNames, randomService) {
        this.gameNames = gameNames;
        this.starNames = starNames;
        this.randomService = randomService;
    }

    getRandomStarName() {
        return this.starNames[this.randomService.getRandomNumber(this.starNames.length - 1)];
    }

    getRandomStarNameInList(starNames) {
        return starNames.splice(this.randomService.getRandomNumber(starNames.length - 1), 1)[0];
    }

    getRandomGameName() {
        return this.gameNames[this.randomService.getRandomNumber(this.gameNames.length - 1)];
    }

    getRandomStarNames(count) {
        const list = [];

        let starNames = this.starNames.slice(); // Create a copy so we can remove from it when we've picked a random one.

        do {
            let nextName = this.getRandomStarNameInList(starNames);

            if (!list.includes(nextName)) {
                list.push(nextName);
            }
        } while (list.length < count);

        return list;
    }

};
