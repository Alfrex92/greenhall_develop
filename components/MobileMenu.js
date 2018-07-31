import Links from './Links'
import React from 'react'

class MobileMenu extends React.Component {
    componentDidMount() {
        document.body.classList.add('no-scroll')
        this.avoidScrolling=  ((e)  =>{
            e.preventDefault();
            console.log(1111)
        }).bind(this);
        // if i dont use bind the context is this.MobileMenu (element)
        // if i use bind the context is Mobile Menu Component
        this.MobileMenu.addEventListener('touchmove', this.avoidScrolling)
    }
    componentWillUnmount() {
        document.body.classList.remove('no-scroll')
        this.MobileMenu.removeEventListener('touchmove', this.avoidScrolling);
    }
  render() {
    return (
        <div className="MobileMenu" ref={(el) => this.MobileMenu=el}>
            <div className="MobileMenu-close">
                <i className="i-close" onClick={this.props.onClick}></i>
            </div>
            <Links onClick={this.props.onClick}/>
        </div>
    )
  }
}

export default MobileMenu





