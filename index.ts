import inquirer from 'inquirer';

class Car {
  private brand: string;
  private model: string;
  private year: number;
  private speed: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  accelerate(): void {
    this.speed += 10;
    console.log(`The ${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  }

  brake(): void {
    this.speed -= 5;
    if (this.speed < 0) this.speed = 0;
    console.log(`The ${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  }

  honk(): void {
    console.log(`The ${this.brand} ${this.model} is honking.`);
  }

  getSpeed(): number {
    return this.speed;
  }
}

async function main() {
  console.log('Welcome to the Car Simulator!');
  const { brand, model, year } = await inquirer.prompt([
    { type: 'input', name: 'brand', message: 'Enter car brand:' },
    { type: 'input', name: 'model', message: 'Enter car model:' },
    { type: 'number', name: 'year', message: 'Enter car year:' },
  ]);

  const car = new Car(brand, model, year);

  while (true) {
    const { choice } = await inquirer.prompt({
      type: 'list',
      name: 'choice',
      message: 'Select an option:',
      choices: ['Accelerate', 'Brake', 'Honk', 'Check Speed', 'Exit'],
    });

    if (choice === 'Accelerate') {
      car.accelerate();
    } else if (choice === 'Brake') {
      car.brake();
    } else if (choice === 'Honk') {
      car.honk();
    } else if (choice === 'Check Speed') {
      console.log(`Current speed of the ${car.getSpeed()} km/h`);
    } else {
      console.log('Thank you for using the Car Simulator!');
      break;
    }
  }
}

main();
