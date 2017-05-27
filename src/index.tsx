import { render } from 'react-dom';
import React, { createElement as __, DOM as _ } from 'react';
import { Mosaic, MosaicWindow } from 'react-mosaic-component';
//import '@blueprintjs/core/dist/blueprint.css';
import "react-mosaic-component/react-mosaic-component.css";
import './index.less';

function App1 () {
    return __(Mosaic, {
    
        renderTile: e => __(MosaicWindow, {createNode: f => f, title: 'hello'}),
        initialValue: {
            direction: 'row',
            first: __('div', {className: 'content'}, ['left', _.br(), 'aaaa'] ),
            second: {
                direction: 'column',
                first: __('div', {className: 'content'}, 'right'),
                second: __('div', {className: 'content'}, 'right')
            }
        }
    }); 
}



render (__(App1), document.body);


