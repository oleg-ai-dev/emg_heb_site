// Cross-platform script to set permissions for Vite executable
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

// Get current directory
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vitePath = path.join(__dirname, 'node_modules', '.bin', 'vite');

try {
  if (os.platform() === 'win32') {
    console.log('Windows detected - chmod not needed');
  } else {
    // On Unix-like systems (Linux, macOS), set executable permissions
    fs.chmodSync(vitePath, 0o755);
    console.log('Set executable permissions for Vite on', os.platform());
  }
} catch (error) {
  console.error('Error setting permissions:', error.message);
}
