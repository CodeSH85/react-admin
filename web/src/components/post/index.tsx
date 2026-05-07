import { useParams } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'

export const PostComponent = () => {
  const { slug } = useParams({ from: '/posts/$slug' })

  return (
    <Card>
      Post {slug}
    </Card>
  )
}
