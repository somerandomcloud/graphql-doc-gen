# Schema Links
- [Query](#query-schema)
- [User](#user-schema)
- [Chat](#chat-schema)
- [ChatMessage](#chatmessage-schema)
- [__Schema](#__schema-schema)
- [__Type](#__type-schema)
- [__Field](#__field-schema)
- [__InputValue](#__inputvalue-schema)
- [__EnumValue](#__enumvalue-schema)
- [__Directive](#__directive-schema)
# Enum Links
- [Role](#role-enum)
- [__TypeKind](#__typekind-enum)
- [__DirectiveLocation](#__directivelocation-enum)
# Input Object Links
# Scalar Links
- [Date](#date-scalar)
- [ID](#id-scalar)
- [String](#string-scalar)
- [Boolean](#boolean-scalar)
# Schemas
<a name="query-schema"></a>
## Query (Schema)
No description
### me
No description
### user
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `ID!` | No description |
### allUsers
No description
### search
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `term` | `String!` | No description |
### myChats
No description
<a name="user-schema"></a>
## User (Schema)
No description
### id
No description
### username
No description
### email
No description
### role
No description
<a name="chat-schema"></a>
## Chat (Schema)
No description
### id
No description
### users
No description
### messages
No description
<a name="chatmessage-schema"></a>
## ChatMessage (Schema)
No description
### id
No description
### content
No description
### time
No description
### user
No description
<a name="__schema-schema"></a>
## __Schema (Schema)
A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.
### description
No description
### types
A list of all types supported by this server.
### queryType
The type that query operations will be rooted at.
### mutationType
If this server supports mutation, the type that mutation operations will be rooted at.
### subscriptionType
If this server support subscription, the type that subscription operations will be rooted at.
### directives
A list of all directives supported by this server.
<a name="__type-schema"></a>
## __Type (Schema)
The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
### kind
No description
### name
No description
### description
No description
### specifiedByURL
No description
### fields
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `includeDeprecated` | `Boolean` | No description |
### interfaces
No description
### possibleTypes
No description
### enumValues
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `includeDeprecated` | `Boolean` | No description |
### inputFields
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `includeDeprecated` | `Boolean` | No description |
### ofType
No description
<a name="__field-schema"></a>
## __Field (Schema)
Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.
### name
No description
### description
No description
### args
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `includeDeprecated` | `Boolean` | No description |
### type
No description
### isDeprecated
No description
### deprecationReason
No description
<a name="__inputvalue-schema"></a>
## __InputValue (Schema)
Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.
### name
No description
### description
No description
### type
No description
### defaultValue
A GraphQL-formatted string representing the default value for this input value.
### isDeprecated
No description
### deprecationReason
No description
<a name="__enumvalue-schema"></a>
## __EnumValue (Schema)
One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.
### name
No description
### description
No description
### isDeprecated
No description
### deprecationReason
No description
<a name="__directive-schema"></a>
## __Directive (Schema)
A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
### name
No description
### description
No description
### isRepeatable
No description
### locations
No description
### args
No description
This schema requires one or more of these parameters:
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `includeDeprecated` | `Boolean` | No description |
# Enums
<a name="role-enum"></a>
## Role (Enum)
No description
Enum values:
| Parameter | Description                |
| :-------- | :------------------------- |
| `USER` | No description |
| `ADMIN` | No description |
<a name="__typekind-enum"></a>
## __TypeKind (Enum)
An enum describing what kind of type a given `__Type` is.
Enum values:
| Parameter | Description                |
| :-------- | :------------------------- |
| `SCALAR` | Indicates this type is a scalar. |
| `OBJECT` | Indicates this type is an object. `fields` and `interfaces` are valid fields. |
| `INTERFACE` | Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. |
| `UNION` | Indicates this type is a union. `possibleTypes` is a valid field. |
| `ENUM` | Indicates this type is an enum. `enumValues` is a valid field. |
| `INPUT_OBJECT` | Indicates this type is an input object. `inputFields` is a valid field. |
| `LIST` | Indicates this type is a list. `ofType` is a valid field. |
| `NON_NULL` | Indicates this type is a non-null. `ofType` is a valid field. |
<a name="__directivelocation-enum"></a>
## __DirectiveLocation (Enum)
A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.
Enum values:
| Parameter | Description                |
| :-------- | :------------------------- |
| `QUERY` | Location adjacent to a query operation. |
| `MUTATION` | Location adjacent to a mutation operation. |
| `SUBSCRIPTION` | Location adjacent to a subscription operation. |
| `FIELD` | Location adjacent to a field. |
| `FRAGMENT_DEFINITION` | Location adjacent to a fragment definition. |
| `FRAGMENT_SPREAD` | Location adjacent to a fragment spread. |
| `INLINE_FRAGMENT` | Location adjacent to an inline fragment. |
| `VARIABLE_DEFINITION` | Location adjacent to a variable definition. |
| `SCHEMA` | Location adjacent to a schema definition. |
| `SCALAR` | Location adjacent to a scalar definition. |
| `OBJECT` | Location adjacent to an object type definition. |
| `FIELD_DEFINITION` | Location adjacent to a field definition. |
| `ARGUMENT_DEFINITION` | Location adjacent to an argument definition. |
| `INTERFACE` | Location adjacent to an interface definition. |
| `UNION` | Location adjacent to a union definition. |
| `ENUM` | Location adjacent to an enum definition. |
| `ENUM_VALUE` | Location adjacent to an enum value definition. |
| `INPUT_OBJECT` | Location adjacent to an input object type definition. |
| `INPUT_FIELD_DEFINITION` | Location adjacent to an input object field definition. |
# Enums
# Scalars
<a name="date-scalar"></a>
## Date (Scalar)
No description
<a name="id-scalar"></a>
## ID (Scalar)
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
<a name="string-scalar"></a>
## String (Scalar)
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
<a name="boolean-scalar"></a>
## Boolean (Scalar)
The `Boolean` scalar type represents `true` or `false`.
