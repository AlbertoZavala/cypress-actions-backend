describe('Probando errores', function(){
  it('Debe validar el status code fallido y el mensaje del error', function(){
    cy.request({url:'https://pokeapi.co/api/v2/4545', failOnStatusCode: false})
      .then(response => {
        expect(response.status).to.eq(404)
        expect(response.body).to.be.eq('Not Found')
      })
  });

  it('Debe validar el status code fallido y el mensaje de error de rick and morty', function(){
    cy.request({url:'https://rickandmortyapi.com/api/location/1111111', failOnStatusCode: false})
      .then(response => {
        expect(response.status).to.eq(404)
        expect(response.body).to.have.property('error', 'Location not found')
      })
  })
})