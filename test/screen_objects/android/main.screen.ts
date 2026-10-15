import { $ } from '@wdio/globals';

class MainScreen {

    public get menuButton(){
        return $('~Menu');
    }

    public get loginButton(){
        return $('~Login');
    }

    public get formsButton(){
        return $('~Forms');
    }

    public get swipeButton(){
        return $('~Swipe');
    }

    public async tapMenuButton(){

        const maxReties = 3;
        let attempts = 0;

        while(attempts < maxReties){
            await this.menuButton.click();

            const isDisplayedMenuScreenTitle = await $('//android.widget.TextView[@text="Menu"]').isDisplayed();

            if(isDisplayedMenuScreenTitle){
                break;
            } else {
                attempts++;
                await driver.pause(2000);
            }
        }
    }

    public async tapLoginButton(){
        await driver.waitUntil( async ()=>{
            (await this.loginButton).isClickable
        },
        {
            timeout: 11000, 
            timeoutMsg: "Failed to wait for loginButton to be clickable"
        }).then(()=> {
            this.loginButton.click()
            }
        );
    }

    public async tapFormsButton(){
        await this.formsButton.click();
    }
    
    public async tapSwipeButton(){
        await this.swipeButton.click();
    }
}

export default new MainScreen();