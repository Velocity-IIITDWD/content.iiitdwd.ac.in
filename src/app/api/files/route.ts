import { NextResponse } from 'next/server';
import { Client } from 'basic-ftp';

export const runtime = 'nodejs';

export async function GET() {
    const client = new Client();
    try {
        await client.access({
            host: process.env.FTP_HOST!,
            user: process.env.FTP_USER!,
            password: process.env.FTP_PASSWORD!,
            port: 21,
        });

        const files = await client.list();
        return NextResponse.json(files);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        client.close();
    }
}

