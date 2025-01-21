'use server';

import { Client } from 'basic-ftp';

export async function connectToFTP(loc?: string) {
  const host =
    loc !== 'images' ? process.env.FTP_HOST : process.env.IMAGES_FTP_HOST;
  const user =
    loc !== 'images' ? process.env.FTP_USER : process.env.IMAGES_FTP_USER;
  const pass =
    loc !== 'images' ? process.env.FTP_PASS : process.env.IMAGES_FTP_PASS;
  const client = new Client();
  try {
    if (!host || !user || !pass) {
      throw new Error(
        'Missing FTP configuration. Please check your environment variables.'
      );
    }
    await client.access({
      host,
      user,
      password: pass,
      secure: false,
    });
    return client;
  } catch (e: unknown) {
    const errorMsg = (e as { message: string })?.message || '';
    console.error('Error connecting to FTP server:', e);
    throw new Error(`Failed to connect to FTP server: ${errorMsg}`);
  }
}
