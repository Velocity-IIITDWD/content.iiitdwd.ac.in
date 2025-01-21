'use server';

import { connectToFTP } from './connect';

export async function deleteFile({
  filename,
  loc,
}: {
  filename: string;
  loc: string;
}) {
  const client = await connectToFTP(loc);
  try {
    await client.remove(filename);
    console.log(`File ${filename} deleted successfully.`);
  } catch (e) {
    const errorMsg = (e as { message: string })?.message || '';
    console.error('Error deleting file:', e);
    throw new Error(`Failed to delete file: ${errorMsg}`);
  } finally {
    client.close();
  }
}
