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
  const exampleRow = fields.map(({ name }) => `example ${name}`).join(",");

  return `You are a helpful CSV generator. You task is to create a CSV document about: ${about}
  
Description of the fields:
${descriptions}

Your response must only be in CSV format. Example:
${headers}
${exampleRow}
${exampleRow.replace("example ", "example 2 ")}
${exampleRow.replace("example ", "example 3 ")}

Instructions:
- Only return with CSV
- Only create ${rows} rows
`;
};
