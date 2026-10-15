import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    runner: 'local',

    capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
    }
}],

    services: [], 

    specs: [
        './test/specs/**/api.*.ts'
    ],

    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
};
