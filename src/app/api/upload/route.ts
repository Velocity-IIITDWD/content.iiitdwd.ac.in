import { NextResponse } from 'next/server';
import { Client } from 'basic-ftp';
import { Readable } from 'stream';

export const runtime = 'nodejs';

export async function POST(req: Request) {
    console.log('Upload request received');
    console.log('Environment check:', {
        host: process.env.FTP_HOST ? 'exists' : 'missing',
        user: process.env.FTP_USER ? 'exists' : 'missing',
        password: process.env.FTP_PASSWORD ? 'exists' : 'missing'
    });
    
    const client = new Client();
    
    try {
        if (!process.env.FTP_HOST || !process.env.FTP_USER || !process.env.FTP_PASSWORD) {
            throw new Error('Missing FTP configuration. Please check your environment variables.');
        }

        const data = await req.formData();
        const file = data.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' }, 
                { status: 400 }
            );
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: 'File too large. Maximum size is 5MB' }, 
                { status: 400 }
            );
        }

        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            port: 21,
        });

        console.log('FTP connection established');

        const buffer = Buffer.from(await file.arrayBuffer());
        const readable = Readable.from(buffer);
        await client.uploadFrom(readable, file.name);

        console.log('File uploaded successfully');

        return NextResponse.json({ 
            message: 'File uploaded successfully',
            filename: file.name 
        });
    } catch (error: any) {
        console.error('Upload error:', error);
        return NextResponse.json(
            { error: error.message || 'Upload failed' }, 
            { status: 500 }
        );
    } finally {
        client.close();
    }
}

