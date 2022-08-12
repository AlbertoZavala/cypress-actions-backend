describe('Probando request', function(){

  it('Debe crear un empleado', function(){
    cy.request({
      url: 'employees',
      method: 'POST',
      body: {
        first_name: 'Jose Alberto',
        last_name: 'Zavala Flores',
        email: 'jose.alberto.zavala.flores@gmail.com'
      }
    }).then(response => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property("id")

      const id = response.body.id
      cy.wrap(id).as("id")
    })    
  })

  it('Debe validar que se haya creado en la base de datos', function(){
    cy.request("GET", "employees")
      .then(response => {
        //expect(response.body[response.body.leading -1].first_name.to.eq("Jose Alberto"))
        expect(response.body[response.body.length -1].first_name).to.equal("Jose Alberto")
    })
  })

  it('Debe de modificar al empleado con un nuevo correo', function(){
    cy.request({
      url: `employees/${this.id}`,
      method:'PUT',
      body:{
        first_name: "Pepito",
        last_name: "Pecas",
        email: 'pepe_pecas@email.com'
      }
    }).then(response => {
      console.log(response.body)
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('id')

    })
  })

  it('Debe de borrar el registro', function(){
    cy.request({
      url: `employees/${this.id}`,
      method: "DELETE"
    })
  })

})