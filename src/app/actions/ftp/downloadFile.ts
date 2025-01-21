'use server';

import { PassThrough } from 'stream';
import { connectToFTP } from './connect';

export async function downloadFile({
  filename,
  loc,
}: {
  filename: string;
  loc: string;
}): Promise<ReadableStream> {
  const client = await connectToFTP(loc);

  try {
    // Create a PassThrough stream to act as a bridge
    const passThroughStream = new PassThrough();

    // Convert the PassThrough stream to a ReadableStream
    const readableStream = new ReadableStream({
      start(controller) {
        passThroughStream.on('data', (chunk) => {
          controller.enqueue(chunk);
        });

        passThroughStream.on('end', () => {
          console.log('Stream ended');
          controller.close();
        });

        passThroughStream.on('error', (error) => {
          console.error('Error streaming file:', error);
          controller.error(`Failed to stream file: ${error.message}`);
        });
      },
    });

    // Download the file from the FTP server and pipe it to the PassThrough stream
    await client.downloadTo(passThroughStream, filename);

    return readableStream;
  } catch (e) {
    const errorMsg = (e as { message: string })?.message || '';
    console.error('Error downloading file:', e);
    throw new Error(`Failed to download file: ${errorMsg}`);
  } finally {
    client.close();
  }
}
