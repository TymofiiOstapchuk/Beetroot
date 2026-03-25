const throwError = (message: string): undefined => {
  throw new Error(message);
};

const handleSearchParams = (params: { id?: string }) => {
  /* 
    Якщо зробити hover над константою id string | undefined 
    Але тип id має бути string
    Знадаємо Lesson_2_js 
      expr1 || expr2 =>   if(expr1 === true ) return expr1
                           else return expr2
    */
  const id = params.id || throwError("No id provided");
  return id;
};
