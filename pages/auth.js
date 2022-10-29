const { I, mainPage } = inject();
const users = require('../module/users.js');

module.exports =  {

    authForm : {
        fields : {
            loginField    : '.login',
            passwordField : '.password',
        },
        loginBtn : '.login-btn',
        errorMessage : '.error-message',
    },
    account : {
        workSpaceInfo : '.workspace-info',
    },
    sessionForm : {
        closeOtherSessionsAndLogin : '.el-dialog__body .login',
    },


    /**
     * Авторизация под определенным пользователем
     * @param {String} user - логин юзера из конфига
     */
    authenticate( user ) {
        I.amOnPage('/');
        this.fillFields( user );
        this.smartClick( this.authForm.loginBtn );
    },

    /**
     * Заполняет поля авторизации
     * @param {String} user - логин юзера из конфига
     */
    fillFields( user ) {
        I.waitForVisible( this.authForm.fields.loginField );
        I.fillField( this.authForm.fields.loginField, users[user].login );
        I.fillField( this.authForm.fields.passwordField, users[user].password );
    },

    /**
     * Клик с ожиданием видимости и кликабельности элемента
     * @param {String} selector - селектор элемента
     */
    smartClick( selector ) {
        I.waitForVisible( selector );
        I.waitForClickable( selector );
        I.click( selector );
    },

    /**
     * Проверяет переход в аккаунт. Закрывает предыдущие сессии при их наличии
     */
    async authSuccess() {
        I.wait(5);
        const elementsNumber = await I.grabNumberOfVisibleElements( this.sessionForm.closeOtherSessionsAndLogin );

        if (elementsNumber >= 1) {
            this.smartClick( this.sessionForm.closeOtherSessionsAndLogin );
        }
        I.waitForVisible( this.account.workSpaceInfo );
    },

    /**
     * Проверяет наличие/тест ошибок при неудачной авторизации
     * @param {String} message - текст ошибки
     */
     async authResult( message ) {
        I.waitForText( message, 5, this.authForm.errorMessage );
    },

};
