import React from 'react'
import { TwitterPicker } from 'react-color'


export class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
        }
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return <div>
            <button className="button" onClick={ this.handleClick }>Pick Color</button>
            { this.state.displayColorPicker ? <div style={ popover }>
            <div style={ cover } onClick={ this.handleClose }/>
            <TwitterPicker
                color={this.props.color}
                onChangeComplete={(color) => this.props.onChange(color.hex)}
            />
            </div> : null }
        </div>;
  }
}
