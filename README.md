# graphql-doc-gen
 
Generate markdown documentation for your  GraphQL schema with ease with this generator. This project does not write descriptions so you will have to write them yourself

Example: https://gist.github.com/somerandomcloud/9d76fc2e9a1dd0a62e457a776ebab76e

## How-to

Use [Transform.tools GraphQL -> Introspection JSON](https://transform.tools/graphql-to-introspection-json) to make your schema into a json, and replace the existing graphql-format.json example JSON with your own (`CTRL + A` + `DEL`)

Then just run `node .` and paste the documentation from `finalres.md` wherever you need it.

Note: Will probably break links with Gitbook