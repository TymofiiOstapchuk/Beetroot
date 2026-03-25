/* 
замість типу для  coordinates: Array<number> тут має бути
tuple але його 3-й параметр має бути optional

Завдання - визначити такий тип 

*/
{
  /* var 2 => [lt: number, lng:number, elevation?: number] */
  const goToLocation = (coordinates: [number, number, number?]) => {
    const lt = coordinates[0];
    const lng = coordinates[1];
    const elevation = coordinates[2];
  };

  goToLocation([10, 20]);

  goToLocation([10, "20"]); // має бути помилка

  goToLocation([10, 20, 30]);
}
