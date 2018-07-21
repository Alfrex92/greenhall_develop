import React from 'react'


class Menu extends React.Component {
    state = {
        openModal: false
      };
      onClick = () => {
        this.setState({ 
          openModal: !this.state.openModal }
          
        );   
        console.log(this.state.openModal)  
      };

    render(props) {
        return (
            <div className="Menu" onClick={this.onClick}>
                <ul className="Menu-list">
                    <li className="Menu-item">
                    Testinggggggg
                    
                    {this.state.openModal && <p>Hello</p> }
                    <a href="" className="Menu-link"></a></li>
                </ul>
            </div>
        )
    }
}


export default Menu