Feature( 'auth_without_password_test.js', { retries: 1 } );

Scenario( 'Auth without password', async( { authPage } ) => {
    authPage.authenticate('userWithoutPassword');
    authPage.authResult('Password required!');
} );
