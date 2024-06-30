const {ApolloServer, gql} = require("apollo-server");

const books = [
    {
        title: "吾輩は猫である",
        author: "夏目漱石"
    },
    {
        title: "走れメロス",
        author: "太宰治"
    }
]

// typeDefs:どのようにAPIに対して問い合わせをするのか
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }

    type Query {
        test: [Book]
    }
`;

// resolvers:どのような値を返すのか
const resolvers = {
    Query: {
        test: () => books,
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});
