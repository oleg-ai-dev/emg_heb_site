import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldPath = path.join(__dirname, 'public', 'images', 'תסמונות לחץ על עצבים פריפריים.jpg');
const newPath = path.join(__dirname, 'public', 'images', 'תסמונות-לחץ-עצבים.jpg');

fs.rename(oldPath, newPath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully');
  }
});
