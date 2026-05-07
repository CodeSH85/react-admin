import { PostComponent } from '@/components/post'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$slug')({
  component: PostComponent
})
