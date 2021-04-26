import { Selector, t } from "testcafe";

class UserDashboard{
    constructor(){
        this.myNotesSection = Selector('#my-notes-page');
    }
}

export default UserDashboard;
