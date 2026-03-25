const parseValue = (value: unknown) => {
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  ) {
    return value.data.id;
  }
  throw new Error("Parsing error!");
};

/*  result should be "123" */
const result = parseValue({
  data: {
    id: "123",
  },
});

parseValue("123"); // Error
parseValue(123); // error
