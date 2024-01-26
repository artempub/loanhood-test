export class Project {
    id: number | undefined;
    name: string = '';
    desc: string = '';
    img: string = '';
    price: number = 0;
    isActive: boolean = false;
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.desc) this.desc = initializer.description;
      if (initializer.img) this.img = initializer.img;
      if (initializer.budget) this.price = initializer.budget;
      if (initializer.isActive) this.isActive = initializer.isActive;
    }
  }