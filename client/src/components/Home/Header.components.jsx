import React from 'react'; 

export const RHeader = () => {
    <>
   <Container id="mainpage">
    <Row id="header">
      <Container>
        <Row>
          <Col sm={1} lg={1} md={1}></Col>
          <Col><i class="bi bi-phone">&nbsp; </i>+93(0)700077100 </Col>
          <Col><i class="bi bi-shop">&nbsp; </i>Kululampur, Malaysia</Col>
          <Col sm={1} lg={1} md={1}></Col>
        </Row>
      </Container>
    </Row>

    <Row id="sticky">
      <Col xs={1}></Col>
      <Col xs={2}>
      <Navbar className="bg-light justify-content-between" collapseOnSelect expand="sm" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto my-2 my-lg-0">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Look By Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/shop/">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="/services/">Services</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> 
                  <Nav.Link href="/contact/">Contact</Nav.Link>
                  <Nav.Link href="/practice/">Practice</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        <Navbar>
      </Navbar>
      </Col>
      <Col xs={2}></Col>
      <Col xs={4}>
      <Form inline>
        <FormControl id="search_id" type="text" onChange={e => 
          this.setState({ searchField: e.target.value})} placeholder="Search" className="mr-sm-2" />
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>
      </Col>
      <Col xs={1}></Col>
      <Col xs={2}  id="search_id">
        <Link to="/"><i class="bi bi-lock-fill"></i></Link>
      </Col>
      <Col xs={1}></Col>
    </Row>
    </Container>
    </>
}