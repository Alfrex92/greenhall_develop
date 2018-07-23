import React from 'react'
import MobileMenu from './MobileMenu'


class Menu extends React.Component {
    state = {
        openModal: false
      };
      onClick = () => {
        this.setState({ 
          openModal: !this.state.openModal
         }
          
        );   
      };

    render(props) {
        return (
            <React.Fragment>
                <div className="Menu" onClick={this.onClick}>
                  <i className="i-menu"></i>
                </div>
                {this.state.openModal && <MobileMenu openModal={this.state.openModal} onClick={this.onClick}/> }
            </React.Fragment>
        )
    }
}


export default Menu