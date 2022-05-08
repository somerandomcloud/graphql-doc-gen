# graphql-doc-gen
 
Generate markdown documentation for your GraphQL schema with ease with this generator. This project does not write the entire documentation for you, it only gives you a foundation to start with. It doesnt write any descriptions, nor will it keep any changes you make

Example: https://gist.github.com/somerandomcloud/9d76fc2e9a1dd0a62e457a776ebab76e

## How-to

Use [Transform.tools GraphQL -> Introspection JSON](https://transform.tools/graphql-to-introspection-json) to make your schema into a json, and replace the existing graphql-format.json example JSON with your own (`CTRL + A` + `DEL`)

Then just run `node .` and paste the documentation from `finalres.md` wherever you need it.

Note: Will probably break links with Gitbook