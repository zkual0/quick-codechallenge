import { Selector, t } from "testcafe";
import LandingPage      from "../page-model/pages/landing_page.page";
import LoginPage        from "../page-model/pages/login.page";
import UserDashboard    from "../page-model/pages/user_dashboard.page";

const landingPage   = new LandingPage();
const loginPage     = new LoginPage();
const userDashboard = new UserDashboard();

// prettire-ignore
fixture`Login test`
    .page`http://testapp.galenframework.com/`;

test("User does successfull login", async t => {
    await landingPage.click_login();
    await loginPage.loginToApp('testuser@example.com','test123');
    await t.expect(userDashboard.myNotesSection.exists).ok();
})