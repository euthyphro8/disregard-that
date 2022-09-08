import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export default function Client({ children }) {
	const client = new ApolloClient({
		uri: 'http://192.168.0.4:4000/graphql',
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
