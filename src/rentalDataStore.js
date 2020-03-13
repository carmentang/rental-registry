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
    data = {};

    updateValue(key, value) {
        this.data[key] = value;
    }

    sendDataToNetlify() {
        const encode = (data) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "rental-data", ...this.data })
        }).then(() => alert("Success!")).catch(error => alert(error));
    }
}

decorate(RentalDataStore, {
    data: observable,
    sendDataToNetlify: action,
});
