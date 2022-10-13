import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageSourcePropType
}
from 'react-native';
import {FONTS,SIZES,COLORS} from '../../../constants';

interface User {
    name: string,
    img : ImageSourcePropType,
}

interface GreeterProps {
    user : User
}


const Greeter : React.FC<GreeterProps> = ({user}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={FONTS.h2}>Xin chào , {user.name}</Text>
                <Text style={FONTS.body3}>Chào mừng trở lại với Book Introducation</Text>
            </View>
            <Image style={styles.image} source={user.img}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    },
    
});

export default Greeter;