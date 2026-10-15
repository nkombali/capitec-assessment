import { $ } from '@wdio/globals';

class FormComponentsScreen {

    public get inputField(){
        return $('~text-input');
    }

    public get whatYouTypedText(){
        return $('~input-text-result');
    }

    public get switch(){
        return $('~switch');
    }

    public get switchText(){
        return $('~switch-text');
    }

    public get dropdownButton(){
        return $('~Dropdown');
    }

    public dropdownOption(option: string){
        return `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${option}"]`;
    }

    public get dropdownSelectedText(){
        return $('//android.widget.EditText[@resource-id="text_input"]');
    }

    public async fillInputField(text: string){
        await this.inputField.setValue(text);
    }

    public async getWhatYouTypedText(){

        const text = (await this.whatYouTypedText).getAttribute('text');
        return text;
    }

    public get activeButton(){
        return $('~button-Active');
    }

    public async toggleSwitch(){
        (await this.switch).click();
    }

    public async getSwitchText(){
        return await this.switchText.getAttribute('text');
    }
    
    public async selectFromDropown(option: string){
        await this.dropdownButton.click();
        await $(this.dropdownOption(option)).click();
    }

    public async getSelectedText(){
        return await this.dropdownSelectedText.getAttribute('text');
    }

    public async tapActiveButton(){
        (await this.activeButton).click();

        const activeButtonAlertText = await driver.getAlertText();
        await driver.dismissAlert();

        return activeButtonAlertText;
    }

}

export default new FormComponentsScreen();