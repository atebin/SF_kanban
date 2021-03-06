import React from 'react';
import './UserMenu.css';
import UserMenuDropdown from './UserMenuDropdown';

class UserMenu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: false,
        }
    }

    handlerClick = () => {
        this.setState(prevState => { 

            const newState = prevState.clicked ? false : true;

            return {
                clicked: newState,
            }
        })
    }

    handleLoginClick = () => {
        this.props.handleUserAuthorization(true);
    }

    handleLogoutClick = () => {
        this.props.handleUserAuthorization(false);
    }

    render() {

        const { isLogin, handleCreateDemoTasks } = this.props;
        const isClicked = this.state.clicked;

        return (
            <div className="kanban-header-usermenu" onClick={ this.handlerClick }>
                <img className="kanban-header-usermenu-avatar" src="./Images/user_avatar.jpg" />
                <img className="kanban-header-usermenu-arrow" src={`./Images/arrow_${ (this.state.clicked ? 'up' : 'down') }.svg`} />
                
                
                <UserMenuDropdown 
                    isLogin={ isLogin } 
                    isClicked={ isClicked } 
                    loginClick={ this.handleLoginClick } 
                    logoutClick={ this.handleLogoutClick }
                    handleCreateDemoTasks={ handleCreateDemoTasks }
                />
            </div>            
        )
    }
}

export default UserMenu;