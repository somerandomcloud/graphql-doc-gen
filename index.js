const fs = require('fs')
const schema = require('./graphql-format.json')

let mdschemas = "# Schemas\n"
let schemalinks = "# Schema Links\n"
let mdenums = "# Enums\n"
let enumlinks = "# Enum Links\n"
let mdinob = "# Enums\n"
let inoblinks = "# Input Object Links\n"
let mdscalar = "# Scalars\n"
let scalarlinks = "# Scalar Links\n"
let mdfinal = ""

schema.__schema.types.forEach(element => {
    if(element.kind === 'OBJECT') {
        mdschemas += `<a name="${element.name.toLowerCase()}-schema"></a>\n## ${element.name} (Schema)\n${element.description || "No description"}\n`
        schemalinks += `- [${element.name}](#${element.name.toLowerCase()}-schema)\n`

        element.fields.forEach(field => {
            mdschemas += `### ${field.name}\n${field.description || "No description"}\n`

            if(field.args[0]) {
                mdschemas += `This schema requires one or more of these parameters:\n| Parameter | Type     | Description                |\n| :-------- | :------- | :------------------------- |\n`
            }

            field.args.forEach(arg => {
                let startarg = ''
                let endarg = ''
                let obj = arg.type

                    while(obj.name === null) {
                        if(obj.kind === 'NON_NULL') {
                            endarg = '!' + endarg
                        }
                        if(obj.kind === 'LIST') {
                            endarg = ']' + endarg
                            startarg += '['
                        }
                        obj = obj.ofType
                    }

                let argtypename = startarg + obj.name + endarg
                

                mdschemas += `| \`${arg.name}\` | \`${argtypename}\` | ${obj.description || `No description`} |\n`
            })
        })
    }
    if(element.kind === "ENUM") {
        mdenums += `<a name="${element.name.toLowerCase()}-enum"></a>\n## ${element.name} (Enum)\n${element.description || "No description"}\n`
        enumlinks += `- [${element.name}](#${element.name.toLowerCase()}-enum)\n`

        mdenums += `Enum values:\n| Parameter | Description                |\n| :-------- | :------------------------- |\n`
        element.enumValues.forEach(enumField => {
            mdenums += `| \`${enumField.name}\` | ${enumField.description || "No description"} |\n`
        })
    }
    if(element.kind === "INPUT_OBJECT") {
        mdinob += `<a name="${element.name.toLowerCase()}-inob"></a>\n## ${element.name} (Input)\n${element.description || "No description"}\n`
        inoblinks += `- [${element.name}](#${element.name.toLowerCase()}-inob)\n`

        mdinob += `Input variables:\n| Parameter | Description                |\n| :-------- | :------------------------- |\n`
        element.inputFields.forEach(inputField => {
            mdinob += `| \`${inputField.name}\` | ${inputField.description || "No description"} |\n`
        })
    }
    if(element.kind === "SCALAR") {
        mdscalar += `<a name="${element.name.toLowerCase()}-scalar"></a>\n## ${element.name} (Scalar)\n${element.description || "No description"}\n`
        scalarlinks += `- [${element.name}](#${element.name.toLowerCase()}-scalar)\n`
    }
})

mdfinal = schemalinks + enumlinks + inoblinks + scalarlinks + mdschemas + mdenums + mdinob + mdscalar

fs.writeFile(__dirname + '/./finalres.md', mdfinal, err => {
    if (err) {
      console.error(err);
    }
    console.log('Done!')
  });