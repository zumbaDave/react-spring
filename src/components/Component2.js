import React, { Component } from 'react';
import { Spring } from 'react-spring';
import { thisTypeAnnotation } from '@babel/types';

export class Component2 extends Component {
    render() {
        return (
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
        >
            {props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>Component 2</h1>
                        <p>Bacon ipsum dolor amet meatball drumstick ham pork loin beef pork venison bacon pancetta ground round strip steak short loin tri-tip. Sirloin ground round short ribs meatloaf tri-tip. Tri-tip beef ribs short loin shank ham pork chop pancetta beef capicola fatback. Ball tip pork belly beef ribs kielbasa tenderloin picanha biltong boudin meatloaf ribeye pancetta.</p>
                        <button style={btn} onClick={this.props.toggle}>Component 3</button>
                    </div>
                </div>
            )}
        </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}

export default Component2;
