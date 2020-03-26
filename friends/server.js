import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL & Relay Modern is cool!');
});


const root = { friend: () => {
    return {
        "id": 12345678,
        "firstName": "Marek",
        "lastName": "Stankiewicz",
        "gender": "Male",
        "language": "Polish",
        "email": "fakeemail@gmail.com"
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


app.listen(8080, () => console.log('Running server on localhost:8080/graphQL'));