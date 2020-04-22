context('UI Elements', () => {
  beforeEach(() => {
    cy.visit('');
    cy.get('.app-content').invoke('css', 'position', 'relative');
    cy.contains('menu').click();
    cy.contains('UI Elements').click();
  })
  
  ////////
  // AVATAR
  ////////

  it('match default avatar', () => {
    cy.get('.avatar-default-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match letter avatar', () => {
    cy.get('.avatar-letter-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match image avatar', () => {
    cy.get('.avatar-image-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match list avatar', () => {
    cy.get('.avatar-list-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match list dense avatar', () => {
    cy.get('.avatar-list-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  ////////
  // BADGES
  ////////

  it('match side badges', () => {
    cy.get('.badge-side-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  ////////
  // BUTTONS
  ////////

  it('match button default', () => {
    cy.get('.button-default-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button stroked', () => {
    cy.get('.button-stroked-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button flat', () => {
    cy.get('.button-flat-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button text with icon', () => {
    cy.get('.button-text-icon-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button density', () => {
    cy.get('.button-density-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button icon', () => {
    cy.get('.button-icon-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button icon dense', () => {
    cy.get('.button-icon-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button FAB', () => {
    cy.get('.button-fab-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match button FAB mini', () => {
    cy.get('.button-fab-mini-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  ////////
  // TOGGLE
  ////////

  it('match toggle filter', () => {
    cy.get('.toggle-filter-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })
  
  it('match toggle dense', () => {
    cy.get('.toggle-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })
  
  it('match toggle group', () => {
    cy.get('.toggle-group-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  ////////
  // CARDS
  ////////

  it('match card basic', () => {
    cy.get('.card-basic-test', { timeout: 5000 })
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match card workspace dense', () => {
    cy.get('.card-workspace-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match card product dense', () => {
    cy.get('.card-product-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match card solution dense', () => {
    cy.get('.card-solution-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  ////////
  // CHIPS
  ////////

  it('match chip states', () => {
    cy.get('.chip-states-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip densities', () => {
    cy.get('.chip-density-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip dense', () => {
    cy.get('.chip-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip icon', () => {
    cy.get('.chip-icon-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip icon dense', () => {
    cy.get('.chip-icon-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip removable', () => {
    cy.get('.chip-removable-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip avatar', () => {
    cy.get('.chip-avatar-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

  it('match chip toggle', () => {
    cy.get('.chip-toggle-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  })

})