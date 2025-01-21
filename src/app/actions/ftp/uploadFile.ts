'use server';

import { Readable } from 'stream';
import { connectToFTP } from './connect';

export async function UploadFile({
  formData,
  loc,
}: {
  formData: FormData;
  loc: string;
}) {
  const client = await connectToFTP(loc);

  try {
    const file = formData.get('file') as File;
    const maxSize = 200 * 1024 * 1024;

    if (!file) {
      throw new Error('No file uploaded');
    }

    if (file.size > maxSize) {
      throw new Error('File too large. Maximum size is 200 MB');
    }

    console.log('FTP connection established');

    const buffer = Buffer.from(await file.arrayBuffer());
    const readable = Readable.from(buffer);
    await client.uploadFrom(readable, file.name);

    console.log('File uploaded successfully');
  } catch (error: unknown) {
    const errorMsg = (error as { message: string }).message ?? 'Upload failed';
    console.error('Upload error:', error);
    throw new Error(errorMsg);
  } finally {
    client.close();
  }
}
