const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const UserType = require('./types/userType');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      // request represents the request object coming from Express
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req })
      }
    }
  }
});

module.exports = mutation;
