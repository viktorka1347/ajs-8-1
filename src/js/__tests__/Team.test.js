import Team from '../Team';

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const hero1 = new Character('Рома', 'Zombie');
const hero2 = new Character('Вова', 'Bowman');
const hero3 = new Character('Витя', 'Undead');
const hero4 = new Character('Коля', 'Daemon');

test('Должна создаваться команда', () => {
  const project = new Team(hero3, hero1, hero3, hero2, hero1, hero4);
  const result = new Set([hero3, hero1, hero2, hero4]);
  expect(project.members).toEqual(result);
});

test('Должен добавляться новый участник', () => {
  const project = new Team(hero3, hero2);
  project.add(hero1);
  const result = new Set([hero3, hero2, hero1]);
  expect(project.members).toEqual(result);
});

test('Не должен повторно добавляться существующий участник', () => {
  const project = new Team(hero3, hero2);
  expect(() => project.add(hero3)).toThrow('Этот участник уже в команде');
});

test('Должна добавляться группа участников', () => {
  const project = new Team(hero3, hero2);
  project.addAll(hero1, hero2, hero3, hero4);
  const result = new Set([hero3, hero2, hero1, hero4]);
  expect(project.members).toEqual(result);
});

test('Список участников должен конвертироваться в массив', () => {
  const team = new Team(hero3, hero2, hero4, hero1);
  const array = [hero3, hero2, hero4, hero1];
  expect(team.toArray()).toEqual(array);
});
