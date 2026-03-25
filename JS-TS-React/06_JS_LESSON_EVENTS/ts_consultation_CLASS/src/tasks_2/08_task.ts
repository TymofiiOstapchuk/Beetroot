import { Equal, Expect } from "../utils/utils";
/*  
 Наприклад -  з константи getProps треба витягнути props (його тип !!!) 
*/

{
  const getProps = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json: { title: string } = await data.json();
    return {
      props: {
        json,
      },
    };
  };

  type InferProps = unknown;

  type T1 = InferProps<typeof getProps>;

  /* tests */
  type tests = [Expect<Equal<T1, { json: { title: string } }>>];
}
