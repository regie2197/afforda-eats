describe('API Testing - Review Endpoint', () => {

  const authUser = 'Hel200123';
  const authPass = 'Hel1234';
  let reviewID;

  const invalidUser = 'WWWWWW';
  const invalidPass = 'password123414';

    // TC_API_Reviews_01
    it('Should verify successful POST request for writing a review.', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:4000/api/review',
        auth: {
          username: authUser,
          password: authPass
        },
        body: {
          userId: 25,
          foodId: 1,
          storeId: 1,
          content: 'Great and delicious food',
          rating: 5
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('userId', 25);
        expect(response.body).to.have.property('foodId', 1);
        expect(response.body).to.have.property('storeId', 1);
        expect(response.body).to.have.property('content', 'Great and delicious food');
        expect(response.body).to.have.property('rating', 5);

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
            username: authUser,
            password: authPass
          },
          body: {
            foodId: 4,
            content: 'Great and delicious food',
            rating: 5
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
            username: authUser,
            password: authPass
          },
          body: {
            "userId": 25,
            "foodId": 4,
            "storeId" : 4, 
            "content": "Nestled in the heart of the city, The Culinary Haven is a gem that promises an unforgettable dining experience. From the moment you step through its doors, you are greeted with an ambiance that is both warm and inviting. The decor is a tasteful blend of modern elegance and rustic charm, with soft lighting that creates a cozy atmosphere perfect for any occasion. The menu at The Culinary Haven is a testament to the chef's creativity and passion for food. It features a diverse array of dishes that cater to a wide range of tastes and preferences. Whether you are a fan of traditional cuisine or looking to explore something new, there is something for everyone. To start, I opted for the Roasted Beet Salad. This dish was a delightful combination of flavors and textures. The beets were perfectly roasted, bringing out their natural sweetness, while the goat cheese added a creamy richness. The salad was topped with candied walnuts, which provided a satisfying crunch, and a balsamic reduction that tied all the elements together beautifully. For the main course, I chose the Pan-Seared Sea Bass. This dish was a true masterpiece. The sea bass was cooked to perfection, with a crispy skin and tender, flaky flesh. It was served on a bed of saffron risotto, which was creamy and flavorful, with just the right amount of saffron to give it a subtle yet distinctive taste. The dish was garnished with a medley of seasonal vegetables, adding a burst of color and freshness. My dining companion opted for the Braised Lamb Shank, which was equally impressive. The lamb was incredibly tender, falling off the bone with ease. It was served with a rich, savory sauce that complemented the meat beautifully. The accompanying mashed potatoes were smooth and creamy, and the roasted root vegetables added a hearty touch to the dish. No meal at The Culinary Haven would be complete without dessert, and the Chocolate Fondant did not disappoint. This decadent dessert featured a warm, gooey center that oozed out when cut into, paired with a scoop of vanilla bean ice cream. The combination of the rich chocolate and the creamy ice cream was pure bliss, making it the perfect ending to a fantastic meal. The service at The Culinary Haven was impeccable. The staff were attentive and knowledgeable, providing excellent recommendations and ensuring that our dining experience was nothing short of perfect. They were friendly and professional, making us feel welcome and valued throughout our visit. In addition to the outstanding food and service, The Culinary Haven also boasts an impressive wine list. The selection includes a variety of wines from around the world, carefully curated to complement the menu. Whether you are a wine connoisseur or simply looking to enjoy a glass with your meal, you are sure to find something that suits your taste. Overall, The Culinary Haven is a restaurant that truly lives up to its name. It offers a dining experience that is both memorable and enjoyable, with exceptional food, service, and ambiance. Whether you are celebrating a special occasion or simply looking for a great meal, The Culinary Haven is the perfect choice. I highly recommend it to anyone who appreciates fine dining and is looking for a place that delivers on all fronts.",
            "rating" : 5
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
            username: authUser,
            password: authPass
          },
          body: {
            userId: 25,
            foodId: 4,
            storeId: 4,
            content: 'Great and delicious food',
            rating: 10
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
            userId: 25,
            foodId: 4,
            storeId: 4,
            content: 'Great and delicious food',
            rating: 5
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
            username: invalidUser,
            password: invalidPass
          },
          body: {
            userId: 25,
            foodId: 4,
            storeId: 4,
            content: 'Great and delicious food',
            rating: 5
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
            username: authUser,
            password: authPass
          },
          body: {
            userId: 1000,
            foodId: 2,
            storeId: 4,
            content: 'Great and delicious food',
            rating: 5
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
            username: authUser,
            password: authPass
          },
          body: {
            userId: 25,
            foodId: 2500,
            storeId: 4,
            content: 'Great and delicious food',
            rating: 5
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
            username: authUser,
            password: authPass
          },
          body: {
            userId: 25,
            foodId: 2500,
            storeId: 4,
            content: 'Great and delicious food',
            rating: 5
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
            username: authUser,
            password: authPass
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
            username: authUser,
            password: authPass
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
            username: invalidUser,
            password: invalidPass
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
            username: invalidUser,
            password: invalidPass
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
          url: 'http://localhost:4000/api/review/2000',
          auth: {
            username: authUser,
            password: authPass
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
            username: authUser,
            password: authPass
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
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Beautiful staff',
            rating: 5
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('content', 'Beautiful staff');
          expect(response.body).to.have.property('rating', 5);
        });
      });      

      // TC_API_Reviews_19
      it('Should verify unsuccessful PUT request when both content and rating value is missing on the request body.', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: authUser,
            password: authPass
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
            username: authUser,
            password: authPass
          },
          body: {
            "content": "Nestled in the heart of the city, The Culinary Haven is a gem that promises an unforgettable dining experience. From the moment you step through its doors, you are greeted with an ambiance that is both warm and inviting. The decor is a tasteful blend of modern elegance and rustic charm, with soft lighting that creates a cozy atmosphere perfect for any occasion. The menu at The Culinary Haven is a testament to the chef's creativity and passion for food. It features a diverse array of dishes that cater to a wide range of tastes and preferences. Whether you are a fan of traditional cuisine or looking to explore something new, there is something for everyone. To start, I opted for the Roasted Beet Salad. This dish was a delightful combination of flavors and textures. The beets were perfectly roasted, bringing out their natural sweetness, while the goat cheese added a creamy richness. The salad was topped with candied walnuts, which provided a satisfying crunch, and a balsamic reduction that tied all the elements together beautifully. For the main course, I chose the Pan-Seared Sea Bass. This dish was a true masterpiece. The sea bass was cooked to perfection, with a crispy skin and tender, flaky flesh. It was served on a bed of saffron risotto, which was creamy and flavorful, with just the right amount of saffron to give it a subtle yet distinctive taste. The dish was garnished with a medley of seasonal vegetables, adding a burst of color and freshness. My dining companion opted for the Braised Lamb Shank, which was equally impressive. The lamb was incredibly tender, falling off the bone with ease. It was served with a rich, savory sauce that complemented the meat beautifully. The accompanying mashed potatoes were smooth and creamy, and the roasted root vegetables added a hearty touch to the dish. No meal at The Culinary Haven would be complete without dessert, and the Chocolate Fondant did not disappoint. This decadent dessert featured a warm, gooey center that oozed out when cut into, paired with a scoop of vanilla bean ice cream. The combination of the rich chocolate and the creamy ice cream was pure bliss, making it the perfect ending to a fantastic meal. The service at The Culinary Haven was impeccable. The staff were attentive and knowledgeable, providing excellent recommendations and ensuring that our dining experience was nothing short of perfect. They were friendly and professional, making us feel welcome and valued throughout our visit. In addition to the outstanding food and service, The Culinary Haven also boasts an impressive wine list. The selection includes a variety of wines from around the world, carefully curated to complement the menu. Whether you are a wine connoisseur or simply looking to enjoy a glass with your meal, you are sure to find something that suits your taste. Overall, The Culinary Haven is a restaurant that truly lives up to its name. It offers a dining experience that is both memorable and enjoyable, with exceptional food, service, and ambiance. Whether you are celebrating a special occasion or simply looking for a great meal, The Culinary Haven is the perfect choice. I highly recommend it to anyone who appreciates fine dining and is looking for a place that delivers on all fronts.",
            "rating" : 5
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
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Accommodating staff',
            rating: 100
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
          url: 'http://localhost:4000/api/review/invalidId',
          auth: {
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Accommodating staff',
            rating: 5
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
            content: 'Accommodating staff',
            rating: 5
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
            username: invalidUser,
            password: invalidPass
          },
          body: {
            content: 'Accommodating staff',
            rating: 5
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
          url: 'http://localhost:4000/api/review/2000',
          auth: {
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Accommodating staff',
            rating: 5
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
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Accommodating staff',
            rating: 5
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
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Food was bad this time',
            rating: 1
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('content', 'Food was bad this time');
          expect(response.body).to.have.property('rating', 1);
        });
      });
      
      // TC_API_Reviews_28
      it('Should verify successful PATCH request even with only the content field value on the request body.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Food was really bad this time'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('content', 'Food was really bad this time');
        });
      });

      // TC_API_Reviews_29
      it('Should verify successful PATCH request even with only the rating field value on the request body.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: authUser,
            password: authPass
          },
          body: {
            rating: 1
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('rating', 1);
        });
      });

      // TC_API_Reviews_30
      it('Should verify unsuccessful PATCH request when both content and rating value is missing on the request body.', () => {
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:4000/api/review/' + reviewID,
          auth: {
            username: authUser,
            password: authPass
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
            username: authUser,
            password: authPass
          },
          body: {
            "content": "Nestled in the heart of the city, The Culinary Haven is a gem that promises an unforgettable dining experience. From the moment you step through its doors, you are greeted with an ambiance that is both warm and inviting. The decor is a tasteful blend of modern elegance and rustic charm, with soft lighting that creates a cozy atmosphere perfect for any occasion. The menu at The Culinary Haven is a testament to the chef's creativity and passion for food. It features a diverse array of dishes that cater to a wide range of tastes and preferences. Whether you are a fan of traditional cuisine or looking to explore something new, there is something for everyone. To start, I opted for the Roasted Beet Salad. This dish was a delightful combination of flavors and textures. The beets were perfectly roasted, bringing out their natural sweetness, while the goat cheese added a creamy richness. The salad was topped with candied walnuts, which provided a satisfying crunch, and a balsamic reduction that tied all the elements together beautifully. For the main course, I chose the Pan-Seared Sea Bass. This dish was a true masterpiece. The sea bass was cooked to perfection, with a crispy skin and tender, flaky flesh. It was served on a bed of saffron risotto, which was creamy and flavorful, with just the right amount of saffron to give it a subtle yet distinctive taste. The dish was garnished with a medley of seasonal vegetables, adding a burst of color and freshness. My dining companion opted for the Braised Lamb Shank, which was equally impressive. The lamb was incredibly tender, falling off the bone with ease. It was served with a rich, savory sauce that complemented the meat beautifully. The accompanying mashed potatoes were smooth and creamy, and the roasted root vegetables added a hearty touch to the dish. No meal at The Culinary Haven would be complete without dessert, and the Chocolate Fondant did not disappoint. This decadent dessert featured a warm, gooey center that oozed out when cut into, paired with a scoop of vanilla bean ice cream. The combination of the rich chocolate and the creamy ice cream was pure bliss, making it the perfect ending to a fantastic meal. The service at The Culinary Haven was impeccable. The staff were attentive and knowledgeable, providing excellent recommendations and ensuring that our dining experience was nothing short of perfect. They were friendly and professional, making us feel welcome and valued throughout our visit. In addition to the outstanding food and service, The Culinary Haven also boasts an impressive wine list. The selection includes a variety of wines from around the world, carefully curated to complement the menu. Whether you are a wine connoisseur or simply looking to enjoy a glass with your meal, you are sure to find something that suits your taste. Overall, The Culinary Haven is a restaurant that truly lives up to its name. It offers a dining experience that is both memorable and enjoyable, with exceptional food, service, and ambiance. Whether you are celebrating a special occasion or simply looking for a great meal, The Culinary Haven is the perfect choice. I highly recommend it to anyone who appreciates fine dining and is looking for a place that delivers on all fronts.",
            "rating" : 5
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
            username: authUser,
            password: authPass
          },
          body: {
            content: "Very rude staff",
            rating : 100
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
            content: "Very rude staff",
            rating : 1
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
            username: invalidUser,
            password: invalidPass
          },
          body: {
            content: "Very rude staff",
            rating : 1
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
          url: 'http://localhost:4000/api/review/2000',
          auth: {
            username: authUser,
            password: authPass
          },
          body: {
            content: 'Very rude staff',
            rating: 1
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
            username: authUser,
            password: authPass
          },
          body: {
            content: "Very rude staff",
            rating : 1
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
            username: invalidUser,
            password: invalidPass
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
            username: authUser,
            password: authPass
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
          url: 'http://localhost:4000/api/review/2000',
          auth: {
            username: authUser,
            password: authPass
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
            username: authUser,
            password: authPass
          },
          body: {
            content: "Very rude staff",
            rating : 1
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(500);
          expect(response.body).to.have.property('error', 'Failed to delete review');
        });
      });
  });