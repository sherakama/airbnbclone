import { MainNav } from '../../src/components/MainNav';
import navItems from '../../src/data/main-nav.json';
import { mount } from '@cypress/react'

describe('Main Navigation', () => {

  beforeEach(() => {
    mount(<MainNav navData={navItems} />)
  })

  it('looks great', () => {
    cy.get('[data-cy="component-mainnav"]')
    .contains('Lakefront')
  })
})