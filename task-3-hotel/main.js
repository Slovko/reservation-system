import { getAvailableRooms, bookRoom } from "./booking.js";

console.group("Завдання 3. Бронювання готелю");
console.group("Доступні номери до бронювання");
console.table(getAvailableRooms());
console.groupEnd();
console.group("Результати бронювання");
console.log(bookRoom(1, 3));
console.log(bookRoom(2, 5));
console.log(bookRoom(3, 2));
console.log(bookRoom(1, 2));
console.log(bookRoom(4, 0));
console.log(bookRoom(99, 2));
console.groupEnd();
console.group("Доступні номери після бронювання");
console.table(getAvailableRooms());
console.groupEnd();
console.groupEnd();

