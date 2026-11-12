import { rooms } from "./rooms.js";

export function getAvailableRooms() {
  return rooms.filter(room => room.available);
}

export function findRoom(id) {
  return rooms.find(room => room.id === id);
}

export function bookRoom(id, nights) {
  const room = findRoom(id);
  if (!room) return "Номер " + id + " не знайдено.";
  if (!room.available) return "Номер " + id + " недоступний.";
  if (!Number.isInteger(nights) || nights <= 0) {
    return "Кількість ночей має бути додатним цілим числом.";
  }

  const total = room.price * nights * (nights >= 5 ? 0.85 : 1);
  room.available = false;
  return "Номер " + id + " заброньовано. Кількість ночей: " + nights + ". Вартість: " +
    total + " грн" + (nights >= 5 ? " (знижка 15%)" : "") + ".";
}


