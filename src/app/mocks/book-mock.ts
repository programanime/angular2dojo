import { Book } from '../components/book';

export const BOOKS: Book[] = [
  { id: 11, name: 'Cien años de soledad', author: "Gabriel García Marquez", price: 3000,  image: "assets/images/cien.jpeg", isAvailable: true, description: "Cien años de soledad description"},
  { id: 12, name: 'El juego de Ripper', author: "Isabel Allende", price: 4000,  image: "assets/images/ripper.jpeg", isAvailable: true, description: "Ripper description" },
  { id: 13, name: 'Jobs', author: "Walter Isaacson" , price: 10000,  image: "assets/images/jobs.jpeg", isAvailable: true, description: "Jobs description" },
  { id: 14, name: 'La tregua', author: "Mario Benedetti", price: 2000,  image: "assets/images/tregua.jpeg", isAvailable: true, description: "La tregua description" },
  { id: 14, name: 'El tunel', author: "Ernesto Sábato", price: 7000,  image: "assets/images/tunel.jpeg", isAvailable: true, description: "El tunel description" }
];
