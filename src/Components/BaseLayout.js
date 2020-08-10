import React from 'react';
import ContainerBox from './ContainerBox';

export default class BaseLayout extends React.Component {
    render(){
        return(
            <ContainerBox>{this.props.children}</ContainerBox>
        )
    }
}