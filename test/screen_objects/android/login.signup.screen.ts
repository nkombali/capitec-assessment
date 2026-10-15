import { $ } from '@wdio/globals';

class LoginSignUpScreen {
    
    public get signUpFormButton(){
        return $('~button-sign-up-container');
    }

    public get loginFormButton(){
        return $('~button-login-container');
    }

    public get emailTextField(){
        return $('~input-email');
    }

    public get passwordTextField(){
        return $('~input-password');
    }

    public get confirmPasswordTextField(){
        return $('~input-repeat-password');
    }

    public get signUpButton(){
        return $('~button-SIGN UP');
    }

    public get loginButton(){
        return $('~button-LOGIN');
    }

    public get popUpOkButton(){
        return $('~android:id/button1');
    }

    public get popUpMessage(){
        return $('~android:id/message');
    }

    public get passwordErrorMsg(){
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    public async toggleSignUpForm(){
        await this.signUpFormButton.click();
    }

    public async enterEmail(email: string){
        await this.emailTextField.setValue(email);
    }

    public async enterPassword(password: string){
        await this.passwordTextField.setValue(password);
    }

    public async confirmPassword(password: string){
        await this.confirmPasswordTextField.setValue(password);
    }

    public async tapSignUpButton(){
        await this.signUpButton.click();
    }

    public async tapLoginButton(){
        await this.loginButton.click();
    }

    public async toggleLoginForm(){
        await this.loginFormButton.click();
    }

    public async dismissPopUp(){
        (await this.popUpOkButton).click();
    }

    public async isDisplayedPasswordErrorMsg(){
        return (await this.passwordErrorMsg).isDisplayed();
    }
}

export default new LoginSignUpScreen();