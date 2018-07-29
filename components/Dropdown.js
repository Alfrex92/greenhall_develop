import Link from 'next/link'

class Dropdown extends React.Component {
    
    state = {
        openPanel: false,
      };
    onClick = () => {
        this.setState({ 
            openPanel: !this.state.openPanel,
        },
        () => {
            const panel = document.querySelector('.Dropdown-panel');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
              } else {
                let eleHeight = panel.scrollHeight;
                panel.style.maxHeight = `${eleHeight}px`;
              }
        }
        );   
    };
    // handleHoverOff = (e) => {
    //     this.setState({ 
    //         openPanel: !!this.state.openPanel,
    //     })
    //     const panel = document.querySelector('.Dropdown-panel');
    //     panel.style.maxHeight = null;
    // }
    // onMouseLeave={this.handleHoverOff}
    getHeight = () => {
        console.log('hello')
        const panel = document.querySelector('.Dropdown-panel');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            let eleHeight = panel.scrollHeight;
            panel.style.maxHeight = `${eleHeight}px`;
          }
    }
    render() {
        return (
            <div className="Dropdown">
                <button className="Dropdown-button"  onMouseEnter={this.onClick} onClick={this.onClick}>
                    施設概要
                </button>
                <ul className="Dropdown-panel">
                    <Link href="/facility/room-201">
                        <a>Room-201</a>
                    </Link>
                    <Link href="/facility/room-203">
                        <a>Room-203</a>
                    </Link>
                    <Link href="/facility/room-304">
                        <a>Room-304</a>
                    </Link>
                    <Link href="/facility/room-401">
                        <a>Room-401</a>
                    </Link>
                </ul>
            </div>
        )
    }
}


export default Dropdown