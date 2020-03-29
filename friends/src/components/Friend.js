import React, { Component } from 'react';
import { createFragmentComponent, graphql } from 'react-relay';


class Friend extends Component {
    render() {
            return (
                    <li>
                            {this.props.friend.firstName}
                            {this.props.friend.lastName}              
                    </li>
            )
    }
}

export default createFragmentComponent(Friend, {
    friend: graphql`
        fragment Friend_friend on Friend {
            id,
            firstName,
            lastName,
            gender,
            language,
            email,
            image
        }
    `,
    viewer: graphql`
        fragment Friends_viewer on User {
            id,
        }
    `,
});
