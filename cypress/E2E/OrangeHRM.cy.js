describe("Login", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Criando um usuário e procurando por ele", () => {
    fazerLogin();
    criaAdmin();
    verificaAdmin();
  });
});

function fazerLogin() {
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin"
  );
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "admin123"
  );
  cy.get(".oxd-button").click();
}

function criaAdmin() {
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  cy.get(".orangehrm-header-container > .oxd-button").click();
  cy.get(
    ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
  ).click();
  cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  cy.get(
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input"
  ).click();
  cy.get(".oxd-select-dropdown > :nth-child(2)").click();
  cy.get(".oxd-autocomplete-text-input > input").type("Peter F Admin");
  cy.get(".oxd-autocomplete-dropdown > :nth-child(2)")
    .should("be.visible")
    .click();
  cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Testezin1"
  );
  cy.get(
    ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
  ).type("Teste123");
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Teste123"
  );
  cy.get(".oxd-button--secondary").click();
}

function verificaAdmin() {
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  cy.get(":nth-child(2) > .oxd-input").type("Testezin1");
  cy.get(".oxd-form-actions > .oxd-button--secondary").click();
  cy.get(".oxd-table-card > .oxd-table-row > :nth-child(2) > div").contains(
    "Testezin1"
  );
}
