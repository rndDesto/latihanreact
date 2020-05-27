import { ADD_NOTE } from '../action/action';

const initialState = {
  notes: [{
    "id": 1,
    "first_name": "Carolin",
    "last_name": "Powis",
    "email": "cpowis0@psu.edu",
    "gender": "Female",
    "ip_address": "69.194.200.91"
  }, {
    "id": 2,
    "first_name": "Ruprecht",
    "last_name": "Delieu",
    "email": "rdelieu1@rakuten.co.jp",
    "gender": "Male",
    "ip_address": "36.251.133.0"
  }, {
    "id": 3,
    "first_name": "Yelena",
    "last_name": "Perris",
    "email": "yperris2@google.com",
    "gender": "Female",
    "ip_address": "102.42.128.61"
  }, {
    "id": 4,
    "first_name": "Lizzie",
    "last_name": "Allder",
    "email": "lallder3@homestead.com",
    "gender": "Female",
    "ip_address": "248.63.65.181"
  }, {
    "id": 5,
    "first_name": "Giustino",
    "last_name": "Abramowitch",
    "email": "gabramowitch4@hostgator.com",
    "gender": "Male",
    "ip_address": "116.87.104.200"
  }, {
    "id": 6,
    "first_name": "Armin",
    "last_name": "Balcombe",
    "email": "abalcombe5@com.com",
    "gender": "Male",
    "ip_address": "214.70.15.158"
  }, {
    "id": 7,
    "first_name": "Gabbi",
    "last_name": "Wressell",
    "email": "gwressell6@stumbleupon.com",
    "gender": "Female",
    "ip_address": "171.223.82.26"
  }, {
    "id": 8,
    "first_name": "Enrique",
    "last_name": "Goodreid",
    "email": "egoodreid7@jalbum.net",
    "gender": "Male",
    "ip_address": "104.231.137.93"
  }, {
    "id": 9,
    "first_name": "Wes",
    "last_name": "Fawkes",
    "email": "wfawkes8@utexas.edu",
    "gender": "Male",
    "ip_address": "110.157.98.203"
  }, {
    "id": 10,
    "first_name": "Doralia",
    "last_name": "Pike",
    "email": "dpike9@privacy.gov.au",
    "gender": "Female",
    "ip_address": "172.80.68.169"
  }]
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content
          }
        ]
      };

    default:
      return state;
  };
}

export default rootReducer;