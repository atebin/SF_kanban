import React from 'react';
import './UserMenu.css';

class UserMenuDropdown extends React.Component {

    render() {

        const {isLogin , isClicked} = this.props;

        if (isClicked) {

            return (
                <ul className="">
                    <li className={isLogin ? '' : ''}>Log in</li>
                    <li className={isLogin ? '' : ''}>Remove all tasks</li>
                    <li className={isLogin ? '' : ''}>Create demo tasks</li>
                    <li className={isLogin ? '' : ''}>Log out</li>
                </ul>
            )
        } else {
            return null
        }
    }
}

export default UserMenuDropdown;