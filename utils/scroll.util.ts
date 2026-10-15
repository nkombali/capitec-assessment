import { driver } from '@wdio/globals';

class ScrollUtil {

    public async swipeLeft(scrollableElement: any){
         await driver.swipe({
            direction: 'left',
            duration: 8000,
            percent: 0.5,
            scrollableElement: scrollableElement
        });
    }

    public async swipeVertically(){

        await driver.pause(5000);

        const { width } = await driver.getWindowRect();

        
    const anchorX = width / 2;

    // Hardcoded the startY and endY values because the screen has a very narrow area that allows scrolling
    const startY = 2060;
    const endY = 400

    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: anchorX, y: startY },
                { type: 'pointerDown', button: 0 },  
                { type: 'pause', duration: 2000 },
                { type: 'pointerMove', duration: 600, x: anchorX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }
    ]);

    // hardcoded pause for you to see the result of the scroll down
    await driver.pause(2500);
    }
}

export default new ScrollUtil();