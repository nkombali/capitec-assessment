import { $ } from '@wdio/globals';

class MenuScreen {

    public get loginButton(){
        return $('~side-menu-item-login');
    }

    public async tapLoginButton(){
        await this.loginButton.click();
    }
}

export default new MenuScreen();