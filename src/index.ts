import { render } from 'react-dom';
import React, { createElement as __, DOM as _ } from 'react';
import { Mosaic } from 'react-mosaic-component';
//import '@blueprintjs/core/dist/blueprint.css';
import "react-mosaic-component/react-mosaic-component.css";
import './index.less';

function App () {
    return __(Mosaic, {
    
        renderTile: e => e,
        initialValue: {
            direction: 'row',
            first: __('div', {className: 'content'}, ['left', _.br(), 'aaaa'] ),
            second: __(Mosaic, {
                renderTile: e => e,
                initialValue: {
                    direction: 'column',
                    first: __('div', {className: 'content'}, 'right'),
                    second: __('div', {className: 'content'}, 'right')
                }
            });
            
            
            
        }
    }); 
}




render (__(App), document.body);


