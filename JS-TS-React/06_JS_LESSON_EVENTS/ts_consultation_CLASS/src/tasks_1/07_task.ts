const parseValue = (value: unknown) => {
  if (true) {
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
