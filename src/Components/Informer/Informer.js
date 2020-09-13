import React from 'react';
import './informer.css';

class Informer extends React.Component {

    render() {

        return (
            <div>
                {this.props.text} <span className='informer-value'>{this.props.value}</span>
            </div>
        );
    };
}

const enhancer = (Component, text) => {

    return class EnhanceInformer extends React.Component {

        render() {
            return (
                <Component text={text} value={ this.props.countTasks }/>
            )
        }
    }
}


export const InformerActive = enhancer(Informer, 'Active tasks: ');
export const InformerFinished = enhancer(Informer, 'Finished tasks: ');