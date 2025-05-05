describe('API Testing - Review Endpoint', () => {

  let reviewID;
  let reviewsData;

  beforeEach(() => {
        cy.readFile('cypress/fixtures/reviewsData.json').then((data) => {
          reviewsData = data;
        });
      });
    
    // TC_API_Reviews_01
    it('Should verify successful POST request for writing a review.', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:4000/api/review',
        auth: {
          username: reviewsData.authUser,
          password: reviewsData.authPass
        },
        body: {
          userId: reviewsData.userID,
          foodId: reviewsData.foodID,
          storeId: reviewsData.storeID,
          content: reviewsData.content,
          rating: reviewsData.rating
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('userId', reviewsData.userID);
        expect(response.body).to.have.property('foodId', reviewsData.foodID);
        expect(response.body).to.have.property('storeId', reviewsData.storeID);
        expect(response.body).to.have.property('content', reviewsData.content);
        expect(response.body).to.have.property('rating', reviewsData.rating);

        reviewID = response.body.id;
        cy.log('Review ID:', reviewID);
      });
    });

    // TC_API_Reviews_02
    it('Should verify unsuccessful POST request for creating a review when field values are missing.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            foodId: reviewsData.foodID,
            content: reviewsData.content,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Missing required fields');
        });
      });
      
      // TC_API_Reviews_03
      it('Should verify unsuccessful POST request for creating a review when content word count exceeds 500.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            "userId": reviewsData.userID,
            "foodId": reviewsData.foodID,
            "storeId" : reviewsData.storeID, 
            "content": reviewsData.content500Words,
            "rating" : reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Content must be 500 words or fewer');
        });
      });

      // TC_API_Reviews_04
      it('Should verify unsuccessful POST request for creating a review when rating value is invalid.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            userId: reviewsData.userID,
            foodId: reviewsData.foodID,
            storeId: reviewsData.storeID,
            content: reviewsData.content,
            rating: reviewsData.invalidRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Rating must be an integer between 1 and 5');
        });
      });

       // TC_API_Reviews_05
       it('Should verify unsuccessful POST request for creating a review when no authorization credentials are present.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          body: {
            userId: reviewsData.userID,
            foodId: reviewsData.foodID,
            storeId: reviewsData.storeID,
            content: reviewsData.content,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });

      // TC_API_Reviews_06
      it('Should verify unsuccessful POST request for creating a review when authorization credentials are invalid.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.invalidUser,
            password: reviewsData.invalidPass
          },
          body: {
            userId: reviewsData.userID,
            foodId: reviewsData.foodID,
            storeId: reviewsData.storeID,
            content: reviewsData.content,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Invalid username or password');
        });
      });

      // TC_API_Reviews_07
      it('Should verify unsuccessful POST request for creating a review when userId value is non-existent.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            userId: reviewsData.invalidUserID,
            foodId: reviewsData.foodID,
            storeId: reviewsData.storeID,
            content: reviewsData.content,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);   
          expect(response.body).to.have.property('error', 'User or food not found');
        });
      });

      // TC_API_Reviews_08
      it('Should verify unsuccessful POST request for creating a review when foodId value is non-existent.', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            userId: reviewsData.userID,
            foodId: reviewsData.invalidFoodID,
            storeId: reviewsData.storeID,
            content: reviewsData.content,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404); 
          expect(response.body).to.have.property('error', 'User or food not found');
        });
      });

      // TC_API_Reviews_09
      it('Should verify unsuccessful POST request due to server-side issue/s.', () => {
        cy.request({
          method: 'POST',
          url: 'https://4efb9bfc-7910-483e-b63f-eeca2ad605e7.mock.pstmn.io/api/review/',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            userId: reviewsData.userID,
            foodId: reviewsData.foodID,
            storeId: reviewsData.storeID,
            content: reviewsData.content,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500); 
          expect(response.body).to.have.property('error', 'Failed to create review');
        });
      });      

      // TC_API_Reviews_10
      it('Should verify successful GET request for all reviews.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });

      // TC_API_Reviews_11
      it('Should verify successful GET request by reviewId.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });

      // TC_API_Reviews_12
      it('Should verify unsuccessful GET request when no authorization credentials are present.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review/',
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });

      // TC_API_Reviews_13
      it('Should verify unsuccessful GET request when authorization credentials are invalid.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review/',
          body: {
            username: reviewsData.invalidUser,
            password: reviewsData.invalidPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });

      // TC_API_Reviews_14
      it('Should verify unsuccessful GET request by reviewId when no authorization credentials are present.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review/' + reviewID,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });

      // TC_API_Reviews_15
      it('Should verify unsuccessful GET request by reviewId when authorization credentials are invalid.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review/' + reviewID,
          body: {
            username: reviewsData.invalidUser,
            password: reviewsData.invalidPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });
      
      // TC_API_Reviews_16
      it('Should verify unsuccessful GET request when reviewId is non-existent.', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4000/api/review/' + reviewsData.invalidReviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Review not found');
        });
      });
      
      // TC_API_Reviews_17
      it('Should verify unsuccessful GET request due to server-side issue/s.', () => {
        cy.request({
          method: 'GET',
          url: 'https://4efb9bfc-7910-483e-b63f-eeca2ad605e7.mock.pstmn.io/api/review/',
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500);
          expect(response.body).to.have.property('error', 'Failed to fetch reviews');
        });
      });
      
      // TC_API_Reviews_18
      it('Should verify successful PUT (Update) request.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.updatedContent,
            rating: reviewsData.rating
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('content', reviewsData.updatedContent);
          expect(response.body).to.have.property('rating', reviewsData.rating);
        });
      });      

      // TC_API_Reviews_19
      it('Should verify unsuccessful PUT request when both content and rating value is missing on the request body.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {

          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Both content and rating are required');
        });
      });
      
      // TC_API_Reviews_20
      it('Should verify unsuccessful PUT request for updating a review when content word count exceeds 500.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            "content": reviewsData.content500Words,
            "rating" : reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Content must be 500 words or fewer');
        });
      });

      // TC_API_Reviews_21
      it('Should verify unsuccessful PUT request for updating a review when rating value is invalid.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.updatedContent2,
            rating: reviewsData.invalidRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Rating must be an integer between 1 and 5');
        });
      });      

      // TC_API_Reviews_22
      it('Should verify unsuccessful PUT request for updating a review when reviewId is NaN.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewsData.NaNReviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.updatedContent2,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Invalid review ID');
        });
      });      

      // TC_API_Reviews_23
      it('Should verify unsuccessful PUT request when no authorization credentials are present.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          body: {
            content: reviewsData.updatedContent2,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });      

      // TC_API_Reviews_24
      it('Should verify unsuccessful PUT request when authorization credentials are invalid.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.invalidUser,
            password: reviewsData.invalidPass
          },
          body: {
            content: reviewsData.updatedContent2,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Invalid username or password');
        });
      });      

      // TC_API_Reviews_25
      it('Should verify unsuccessful PUT request when reviewId is non-existent.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewsData.invalidReviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.updatedContent2,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Review not found');
        });
      });      

      // TC_API_Reviews_26
      it('Should verify unsuccessful PUT request due to server-side issue/s.', () => {
        cy.request({
          method: 'PUT',
          url: 'https://4efb9bfc-7910-483e-b63f-eeca2ad605e7.mock.pstmn.io/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.updatedContent2,
            rating: reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500);
          expect(response.body).to.have.property('error', 'Failed to update review');
        });
      });      

      // TC_API_Reviews_27
      it('Should verify successful PATCH request.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.patchContent,
            rating: reviewsData.patchRating
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('content', reviewsData.patchContent);
          expect(response.body).to.have.property('rating', reviewsData.patchRating);
        });
      });
      
      // TC_API_Reviews_28
      it('Should verify successful PATCH request even with only the content field value on the request body.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.patchContent,
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('content', reviewsData.patchContent);
        });
      });

      // TC_API_Reviews_29
      it('Should verify successful PATCH request even with only the rating field value on the request body.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            rating: reviewsData.patchRating
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('rating', reviewsData.patchRating);
        });
      });

      // TC_API_Reviews_30
      it('Should verify unsuccessful PATCH request when both content and rating value is missing on the request body.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {

          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Nothing to update');
        });
      });

      // TC_API_Reviews_31
      it('Should verify unsuccessful PATCH request for updating a review when content word count exceeds 500.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            "content": reviewsData.content500Words,
            "rating" : reviewsData.rating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Content must be 500 words or fewer');
        });
      });

      // TC_API_Reviews_32
      it('Should verify unsuccessful PATCH request for updating a review when rating value is invalid.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.patchContent2,
            rating : reviewsData.invalidRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('error', 'Rating must be an integer between 1 and 5');
        });
      });

      // TC_API_Reviews_33
      it('Should verify unsuccessful PATCH request when no authorization credentials are present.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          body: {
            content: reviewsData.patchContent2,
            rating : reviewsData.patchRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });

      // TC_API_Reviews_34
      it('Should verify unsuccessful PATCH request when authorization credentials are invalid.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.invalidUser,
            password: reviewsData.invalidPass
          },
          body: {
            content: reviewsData.patchContent2,
            rating : reviewsData.patchRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Invalid username or password');
        });
      });

      // TC_API_Reviews_35
      it('Should verify unsuccessful PATCH request when reviewId is non-existent.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewsData.invalidReviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.patchContent2,
            rating : reviewsData.patchRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Review not found');
        });
      });

      // TC_API_Reviews_36
      it('Should verify unsuccessful PATCH request due to server-side issue/s.', () => {
        cy.request({
          method: 'PATCH',
          url: 'https://4efb9bfc-7910-483e-b63f-eeca2ad605e7.mock.pstmn.io/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          body: {
            content: reviewsData.patchContent2,
            rating : reviewsData.patchRating
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500);
          expect(response.body).to.have.property('error', 'Failed to update review');
        });
      });
      
      // TC_API_Reviews_37
      it('Should verify unsuccessful DELETE request when no authorization credentials are present."', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:4000/api/review/' + reviewID,
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Authorization header missing or invalid');
        });
      });

      // TC_API_Reviews_38
      it('Should verify unsuccessful DELETE request when authorization credentials are invalid.', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.invalidUser,
            password: reviewsData.invalidPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(401);
          expect(response.body).to.have.property('error', 'Invalid username or password');
        });
      });

      // TC_API_Reviews_39
      it('Should verify successful DELETE request by reviewId."', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Review deleted successfully');
        });
      });
      
      // TC_API_Reviews_40
      it('Should verify unsuccessful DELETE request when reviewId is non-existent.', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:4000/api/review/' + reviewsData.invalidReviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property('error', 'Review not found');
        });
      });

      // TC_API_Reviews_41
      it('Should verify unsuccessful DELETE request due to server-side issue/s."', () => {
        cy.request({
          method: 'DELETE',
          url: 'https://4efb9bfc-7910-483e-b63f-eeca2ad605e7.mock.pstmn.io/api/review/' + reviewID,
          auth: {
            username: reviewsData.authUser,
            password: reviewsData.authPass
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500);
          expect(response.body).to.have.property('error', 'Failed to delete review');
        });
      });
  });