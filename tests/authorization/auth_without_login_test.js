Feature( 'auth_without_login_test.js', { retries: 1 } );

Scenario( 'Auth without login', async( { authPage } ) => {
    authPage.authenticate('userWithoutLogin');
    authPage.authResult('Email required!');
} );
