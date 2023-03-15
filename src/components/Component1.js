import React from 'react';
import { Spring } from 'react-spring';

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                        <p>Bacon ipsum dolor amet meatball drumstick ham pork loin beef pork venison bacon pancetta ground round strip steak short loin tri-tip. Sirloin ground round short ribs meatloaf tri-tip. Tri-tip beef ribs short loin shank ham pork chop pancetta beef capicola fatback. Ball tip pork belly beef ribs kielbasa tenderloin picanha biltong boudin meatloaf ribeye pancetta.</p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}
                        >
                            {props=> (
                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
        
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}
