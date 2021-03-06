const ValidationError = require('../errors/validation');

module.exports = class ShipTransferService {

    constructor(carrierService, starService) {
        this.carrierService = carrierService;
        this.starService = starService;
    }

    async transfer(game, player, carrierId, carrierShips, starId, starShips) {
        let carrier = this.carrierService.getById(game, carrierId);
        let star = this.starService.getById(game, starId);

        if (!carrier.ownedByPlayerId.equals(player._id)) {
            throw new ValidationError('The player does not own this carrier.');
        }

        if (!star.ownedByPlayerId.equals(player._id)) {
            throw new ValidationError('The player does not own this star.');
        }

        if (!carrier.orbiting) {
            throw new ValidationError('The carrier must be in orbit of a star to transfer ships.');
        }

        if (!carrier.orbiting.equals(star._id)) {
            throw new ValidationError('The carrier must be in orbit of a the desired star to transfer ships.');
        }

        let totalTransferShips = carrierShips + starShips;
        let totalShips = carrier.ships + star.garrison;

        if (totalTransferShips != totalShips) {
            throw new ValidationError('The total number of ships in the tranfer does not equal to the total number of ships garrisoned');
        }

        if (carrierShips <= 0) {
            throw new ValidationError('The number of carrier ships in the tranfer must be greater than 0. Carriers must have at least 1 ship.');
        }

        if (starShips < 0) {
            throw new ValidationError('The number of carrier ships in the tranfer must be 0 or greater.');
        }

        carrier.ships = carrierShips;

        let garrisonFraction = star.garrisonActual - star.garrison; // Keep hold of the fractional amount of garrison so we can add it back later.
        
        star.garrisonActual = starShips + garrisonFraction;
        star.garrison = Math.floor(star.garrisonActual);

        await game.save();

        return {
            player,
            star,
            carrier
        };
    }

};
