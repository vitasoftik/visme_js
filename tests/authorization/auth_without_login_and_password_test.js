Feature( 'auth_without_login_and_password_test.js', { retries: 1 } );

Scenario( 'Auth without login and password', async( { authPage } ) => {
    authPage.authenticate('userWithoutLoginAndPassword');
    authPage.authResult('Email required!');
} );
