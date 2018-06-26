import { Exercise } from './exercise.module';

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'crunches', name: 'Cruches', duration: 30, calories: 8 },
    { id: 'tourch-toes', name: 'Touch Toes', duration: 180, calories: 100 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 80 },
  ];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
}
