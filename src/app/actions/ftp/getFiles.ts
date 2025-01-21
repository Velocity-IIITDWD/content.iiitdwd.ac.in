'use server';

import { connectToFTP } from './connect';

export async function GetFiles(loc: string) {
  console.log('fetching...');
  const client = await connectToFTP(loc);
  try {
    const files = await client.list();
    const filesData =
      files?.map((file) => ({
        name: file.name,
        size: file.size,
        modifiedAt: file.modifiedAt,
      })) ?? [];
    console.dir({ filesData });
    return filesData;
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    client.close();
  }
}
