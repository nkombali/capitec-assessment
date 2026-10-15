import { $ } from '@wdio/globals';
import ScrollUtil from '../../../utils/scroll.util';

class SwipeScreen {

    public get horizontalPane(){
        return $('//android.view.ViewGroup[@resource-id="Carousel"]');
    }

    public async swipeLeft(){
        // use Scroll Util for this
        await ScrollUtil.swipeLeft(this.horizontalPane);
    }

    public async scrollDownToWdioRobot(){
        // use Scroll Util for this
        await ScrollUtil.swipeVertically();
    }
    
}

export default new SwipeScreen();