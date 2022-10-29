Feature( 'auth_success_test.js', { retries: 1 } );

Scenario( 'Auth success', async( { authPage } ) => {
    authPage.authenticate('userSuccess');
    await authPage.authSuccess();
} );
