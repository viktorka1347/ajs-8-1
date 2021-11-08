export default class Team {
  constructor(...heroes) {
    this.members = new Set([...heroes]);
  }

  add(hero) {
    if (this.members.has(hero)) {
      throw (new Error('Этот участник уже в команде'));
    }
    this.members.add(hero);
  }

  addAll(...rest) {
    rest.forEach((hero) => this.members.add(hero));
  }

  toArray() {
    return Array.from(this.members);
  }
}
