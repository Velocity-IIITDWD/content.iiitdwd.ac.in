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
    await client.ensureDir('/trash');
    await client.rename(`/${filename}`, `/trash/${filename}`);

    console.log(`File ${filename} moved to /trash successfully.`);
  } catch (e) {
    const errorMsg = (e as { message: string })?.message || '';
    console.error('Error moving file to trash:', e);
    throw new Error(`Failed to move file to trash: ${errorMsg}`);
  } finally {
    client.close();
  }
}
