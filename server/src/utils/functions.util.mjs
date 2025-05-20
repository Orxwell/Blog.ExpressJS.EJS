// External $ Internal Libraries
import { readdir } from 'fs/promises';


export function castingType({ cast = '' } = {}) {
  if (typeof cast !== 'string') return undefined;

  const trimmed = cast.trim();

  if (trimmed === '') return undefined;

  if (
    !isNaN(trimmed)                     &&
    trimmed === String(Number(trimmed))
  ) { return 'number'; }

  return 'string';
}

// Async-function to get the folders of a folder...
export async function getFolders(directoryPath) {
  try {
    // Find the folder content, including archives types
    const folder_content = await readdir(directoryPath, { withFileTypes: true });

    // Filter the folder content by directories
    const filtered_folders = folder_content.filter(dirent => dirent.isDirectory());

    // Return just the names of the directories
    return filtered_folders.map(dirent => dirent.name);
  } catch (err) { throw err; }
}

// Async-function to get the files of a folder...
export async function getFiles(directoryPath) {
  try {
    // Find the folder content, including archives types
    const folder_content = await readdir(directoryPath, { withFileTypes: true });

    // Filter the folder content by files
    const filtered_files = folder_content.filter(dirent => dirent.isFile());
    
    // Return just the names of the files
    return filtered_files.map(dirent => dirent.name);
  } catch (_) { return; }
}
