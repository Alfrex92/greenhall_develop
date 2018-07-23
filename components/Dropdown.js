
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
                <button className="Dropdown-button" onClick ={this.onClick}>
                    Click me
                </button>
                <div className="Dropdown-panel">My panel</div>
            </div>
        )
    }
}


export default Dropdown