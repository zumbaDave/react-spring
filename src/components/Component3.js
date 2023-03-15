import React from 'react';
import { Spring } from 'react-spring';

export default function Component1() {
    return (
        <div style={c3Style}>
            <h1>Component 3</h1>
            <p style={c3Style}>Bacon ipsum dolor amet meatball drumstick ham pork loin beef pork venison bacon pancetta ground round strip steak short loin tri-tip. Sirloin ground round short ribs meatloaf tri-tip. Tri-tip beef ribs short loin shank ham pork chop pancetta beef capicola fatback. Ball tip pork belly beef ribs kielbasa tenderloin picanha biltong boudin meatloaf ribeye pancetta.</p>       
        </div>
        
    )
}

const c3Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

