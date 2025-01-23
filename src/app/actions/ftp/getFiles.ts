'use server';

import { connectToFTP } from './connect';

export async function GetFiles(loc: string) {
  const client = await connectToFTP(loc);
  try {
    const files = await client.list();
    const filesData =
      files?.map((file) => ({
        name: file.name,
        size: file.size,
        modifiedAt: file.modifiedAt,
      })) ?? [];
    return filesData;
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    client.close();
  }
}
