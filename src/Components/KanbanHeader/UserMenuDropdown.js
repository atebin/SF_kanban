import React from 'react';
import '../KanbanMain/AddTaskElement.css';
import './UserMenu.css';

class UserMenuDropdown extends React.Component {

    render() {

        const {isLogin , isClicked, loginClick, logoutClick, handleCreateDemoTasks} = this.props;

        if (isClicked) {

            if (isLogin) {
                return (
                    <>
                        <img className="kanban-header-usermenu-romb" src="./Images/romb.svg" />
                        <ul className=" dropdown-list dropdown-list-usermenu">
                            <li className={'dropdown-list-item' + (isLogin ? '' : '')} onClick={ handleCreateDemoTasks }>Create demo tasks</li>
                            <li className={'dropdown-list-item' + (isLogin ? '' : '')} onClick={ logoutClick }>Log out</li>
                        </ul>
                    </>
                )
            } else {
                return (
                    <>
                        <img className="kanban-header-usermenu-romb" src="./Images/romb.svg" />
                        <ul className=" dropdown-list dropdown-list-usermenu">
                            <li className={'dropdown-list-item' + (isLogin ? '' : '')} onClick={ loginClick }>Log in</li>
                        </ul>
                    </>
                )
            }
        } else {
            return null
        }
    }
}

export default UserMenuDropdown;