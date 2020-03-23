import {action, observable, decorate} from 'mobx';

/*
How to interface with this store:
import {inject, observer} from 'mobx-react';

const MyClassName = inject('store')(observer(class MyClassName extends Component {
    ...
    this.props.store.callMethodOnStore();
    ...
    const variableFromStore = this.props.store.variableFromStore;
    ...
}));

export default MyClassName;
 */

export default class RentalDataStore {

    constructor(history) {
        this.history = history;
    }

    hasMultipleUnits = true;
    hasEvictions = [true, true, true, true, true];

    // Test: hardcoding a limit of 5 units & two evictions per unit to try to fix Netlify form
    data = {
        'ownerName': '',
        'ownership': '',
        'acquired': '',
        'street': '',
        'city': '',
        'state': '',
        'zipcode': '',
        'unit-1-unitNumber': '',
        'unit-1-bedrooms': '',
        'unit-1-bathrooms': '',
        'unit-1-occupancyStatus': '',
        'unit-1-occupancyStatusDetails': '',
        'unit-1-monthOccupied': '',
        'unit-1-yearOccupied': '',
        'unit-1-monthsRented': '',
        'unit-1-currentJanRent': '',
        'unit-1-includedUtilities': '',
        'unit-1-additionalCharges': '',
        'unit-1-totalAdditionalCharges': '',
        'unit-1-dateRentChanged': '',
        'unit-1-rentChangeAmount': '',
        'unit-1-currentRentAmount': '',
        'unit-1-eviction-1-month': '',
        'unit-1-eviction-1-reason': '',
        'unit-1-eviction-2-month': '',
        'unit-1-eviction-2-reason': '',
        'unit-2-unitNumber': '',
        'unit-2-bedrooms': '',
        'unit-2-bathrooms': '',
        'unit-2-occupancyStatus': '',
        'unit-2-occupancyStatusDetails': '',
        'unit-2-monthOccupied': '',
        'unit-2-yearOccupied': '',
        'unit-2-monthsRented': '',
        'unit-2-currentJanRent': '',
        'unit-2-includedUtilities': '',
        'unit-2-additionalCharges': '',
        'unit-2-totalAdditionalCharges': '',
        'unit-2-dateRentChanged': '',
        'unit-2-rentChangeAmount': '',
        'unit-2-currentRentAmount': '',
        'unit-2-eviction-1-month': '',
        'unit-2-eviction-1-reason': '',
        'unit-2-eviction-2-month': '',
        'unit-2-eviction-2-reason': '',
        'unit-3-unitNumber': '',
        'unit-3-bedrooms': '',
        'unit-3-bathrooms': '',
        'unit-3-occupancyStatus': '',
        'unit-3-occupancyStatusDetails': '',
        'unit-3-monthOccupied': '',
        'unit-3-yearOccupied': '',
        'unit-3-monthsRented': '',
        'unit-3-currentJanRent': '',
        'unit-3-includedUtilities': '',
        'unit-3-additionalCharges': '',
        'unit-3-totalAdditionalCharges': '',
        'unit-3-dateRentChanged': '',
        'unit-3-rentChangeAmount': '',
        'unit-3-currentRentAmount': '',
        'unit-3-eviction-1-month': '',
        'unit-3-eviction-1-reason': '',
        'unit-3-eviction-2-month': '',
        'unit-3-eviction-2-reason': '',
        'unit-4-unitNumber': '',
        'unit-4-bedrooms': '',
        'unit-4-bathrooms': '',
        'unit-4-occupancyStatus': '',
        'unit-4-occupancyStatusDetails': '',
        'unit-4-monthOccupied': '',
        'unit-4-yearOccupied': '',
        'unit-4-monthsRented': '',
        'unit-4-currentJanRent': '',
        'unit-4-includedUtilities': '',
        'unit-4-additionalCharges': '',
        'unit-4-totalAdditionalCharges': '',
        'unit-4-dateRentChanged': '',
        'unit-4-rentChangeAmount': '',
        'unit-4-currentRentAmount': '',
        'unit-4-eviction-1-month': '',
        'unit-4-eviction-1-reason': '',
        'unit-4-eviction-2-month': '',
        'unit-4-eviction-2-reason': '',
        'unit-5-unitNumber': '',
        'unit-5-bedrooms': '',
        'unit-5-bathrooms': '',
        'unit-5-occupancyStatus': '',
        'unit-5-occupancyStatusDetails': '',
        'unit-5-monthOccupied': '',
        'unit-5-yearOccupied': '',
        'unit-5-monthsRented': '',
        'unit-5-currentJanRent': '',
        'unit-5-includedUtilities': '',
        'unit-5-additionalCharges': '',
        'unit-5-totalAdditionalCharges': '',
        'unit-5-dateRentChanged': '',
        'unit-5-rentChangeAmount': '',
        'unit-5-currentRentAmount': '',
        'unit-5-eviction-1-month': '',
        'unit-5-eviction-1-reason': '',
        'unit-5-eviction-2-month': '',
        'unit-5-eviction-2-reason': '',
    };

    updateValue(key, value) {
        // Make sure to only update hardcoded fields that will be accepted by Netlify
        if (key in this.data) {
            this.data[key] = value;
        }
    }

    setHasMultipleUnits(value) {
        this.hasMultipleUnits = value;
    }

    setNoEvictions(unitIndex) {
        this.hasEvictions[unitIndex] = false;
    }

    sendDataToNetlify(history) {
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "rental-data", ...this.data })
        }).then(action(response => {
            history.push('/thanks', '');
        })).catch(action(error => alert(error)));
    }
}

decorate(RentalDataStore, {
    data: observable,
    hasMultipleUnits: observable,
    hasEvictions: observable,
    sendDataToNetlify: action,
});
