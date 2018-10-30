import React from 'react';


export default class Home extends React.Component {
  componentDidMount() {
    console.log(this.props.history.location);
}
    render() {
        return (
            <div>
                <a href='#/detail'>去detail</a>
            </div>
        )
    }
}
