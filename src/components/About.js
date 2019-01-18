import React, { Component } from 'react';

import './About.css';
import "typeface-karla";

class About extends Component {
    render() {
        return (
            <div className="About">
                <h1>
                    npm init...
                </h1>
                <p>
                    This utility will walk you through creating a Person similar to me.
                    It only covers the arguably most interesting items, and tries to guess sensible defaults.<br/><br/><br/>
                </p>
                <p>
                    <span>package name</span>: Thomas Dissert
                </p>
                
                <p>
                    <span>version</span>: (1.0.0)
                </p>
                
                <p>
                    <span>description</span>: I enjoy learning new technology stacks and in my spare time I like playing board games with my friends
                </p>
                
                <p>
                    <span>entry point</span>: (studyComputerScience.js)
                </p>

                <p>
                    <span>keywords</span>: adaptive, loadable, funny, open-minded
                </p>
                
                <p>
                    <span>author</span>: me, myself and I
                </p>
                
                <p>
                    <span>license</span>: (KIT)
                </p>
            </div>
        );
    }
}

export default About;