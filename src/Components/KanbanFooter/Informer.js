import React from 'react';
import './Informer.css';

class Informer extends React.Component {

    render() {
        if ( !this.props.isLogin ) {return null}
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
                <Component 
                    text={text} 
                    value={ this.props.value }
                    isLogin={ this.props.isLogin }
                />
            )
        }
    }
}


export const InformerActive = enhancer(Informer, 'Active tasks: ');
export const InformerFinished = enhancer(Informer, 'Finished tasks: ');
export const InformerName = enhancer(Informer, 'Kanban board by ');
export const InformerYear = enhancer(Informer, '');