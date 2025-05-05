import { reviewData } from "../../support/fakerdata"

describe('negative', () => {
  it('Verify unsuccessful review POST request - missing required fields', () => {
    const data = reviewData();
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/',
      body: {
        "content": "good",
        "rating": 3,
        "storeId": 5
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false // Prevent Cypress from failing the test on 4xx/5xx status codes
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Missing required fields')
    })
  })

  it('Verify unsuccessful review POST request - Content must be 500 words or fewer', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/',
      body: {
        "content": Array(501).fill('word').join(' '), // Generates a random paragraph of text
        "rating": 3,
        "userId": 15,
        "foodId": 4,
        "storeId": 5
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false // Prevent Cypress from failing the test on 4xx/5xx status codes
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Content must be 500 words or fewer')
    })
  })

  it('Verify unsuccessful review POST request - Rating must be an integer between 1 and 5', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/', 
      body: {
        "content": "good",
        "rating": 6,
        "userId": 1,
        "foodId": 2,
        "storeId": 8
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false // Prevent Cypress from failing the test on 4xx/5xx status codes
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Rating must be an integer between 1 and 5')
    })
  })

  it('Verify unsuccessful review POST request - User or food not found (Food)', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/',
      body: {
        "content": "good",
        "rating": 2,
        "userId": 15,
        "foodId": 2000,
        "storeId": 8
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('error', 'User or food not found')
    })
  })

  it('Verify unsuccessful review POST request - User or food not found (User)', () => {
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/',
      body: {
        "content": "good",
        "rating": 2,
        "userId": 2000,
        "foodId": 2,
        "storeId": 8
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('error', 'User or food not found')
    })
  })

  it('Verify unsuccessful review GET request - Review not found', () => {
    cy.api({
      method: 'GET',
      url: 'http://localhost:4000/api/review/1000',
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('error', 'Review not found')
    })
  })

  it('Verify unsuccessful review PATCH request - Nothing to update', () => {
    cy.api({
      method: 'PATCH',
      url: 'http://localhost:4000/api/review/7',
      failOnStatusCode: false, // Prevent Cypress from failing on non-2xx responses
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      body: {} // empty body to trigger 400
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Nothing to update');
    });
  });

  it('Verify unsuccessful review PATCH request - Content must be 500 words or fewer', () => {
    cy.api({
      method: 'PATCH',
      url: 'http://localhost:4000/api/review/23',
      body: {
        "content": Array(501).fill('word').join(' '), // Generates a random paragraph of text
        "rating": 3,
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false 
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Content must be 500 words or fewer')
    })
  })

  it('Verify unsuccessful review PATCH request - Rating must be an integer between 1 and 5', () => {
    cy.api({
      method: 'PATCH',
      url: 'http://localhost:4000/api/review/7',
      body: {
        "content": "good",
        "rating": 11
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error', 'Rating must be an integer between 1 and 5')
    })
  });

  it('Verify unsuccessful review PATCH request - Review not found', () => {
    cy.api({
        method: 'PATCH',
        url: 'http://localhost:4000/api/review/2000',
        body: {
            "content": "goodz",
            "rating": 4
        },
        auth: {
            username: "JOhndsss", 
            password: "MySecur34e2Password12333"
        },
        failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('error', 'Review not found')
    })
  })

  it('Verify unsuccessful review PUT request - Invalid review ID', () => {
    cy.api({
        method: 'PUT',
        url: 'http://localhost:4000/api/review/abc',
        body: {
            "content": "Valid short content.",
            "rating": 5
        },
        auth: {
            username: "JOhndsss", 
            password: "MySecur34e2Password12333"
        },
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.have.property('error', 'Invalid review ID')
    })
    })

it('Verify unsuccessful review PUT request - Both content and rating are required', () => {
    cy.api({
        method: 'PUT',
        url: 'http://localhost:4000/api/review/7',
        body: {
            "rating": 5
        },
        auth: {
            username: "JOhndsss", 
            password: "MySecur34e2Password12333"
        },
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.have.property('error', 'Both content and rating are required')
    })
  })

  it('Verify unsuccessful review PUT request - Content must be 500 words or fewer', () => {
    cy.api({
        method: 'PUT',
        url: 'http://localhost:4000/api/review/7',
        body: {
            "content": Array(501).fill('word').join(' '),
            "rating": 5
        },
        auth: {
            username: "JOhndsss", 
            password: "MySecur34e2Password12333"
        },
        failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.eq(400)
        expect(response.body).to.have.property('error', 'Content must be 500 words or fewer')
    })
    })

    it('Verify unsuccessful review PUT request - Rating must be an integer between 1 and 5', () => {
        cy.api({
            method: 'PUT',
            url: 'http://localhost:4000/api/review/7',
            body: {
                "content": "Bad content",
                "rating": 15
            },
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).to.have.property('error', 'Rating must be an integer between 1 and 5')
        })
    })

    it('Verify unsuccessful review PUT request - Review not found', () => {
        cy.api({
            method: 'PUT',
            url: 'http://localhost:4000/api/review/5000',
            body: {
                "content": "Bad content",
                "rating": 1
            },
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error', 'Review not found')
        })
    })  


  it('Verify unsuccessful review DELETE request - Review not found', () => {
    cy.api({
      method: 'DELETE',
      url: 'http://localhost:4000/api/review/1000',
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.have.property('error', 'Review not found')
    })
  })

})

describe('500', () => {
    it('Verify unsuccessful review POST request', () => {
        cy.api({
            method: 'POST',
            url: 'http://localhost:4000/api/review/',
            body: {
                "content": "good",
                "rating": 3,
                "userId": "15",
                "foodId": 4,
                "storeId": 5
            },
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).to.have.property('error', 'Failed to create review')
        })
    })
    it('Verify unsuccessful review GET request', () => {
        cy.api({
            method: 'GET',
            url: 'http://localhost:4000/api/review/abc',
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on 4xx/5xx status codes
        }).should((response) => {
            expect(response.status).to.eq(500)
        })
    })
    it('Verify unsuccesful review PATCH request', () => {
        cy.api({
            method: 'PATCH',
            url: 'http://localhost:4000/api/review/abc',
            body: {
                "content": "goodz",
                "rating": 4
            },
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
        })
    })
    it('Verify unsuccesful review PUT request', () => {
        cy.api({
            method: 'PUT',
            url: 'http://localhost:4000/api/review/abc',
            body: {
                "content": "Valid short content.",
                "rating": 5
            },
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
        }).should((response) => {
            expect(response.status).to.eq(500)
        })
    })
    it('Verify unsuccessful review DELETE request', () => {
        cy.api({
            method: 'DELETE',
            url: 'http://localhost:4000/api/review/haha',
            auth: {
                username: "JOhndsss", 
                password: "MySecur34e2Password12333"
            },
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(500)
        })
    })
})

describe('positive', () => {
  it('Verify successful review POST request', () => {
    const data = reviewData();
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/',
      body: data,
      auth: {
        username: "user", 
        password: "pass1111"
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('content', response.body.content)
    })
  })

  it('Verify successful review GET request', () => {
    const data = reviewData();
    cy.api({
      method: 'GET',
      url: 'http://localhost:4000/api/review/',
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Verify succesful review GEt by ID request', () => {
    const data = reviewData();
    cy.api({
      method: 'GET',
      url: 'http://localhost:4000/api/review/1',
      body: data,
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('Verify successful review PATCH request', () => {
    cy.api({
      method: 'PATCH',
      url: 'http://localhost:4000/api/review/1',
      body: {
        "content": "bad",
        "rating": 3
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('content', 'bad')
    })
  })

  it('Verify successful review PUT request', () => {
    cy.api({
      method: 'PUT',
      url: 'http://localhost:4000/api/review/2',
      body: {
        "content": "bad",
        "rating": 3
      },
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      }
    }).should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('content', 'bad')
    })
  })

  it('Verify successful review DELETE request', () => {
    const data = reviewData();
    cy.api({
      method: 'POST',
      url: 'http://localhost:4000/api/review/',
      body: data,
      auth: {
        username: "JOhndsss", 
        password: "MySecur34e2Password12333"
      },
    }).then((response) => {
      const id = response.body.id; 
      cy.api({
        method: 'DELETE',
        url: `http://localhost:4000/api/review/${id}`,
        auth: {
          username: "JOhndsss", 
          password: "MySecur34e2Password12333"
        }
      }).should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', 'Review deleted successfully')
      })
    })
  })

})