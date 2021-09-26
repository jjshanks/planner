'use strict';

const e = React.createElement;

class PingButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return e(
            'button',
            { onClick: () => alert('Ping not implemented yet') },
            'Ping'
        );
    }
}

const domContainer = document.querySelector('#ping_button_container');
ReactDOM.render(e(PingButton), domContainer);