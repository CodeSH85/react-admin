import connectToDatabase from '@/lib/connect-db';
import Module from '@/models/module';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { title, key } = await request.json();
  await connectToDatabase();
  await Module.create({
    title,
    key,
  });
  return NextResponse.json(
    {
      message: 'Module created',
    },
    {
      status: 201,
    }
  );
}

export async function GET() {
  await connectToDatabase();
  const modules = await Module.find();
  return NextResponse.json({ modules });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  await connectToDatabase();
  await Module.findByIdAndDelete(id);
  return NextResponse.json(
    {
      message: 'Module deleted',
    },
    {
      status: 200,
    }
  );
}
