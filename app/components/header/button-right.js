import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

class ButtonRight extends Component {

    render() {

        const { icon, onPress, navigate, to } = this.props

        return (<TouchableOpacity
            style={{ right: 15 }}
            onPress={ () => navigate(to) }
        >
            <Icon
                name={icon}
                style={[ styles.icon ]}
            />
        </TouchableOpacity>)
    }
}

const styles = StyleSheet.create({
    icon: { fontSize: 20 }
})

export default ButtonRight
