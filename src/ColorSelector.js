import React from 'react';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';


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
        const styles = reactCSS({
            'default': {
              color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: this.props.color,
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });
          
        return <div className="color-selector">
            <div style={ styles.swatch } onClick={ this.handleClick }>
                <div style={ styles.color } />
            </div>
            { this.state.displayColorPicker ?
                <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose}/>
                    <ChromePicker
                        color={this.props.color}
                        onChangeComplete={(color) => this.props.onChange(color.hex)}
                    />
                </div>
            : null }
        </div>;
  }
}
