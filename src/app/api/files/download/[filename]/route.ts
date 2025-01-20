import { NextResponse } from 'next/server';
import { Client } from 'basic-ftp';
import { Readable } from 'stream';

export const runtime = 'nodejs';

export async function GET(
    request: Request,
    { params }: { params: { filename: string } }
) {
    const client = new Client();
    try {
        await client.access({
            host: process.env.FTP_HOST!,
            user: process.env.FTP_USER!,
            password: process.env.FTP_PASSWORD!,
            port: 21,
        });

        const chunks: Buffer[] = [];
        await client.downloadTo(
            new (require('stream').Writable)({
                write(chunk: Buffer, encoding: string, callback: Function) {
                    chunks.push(chunk);
                    callback();
                }
            }),
            params.filename
        );

        const buffer = Buffer.concat(chunks);
        return new Response(buffer, {
            headers: {
                'Content-Disposition': `attachment; filename=${params.filename}`,
                'Content-Type': 'application/octet-stream',
            },
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        client.close();
    }
}

