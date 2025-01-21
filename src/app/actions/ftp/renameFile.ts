'use server';

import { connectToFTP } from './connect';

export async function renameFile({
  oldFilename,
  newFilename,
  loc,
}: {
  oldFilename: string;
  newFilename: string;
  loc: string;
}) {
  const client = await connectToFTP(loc);
  try {
    await client.rename(oldFilename, newFilename);
    console.log(`File ${oldFilename} renamed to ${newFilename} successfully.`);
  } catch (e) {
    const errorMsg = (e as { message: string })?.message || '';
    console.error('Error renaming file:', e);
    throw new Error(`Failed to rename file: ${errorMsg}`);
  } finally {
    client.close();
  }
}
