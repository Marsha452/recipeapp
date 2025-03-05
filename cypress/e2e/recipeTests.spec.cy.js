describe("recipe app", ()=>{
    beforeEach(()=>{
        cy.visit("https://recipeapp-1t8yg56kn-marsha452.vercel.app/")
    })
    it("loads website landing page", ()=>{
        cy.visit("https://recipeapp-1t8yg56kn-marsha452.vercel.app/")
    })
    it("search bar works",()=>{
        cy.get(".search-bar").type("tofu")
        cy.get('.search-button').click()
    })
})