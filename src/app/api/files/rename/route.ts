import { NextResponse } from 'next/server';
import { Client } from 'basic-ftp';

export const runtime = 'nodejs';

export async function POST(req: Request) {
    const client = new Client();
    try {
        const { oldName, newName } = await req.json();
        
        await client.access({
            host: process.env.FTP_HOST!,
            user: process.env.FTP_USER!,
            password: process.env.FTP_PASSWORD!,
            port: 21,
        });

        await client.rename(oldName, newName);
        return NextResponse.json({ message: 'File renamed successfully' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        client.close();
    }
}

