const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

// one field must be assigned per type to avoid GraphQL errors
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: { type: GraphQLID }
  }
});

module.exports = RootQueryType;
