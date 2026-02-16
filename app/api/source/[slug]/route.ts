import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { registry } from '@/lib/registry';

export async function GET(
    _request: Request,
    { params }: { params: { slug: string } }
) {
    const item = registry.find((i) => i.slug === params.slug);
    if (!item) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Map slug to component filename
    const filename = `${params.slug}.tsx`;
    const filePath = path.join(process.cwd(), 'app', 'components', filename);

    try {
        const source = fs.readFileSync(filePath, 'utf-8');
        return NextResponse.json({ source });
    } catch {
        // Fallback to registry code field
        return NextResponse.json({ source: item.code });
    }
}
