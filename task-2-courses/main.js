const courses = [
  { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
  { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
  { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
  { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
  { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 }
];

function calculateAveragePrice(courses) {
  if (courses.length === 0) return 0;
  let total = 0;
  for (const course of courses) {
    total += course.price;
  }
  return total / courses.length;
}

const programmingCourses = courses.filter(course => course.category === "Programming");
const titlesWithPrices = courses.map(course => course.title + " — " + course.price + " грн");
const courseWithId4 = courses.find(course => course.id === 4);
const sortedByStudents = [...courses].sort((a, b) => b.students - a.students);

console.group("Завдання 2. Каталог онлайн-курсів");
console.group("Курси категорії Programming");
console.table(programmingCourses);
console.groupEnd();
console.group("Назви курсів із цінами");
console.log(titlesWithPrices);
console.groupEnd();
console.group("Курс із ID 4");
console.log(courseWithId4);
console.groupEnd();
console.group("Курси за кількістю студентів (за спаданням)");
console.table(sortedByStudents);
console.groupEnd();
console.group("Середня ціна");
console.log(calculateAveragePrice(courses) + " грн");
console.groupEnd();
console.groupEnd();

