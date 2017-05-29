import { render } from 'react-dom';
import React, { createElement as __, DOM as _ } from 'react';
import { Mosaic, MosaicWindow, Expand, Remove, DEFAULT_CONTROLS_WITHOUT_CREATION } from 'react-mosaic-component';
import '@blueprintjs/core/dist/blueprint.css';
import "react-mosaic-component/react-mosaic-component.css";
import './index.less';


const sections = {

    documents: {
        title: "documents",
        content: __('div', {className: 'content'}, ['left', _.br(), 'aaaa'] )
    },

    facets: {
        title: "facets",
        content: __('div', {className: 'content'}, 'right'),
    },

    preview: {
        title: "preview",
        content: __('div', {className: 'content'}, 'preview'),
    },

};







function App1 () {
    return __(Mosaic, {
    
        renderTile: e => __(MosaicWindow, {toolbarControls: DEFAULT_CONTROLS_WITHOUT_CREATION, title: sections[e].title}, sections[e].content),
        initialValue: {
            direction: 'column',
            first: 'facets',
            second: {
                direction: 'row',
                first: 'documents',
                second: 'preview'
            }
        }
    }); 
}



render (__(App1), document.body);


