import { expect } from '@wdio/globals';
import MainScreen from '../screen_objects/android/main.screen';
import LoginSignUpScreen from '../screen_objects/android/login.signup.screen';
import MenuScreen from '../screen_objects/android/menu.screen';
import FormComponentsScreen from '../screen_objects/android/form.components.screen';
import SwipeScreen from '../screen_objects/android/swipe.screen';

describe('mobile tests', ()=>{

    it('Sign up then Login', async ()=>{

        await MainScreen.tapMenuButton();
        await MenuScreen.tapLoginButton();
        
        await LoginSignUpScreen.toggleSignUpForm();
        await LoginSignUpScreen.enterEmail("donkey@mule.co");
        await LoginSignUpScreen.enterPassword("zxcvbnm123");
        await LoginSignUpScreen.confirmPassword("zxcvbnm123");
        await LoginSignUpScreen.tapSignUpButton();

        const msg = await driver.getAlertText();
        console.log(`DEBUG: Msg = ${msg}`);

        expect(msg).toContain('You successfully signed up!');
        await driver.acceptAlert();

        await LoginSignUpScreen.toggleLoginForm();
        await LoginSignUpScreen.tapLoginButton();

        const loginMsg = await driver.getAlertText();
        console.log(`DEBUG 2: loginMsg = ${loginMsg}`);

        expect(loginMsg).toContain('You are logged in!');
        await driver.acceptAlert();
    });

    it('Login with invalid credentials', async ()=>{

        await MainScreen.tapMenuButton();
        await MenuScreen.tapLoginButton();

        await LoginSignUpScreen.enterEmail('donkey@mule.co');
        await LoginSignUpScreen.enterPassword('123');
        await LoginSignUpScreen.tapLoginButton();

        const isDisplayedErrorMsg = await LoginSignUpScreen.isDisplayedPasswordErrorMsg();
        console.log(`DEBUG 3: isDisplayedErrorMsg = ${isDisplayedErrorMsg}`);
        expect(isDisplayedErrorMsg).toEqual(true);
    });

    it('Form interactions', async ()=>{

        await MainScreen.tapFormsButton();
        await FormComponentsScreen.fillInputField('Watch Mobland or Black Mirror');
        const textOutput = await FormComponentsScreen.getWhatYouTypedText();

        console.log(`DEBUG 4: textOutput = ${textOutput}`);
        expect(textOutput).toEqual('Watch Mobland or Black Mirror');

        const switchTextBefore = await FormComponentsScreen.getSwitchText();
        await FormComponentsScreen.toggleSwitch();
        const switchTextAfter = await FormComponentsScreen.getSwitchText();

        console.log(`BEBUG 5: \nswitchTextBefore = ${switchTextBefore} \nswitchTextAfter = ${switchTextAfter}`);
        expect(switchTextBefore).not.toEqual(switchTextAfter); 

        await FormComponentsScreen.selectFromDropown('This app is awesome');

        const selectedText = await FormComponentsScreen.getSelectedText();
        console.log(`DEBUG 6: selectedText = ${selectedText}`);
        expect(selectedText).toEqual('This app is awesome');

        const activeButtonAlertMsg = await FormComponentsScreen.tapActiveButton();
        console.log(`DEBUG 7: alertMsg = ${activeButtonAlertMsg}`);
        expect(activeButtonAlertMsg).toContain('This button is active');
    });

    it('Swipe Horizontally and Vertically', async ()=>{
        await MainScreen.tapSwipeButton();
        await SwipeScreen.swipeLeft();
        await SwipeScreen.scrollDownToWdioRobot()
    });
})