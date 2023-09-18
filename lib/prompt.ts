export const jsonDataPromptDataHelper = (
  about: string,
  rows: number,
  fields: {
    name: string;
    inputType: string;
    description: string;
  }[]
) => {
  const descriptions = fields
    .map(
      ({ name, description, inputType }) =>
        `- ${name}: ${description}|${inputType}`
    )
    .join("\n");

  const headers = fields.map(({ name }) => name).join(",");

  return `You are a helpful CSV generator.
  
You task is to create a CSV document about: 
${about}
  
Here is an example of a CSV document:
"full_name","age","about"
"sam", 30,"i live in the UK"

Instructions:
- Your response must only be in CSV format.
- Only create ${rows} rows.
- Everthing must be in quotes.

Here are the headers of the CSV document:
${headers}

Here is a list of fields you need to create:
${descriptions}
`;
};
