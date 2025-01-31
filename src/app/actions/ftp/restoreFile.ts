'use server';

import { connectToFTP } from './connect';

export async function restoreFile({
  filename,
  loc,
}: {
  filename: string;
  loc: string;
}) {
  const client = await connectToFTP(loc);
  try {
    await client.rename(`/trash/${filename}`, `/${filename}`);
    console.log(`File ${filename} restored successfully.`);
  } catch (e) {
    const errorMsg = (e as { message: string })?.message || '';
    console.error('Error restoring file:', e);
    throw new Error(`Failed to restore file: ${errorMsg}`);
  } finally {
    client.close();
  }
}
