// src/app/not-found.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from '@/app/assets/banner';
import Container from '../components/header/Container';
import Button from '../components/button/Button';


function NotFoundPage() {
  return (
    <Container className="flex flex-col gap-2 items-center py-10">
      <Image src={notFound} alt="Not Found" className="max-w-96" />
      <Button href="/">Back To Home</Button>
    </Container>
  );
}

export default NotFoundPage;
