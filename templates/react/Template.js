import React from 'react';
import * as htmlContent from '../common.html';

export default (props) => {
    const richText = { __html: props.richText }
    return (<html>
    <head>
    </head>
    <body>
        <div className="iteration-test">
            <ul>
                {props.listOfObjects.map((item, index) => (<li key={index.toString()}>{item.name}</li>))}
            </ul>
            <ul>
                {Array(10).fill(null).map((value, index) => (<li key={index.toString()}>{index}</li>))}
            </ul>
        </div>
        <div className="condition-test">
            <Conditional {...props}/>
        </div>
        <div className="rich-text-test" dangerouslySetInnerHTML={richText}>
        </div>
        <div className="regex-test">
        </div>
        <div className="include-test" dangerouslySetInnerHTML={{ __html: htmlContent}}>
        </div>
    </body>
</html>)
};

function Conditional(props) {
    if (props.boolDataFalse) {
        return <div>this shouldn't show</div>;
    } else if (props.boolDataTrue) {
        return <div>this should show</div>;
    } else {
        return <div>if this shows, something's wrong</div>;
    }
}