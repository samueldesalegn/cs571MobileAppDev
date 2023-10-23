import { createStackNavigator } from '@react-navigation/stack';
import PersonalProfile from '../../components/profile/PersonalProfile';
import UpdateProfile from '../../components/profile/UpdateProfile';


const stack = createStackNavigator();

export default function ProfileStackNavigator() {
    return (
        <stack.Navigator>
            <stack.Screen name='PersonalProfile' component={PersonalProfile} />
            <stack.Screen name='UpdateProfile' component={UpdateProfile} />            
        </stack.Navigator>
    )
}
