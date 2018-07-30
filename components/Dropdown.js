import Link from 'next/link'
import 'what-input'

class Dropdown extends React.Component {
    
    state = {
        openPanel: false,
      };

    onMouseEnter = () => {
        if(!document.querySelector("[data-whatinput='touch']"))
            this.onClick()
    }
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
    handleHoverOff = (e) => {
        this.setState({ 
            openPanel: !!this.state.openPanel,
        })
        const currentPanel = e.currentTarget
        // select that element only
        const panel = currentPanel.querySelector('.Dropdown-panel');
        panel.style.maxHeight = null;
    }
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
            <div className="Dropdown" onMouseLeave={this.handleHoverOff}>
                <a className="Dropdown-button"  onMouseEnter={this.onMouseEnter} onClick={this.onClick}>
                    施設概要
                </a>
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