import React from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import './index.css';
import grapesjs from 'grapesjs';

class Canvas extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const editor = grapesjs.init({
            container: '#gjs',
            fromElement: true,
            height: '300px',
            widht: 'auto',
            storageManager: false,
            panels: { defaults: [] },
        });
    }
    render() {
        return (
            <div id="gjs">
                <h1>Hello World Component!</h1>
            </div>
        )
    }
}

export default Canvas;