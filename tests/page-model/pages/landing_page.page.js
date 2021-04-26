import { Selector, t } from "testcafe";

class LandingPage{
    constructor(){
        this.loginButton = Selector('.btn.btn-lg.btn-primary.button-login');
    }

    async click_login(){
        await t.click(this.loginButton);
    }
}

export default LandingPage;