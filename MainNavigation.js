import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from './Register'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home';
import Subcard from './Subcard'
import Description from './Description'
import ShoppingBag from './ShoppingBag';
import Splash from './Splash';




const MainNavigator = createStackNavigator({
   Splash:Splash,
    Register: {screen: Register},
    SignUp: SignUp,
    Login: {screen: Login},
    Home: {screen: Home},
    Subcard: {screen: Subcard},
    Description: {screen: Description},
    ShoppingBag: {screen: ShoppingBag},
    

    });

  const MainStack = createAppContainer(MainNavigator);

  export default MainStack;
