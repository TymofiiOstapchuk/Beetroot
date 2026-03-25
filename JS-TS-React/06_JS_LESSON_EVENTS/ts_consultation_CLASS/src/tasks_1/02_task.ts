/*  
Завдання -  визначити тип для параметру direction такий тип, 
щоб він передбачав тільки  отримання
"left" або "right"  або "up"  або "down"  
 */

{
  function move(direction: string, distance: number) {}

  move("up", 10);
  move("left", 5);

  move("up-right", 10); // має бути error
  move("down-left", 20); // має бути error
  move("up", "20"); // має бути error 20 is not valide
}
