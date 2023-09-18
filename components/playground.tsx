"use client";

import JSONDataCodeBlock from "@/components/json-data-codeblock";
import JSONDataFrom from "@/components/json-data-form";
import { exampleFormValues } from "@/components/section-example-jsons";
import { Step } from "@/components/step";
import { Button } from "@/components/ui/button";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { H1, P, Span } from "@/components/ui/typography";
import { toast } from "@/components/ui/use-toast";
import useJSONDataCompletion from "@/hooks/use-json-data-completion";
import { FormProps } from "@/hooks/use-playground-form";
import * as React from "react";

const easySelections = [
  {
    shortTitle: "Rick and Morty Characters",
    formValues: exampleFormValues.rickAndMortyCharacters,
  },
  {
    shortTitle: "Top Europe countries",
    formValues: exampleFormValues.topEuropeCountries,
  },
  {
    shortTitle: "Top science fiction books",
    formValues: exampleFormValues.booksRead,
  },
];

export default function Playground() {
  const {
    completion,
    isLoading,
    stop,
    fields,
    append,
    control,
    errors,
    removeField,
    replaceFields,
    setValue,
    handleSubmit,
    handleGenerateJSON,
  } = useJSONDataCompletion({
    testimonial: true,
  });

  console.log("errors", errors);

  function handleSelectOption(option: FormProps) {
    setValue("prompt", option.prompt);
    setValue("limit", option.limit);
    const arrayToReplace = option.fields.map((_, index) => {
      return {
        name: option.fields[index].name,
        inputType: option.fields[index].inputType,
        description: option.fields[index].description,
      };
    });
    replaceFields(arrayToReplace);
  }

  return (
    <React.Fragment>
      <Column>
        <Step className={""} step="1" text="Choose an example" />
        <Row className="flex-wrap gap-2 justify-start items-center my-2 w-full">
          {easySelections.map((item) => (
            <Button
              key={item.shortTitle}
              onClick={() => {
                handleSelectOption(item.formValues);
              }}
              className="whitespace-nowrap"
              size={"lg"}
              variant={"outline"}
            >
              {item.shortTitle}
            </Button>
          ))}
        </Row>
        <div className="mt-8"></div>
        <Step className={"mt-4"} step="2" text="Build CSV" />
      </Column>
      <div
        id="playground-section"
        className="flex items-center w-full justify-center"
      >
        <div className="w-full max-w-5xl mx-auto gap-2 md:gap-6 flex flex-col md:flex-row items-center md:items-start">
          <Column className="flex-col md:flex-row w-full flex items-start gap-4">
            <JSONDataFrom
              formProps={{
                fields,
                control,
                append,
                removeField,
                handleSubmit,
                handleGenerateJSON,
                errors,
              }}
              completionProps={{
                isLoading,
                stop,
              }}
            />
            <JSONDataCodeBlock completion={completion} />
          </Column>
        </div>
      </div>
    </React.Fragment>
  );
}
