const LoginPage = require("../support/pageObjects/loginPage/loginPage");

describe('Login', () => {
  it('with email false', () => {
    cy.visit('https://yupintar.wanteknologi.com/siswa-sekolah/');
    LoginPage.inputEmail('siswasekolah');
    LoginPage.inputPassword('siswasekolah123');
    LoginPage.clickLoginBtn();
    // LoginPage.clickLoginConfirmBtn();
  })
  it('with data success', () => {
    cy.visit('https://yupintar.wanteknologi.com/siswa-sekolah/');
    LoginPage.inputEmail('siswasekolah@gmail.com');
    LoginPage.inputPassword('siswasekolah123');
    LoginPage.clickLoginBtn();
    LoginPage.clickLoginConfirmBtn();
  })
})